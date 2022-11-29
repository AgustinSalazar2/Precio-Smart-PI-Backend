
const Producto = require('../models/Producto.model');

const ctrlProduct = {};

// ctrlProduct.getProducts = async (req, res) => {
//     const { limite =  10} = req.params;
//     try {
//        if(limite) {
//         const products = await Producto.find()
//         .populate('idComercio')
//         .sort({precio: 1})
//         .limit(limite)
//        }else {
//         const products = await Producto.find()
//         .populate('idComercio')
//         .sort({precio: 1})
//        }
//         return res.json(products);
    
//     } catch (error) {
//         return res.json({
//             msg: 'Error al obtener productos'
//         })
//     }
// };

ctrlProduct.getProducts = async (req, res) => {
    try {
        const products = await Producto.find()
        .populate('idComercio')
        .sort({precio: 1})

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


ctrlProduct.postProduct = async (req, res) => {    
    const { categoria, productName, marca, presentacion, precio, idComercio } = req.body;
    
    try {
        const newProduct = new Producto({   //Se instancia un nuevo documento de mongodb
            categoria,
            productName,
            marca,
            presentacion,
            precio,
            idComercio
            
        });
    
        const product = await newProduct.save(); //Se almacena en la base de datos con el metodo save()
    
        return res.json({
            msg: 'Producto cargado correctamente',
            product
        });
    } catch (error) {
        return res.json({
            msg: 'Error al crear un comercio',
            error:error.message
        });
    }
};

ctrlProduct.putProduct = async (req, res) => {
    const productId = req.params.id_product;
    const { productName, marca, presentacion, precio, idComercio, isActive, ...otros } = req.body;

    try {
        const productUpdate = await Producto.findByIdAndUpdate(productId, { productName, marca, presentacion, precio, idComercio, isActive, ...otros });
        return res.json(
            {
            msg: 'Producto actualizado correctamente',
            productUpdate
            }
        )

    } catch (error) {
        console.log(error);
        return res.json({
            msg: 'Error al actualizar el producto'
        });
    }
};

ctrlProduct.deleteProduct = async (req, res)=>{ 
    const productId = req.params.id_product;

    try {
        await Producto.findByIdAndUpdate(productId, {isActive: false})
        return res.json({
            msg: 'Producto eliminado correctamente'
        })

    } catch (error) {
        console.log(error)
        return res.json({
            msg: 'Error al eliminar el producto'
        });
    }
};

module.exports = ctrlProduct
