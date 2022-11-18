
//*Impoting libraries:

const jwt = require('jsonwebtoken');

//*Import the User model
const User = require('../models/User.model');


const validateJWT = async (req, res, next) => {

    // Se almacena el token recibido del cliente
    const token = req.headers.authorization;


    //*Verifico la existencia del token en la petición
    if(!token) {
        return res.status(401).json({
            message: 'Error trying to authenticate. TOKEN NOT FOUND  🤔',
        });
    };

    try {
        //*Se comprueba la validez del token, si es válido, se obtiene el id del usuario del mismo
        const { uid } = await jwt.verify(token, process.env.JWT_SECRET);
        
        const theUser = await User.findById(uid);

        if(!theUser) {
            return res.status(404).json({
                message: "Error trying to authenticate. The USER DOESN'T EXIST IN THE DB!  🤔",
            });
        };

        //*Verifico que el usuario esté activo!
        if(!theUser.isActive){
            return res.status(400).json({
                ok: false,
                message: "Error trying to authenticate. The user is NO LONGER ACTIVE 🕸🕷🕸."
            });
        };

        //! ########
        //!IMPORTANTE: Se añade información del usuario al request para que pueda ser utilizada en el resto de middlwares
        req.user = theUser;

        next();

    } catch (error) {
        
        console.log(error);
        res.status(401).json({
            message: 'Error trying to authenticate. NOT VALID TOKEN 💥🚫',
        });

    };

};

module.exports = validateJWT;
