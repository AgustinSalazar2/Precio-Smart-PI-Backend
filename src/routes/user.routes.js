
//*Importing libreries:
const express = require('express');

const router = express.Router();

//*importing middlewares:
// const validateJWT = require('../middlewares/validate-jwt.middlewares');
// const isAdminUser = require('../middlewares/isAdminUser.middlewares');

//*Importing controllers:
const { 
    getUsuario,
    postUsuario,
    putUsuarios,
    deleteUsuario,
    getUsuarios
} = require('../controllers/user.controller');

//---------------------------------------------------------------------------------------------------------
//*DEFINO RUTAS:

router.route('/users')
    // Ruta para obtener todos los usuarios ACTIVOS (no borrados). Sólo puede ser usado por usuarios con permisos de administrador
    .get( getUsuarios )
    


router.route('/user/:id_user')
    // Ruta para OBTEBER el usuario con id específico
    .get( getUsuario )

    // Ruta para ACTUALIZAR el usuario con id específico
    .put( putUsuarios )

    // Ruta para ELIMINAR (NO ELIMINA DE LA BASE DE DATOS) el usuario con id específico
    .delete( deleteUsuario )


// Ruta para AÑADIR NUEVO usuario. No ser requiere TOKEN ni permisos de administrador

router.post('/user', postUsuario);


module.exports = router;
