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
const validateJWT = require('../middlewares/validate-jwt.middlewares');

//---------------------------------------------------------------------------------------------------------
//*DEFINO RUTAS:


router.route('/comercios')
    .get( getComercios )
    


router.route('/comercios/:id_comerce')
    .put( putComercios )
    .delete( deleteComercio )
    .get( getComercio )
    



router.route('/comercio')
    .post([validateJWT], postComercio );


module.exports = router;
