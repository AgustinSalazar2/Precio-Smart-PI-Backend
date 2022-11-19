//*Importing tu hermana:
const express = require('express');

const router = express.Router();


//*Importing controllers:
const {

    getProduct,
    getProducts,
    postProduct,
    putProduct,
    deleteProduct

} = require('../controllers/product.controller');

//---------------------------------------------------------------------------------------------------------
//*DEFINO RUTAS:


router.route('/productos')
    .get( getProducts)

router.route('/productos/:id_product')
    .get( getProduct )
    .put( putProduct )
    .delete( deleteProduct )

router.route('/producto')
    .post( postProduct );

module.exports = router;
