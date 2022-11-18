const Comercio = require('../models/Comercio.model');

const ctrlComerce = {};

ctrlComerce.getComercios = async (req, res) => {
    try {
        const comerces = await Comercio.find();
        return res.json(comerces);
    
    } catch (error) {
        return res.json({
            msg: 'Error al obtener comercios'
        })
    }
};

ctrlComerce.getComercio = async (req, res) => {
    const comerceId = req.params.id_comerce;
    try {
        const comerce = await Usuarios.findById(comerceId);
        return res.json(comerce);

    } catch (error) {
        return res.json({
            msg: 'Error al obtener el comercio'
        })
    }
};

ctrlComerce.postComercio = async (req, res) => {    
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

ctrlComerce.putComercios = async (req, res) => {
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

ctrlComerce.deleteComercio = async (req, res)=>{ 
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
};

module.exports = ctrlComerce