const User = require('../models/User.model');

const generateJWT = require('../helpers/generateJWT');

const bcrypt = require('bcrypt');
const ComercioModel = require('../models/Comercio.model');


ctrlAuth = {};


ctrlAuth.startSession = async (req, res) => {
    const {username, password} = req.body;

    try {

        const user = await User.findOne({username});
        
        //----------------- INICIO VALIDACIONES -------------------------------------------------------
        //*Controlo que el nombre del usuario efectivamente esté en mi base de datos.
        if(!user){
            // console.log('User NOT FOUND');
            return res.status(400).json({
                ok: false,
                message: "Error trying to authenticate...🤔",
            });
        };

        //*Verifico que el usuario esté activo!
        if(!user.isActive){

            // console.log('The user is NO LONGER ACTIVE 🕸🕷🕸');
            return res.status(400).json({
                ok: false,
                message: "Error trying to authenticate.."
            });
        };

        //*VALIDACIÓN DE CONTRASEÑA:
        //*Con la biblioteca bcrypt comparo las contraseñas que envía el usuario a través de un formulario (en este caso en el body del rquest, con la contraseña que busco en la BD)

        const validatePass = bcrypt.compareSync( password , user.password ); 

        if(!validatePass){
            // console.log('The password is INCORRECT');
            return res.status(400).json({
                ok: false,
                message: "Error trying to authenticate 🚫."
            });
        } else {
            console.log("Contraseña correcta");
            
        };

        //----------------- FIN VALIDACIONES -------------------------------------------------------
        
        // if user.rol == 'comerciante' {
        //     const comerce = await ComercioModel.findOne({idUsuario: user._id})
        // }
        const comerce = await ComercioModel.findOne({idUsuario: user._id})
        
        //----------------------------------------------------------------------------------------
        //*GENERACIÓN DE TOKEN:
        //!La lógica de generación de tokens está en la carpeta helpers
        const token = await generateJWT({ uid: user._id });

        if (comerce) {
            return res.status(200).json({ 
                message: "Correct password! ✔",
                message2: `Welcome to the MATRIX ⚡🕶⚡, ${username}! ☘`,
                user:{
                    _id: user._id,
                    username: user.username,
                    email: user.email,
                    rol: user.rol
                },
                token,
                comerce
            });
        } else {
            return res.status(200).json({ 
                message: "Correct password! ✔",
                message2: `Welcome to the MATRIX ⚡🕶⚡, ${username}! ☘`,
                user:{
                    _id: user._id,
                    username: user.username,
                    email: user.email,
                    rol: user.rol
                },
                token });
        }

    } catch (error) {

        console.log(error);
        return res.status(500).json({ 
            message: 'Error trying to LOG IN 🔴🔘🔴' ,
        });
    }

};


module.exports = ctrlAuth;