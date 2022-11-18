
const Producto = require('../models/Producto.model');

const ctrlProduct = {};

ctrlProduct.getProducts = async (req, res) => {
    try {
        const products = await Producto.find();
        return res.json(products);
    
    } catch (error) {
        return res.json({
            msg: 'Error al obtener productos'
        })
    }
};

ctrlProduct.getProduct = async (req, res) => {
    const productId = req.params.id_product;
    try {
        const product = await Producto.findById(productId);
        return res.json(product);

    } catch (error) {
        return res.json({
            msg: 'Error al obtener el producto'
        })
    }
};
/* 
ctrlProduct.postProducto = async (req, res) => {    
    const { commerceName, direccion, phone } = req.body;
    
    try {
        const newComercio = new Comercio({   //Se instancia un nuevo documento de mongodb
            commerceName,
            direccion,
            phone
        });
    
        const comerce = await newComercio.save(); //Se almacena en la base de datos con el metodo save()
    
        return res.json({
            msg: 'Comercio creado correctamente',
            comerce
        });
    } catch (error) {
        return res.json({
            msg: 'Error al crear un comercio',
            error:error.message
        });
    }
};

ctrlProduct.putComercios = async (req, res) => {
    const comerceId = req.params.id_comerce;
    const { comerceName, direccion, phone, ...otros } = req.body;

    try {
        const comerceUpdate = await Comercio.findByIdAndUpdate(comerceId, { comerceName, direccion, phone, ...otros });
        return res.json({
            msg: 'Comercio actualizado correctamente',
            comerceUpdate
        })

    } catch (error) {
        console.log(error);
        return res.json({
            msg: 'Error al actualizar el comercio'
        });
    }
};

ctrlProduct.deleteComercio = async (req, res)=>{ 
    const comerceId = req.params.id_comerce;

    try {
        await Comercio.findByIdAndUpdate(comerceId, {isActive: false})
        return res.json({
            msg: 'Comercio eliminado correctamente'
        })

    } catch (error) {
        console.log(error)
        return res.json({
            msg: 'Error al eliminar el comercio'
        });
    }
}; */

module.exports = ctrlProduct
