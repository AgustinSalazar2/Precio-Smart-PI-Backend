//*Importing tu hermana:
const express = require('express');

const router = express.Router();


//*Importing controllers:
const {

    getProduct,
    getProducts,
    getProductsByCategoria,
    getProductsByComercio,
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

router.route('/products/:name_categoria')
    .get(getProductsByCategoria);

router.route('/products-comercio/:idComercio')
    .get(getProductsByComercio)


module.exports = router;
