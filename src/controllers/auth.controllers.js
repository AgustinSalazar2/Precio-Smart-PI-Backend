const User = require('../models/User.model');

const generateJWT = require('../helpers/generateJWT');

const bcrypt = require('bcrypt');


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

        //*GENERACIÓN DE TOKEN:
        //!La lógica de generación de tokens está en la carpeta helpers
        const token = await generateJWT({ uid: user._id });

        return res.status(200).json({ 
            message: `Welcome to the MATRIX ⚡🕶⚡, ${username}! ☘`,
            user,
            token });

    } catch (error) {

        console.log(error);
        return res.status(500).json({ 
            message: 'Error trying to LOG IN 🔴🔘🔴' ,
        });
    }

};


module.exports = ctrlAuth;