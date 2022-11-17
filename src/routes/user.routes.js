
//*Importing libreries:
const express = require('express');

const router = express.Router();

//*importing middlewares:
const validateJWT = require('../middlewares/validate-jwt.middlewares');
// const isAdminUser = require('../middlewares/isAdminUser.middlewares');

//*Importing controllers:
const { 
    getActiveUsers,
    getSpecificUser,
    addUser,
    updateUser,
    softDeleteUser,
    hardDeleteUser,
    fullSoftDeleteUser
} = require('../controllers/user.controllers');

//---------------------------------------------------------------------------------------------------------
//*DEFINO RUTAS:

router.route('/users')
    // Ruta para obtener todos los usuarios ACTIVOS (no borrados). Sólo puede ser usado por usuarios con permisos de administrador
    .get( [validateJWT, isAdminUser], getActiveUsers )
    


router.route('/user/:id_user')
    // Ruta para OBTEBER el usuario con id específico
    .get( [validateJWT], getSpecificUser )

    // Ruta para ACTUALIZAR el usuario con id específico
    .put( [validateJWT], updateUser )

    // Ruta para ELIMINAR (NO ELIMINA DE LA BASE DE DATOS) el usuario con id específico
    .delete( [validateJWT], softDeleteUser )



// Ruta para AÑADIR NUEVO usuario. No ser requiere TOKEN ni permisos de administrador


router.post('/user', addUser);


module.exports = router;
