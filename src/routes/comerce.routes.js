//*Importing tu hermana:
const express = require('express');

const router = express.Router();


//*Importing controllers:
const { 
    getComercio,
    postComercio,
    putComercios,
    deleteComercio,
    getComercios
} = require('../controllers/comerce.controller');

//---------------------------------------------------------------------------------------------------------
//*DEFINO RUTAS:

// Ruta para obtener todos los usuarios ACTIVOS (no borrados). Sólo puede ser usado por usuarios con permisos de administrador
router.route('/comercios')
    .get( getComercios )
    

    // Ruta para ACTUALIZAR el usuario con id específico
router.route('/comercios/:id_comerce')
    .put( putComercios )
    .delete( deleteComercio )
    .get( getComercio )
    


// Ruta para AÑADIR NUEVO usuario. No ser requiere TOKEN ni permisos de administrador
router.route('/comercio')
    .post( postComercio );


module.exports = router;
