const ForoMensaje = require('../models/Foro.model');

const ctrlForo ={};

// ****************    GET    ***********************************
ctrlForo.getForoMens = async (req, res) =>{
    // const {isActive} =req.body;

        try {
            const mensaForo = await ForoMensaje.find({isActive:true})
            .populate("idComercio")
            // .sort({updatedAt:"desc"})

            return res.json(mensaForo);

        } catch (error) {
            return res.json({
                msg: 'Error al obtener el dato del foro'
            })
        }
    
};
// ****************    POST    ***********************************
ctrlForo.postForoMens = async (req, res) =>{
    
    const {commerceName, telefono, mensaje, idComercio} = req.body;
    try {
        const newForo = new ForoMensaje({ 
        commerceName,
        telefono, 
        mensaje,
        idComercio
    }); 
    
    const foroMensaje = await newForo.save()

    return res.json({
        msg: 'Mensaje del foro cargado correctamente',
        foroMensaje
    });
    }
    catch (error) {
        return res.json({
            msg: 'Error al crear el dato del foro',
            error:error.message
        });
    }
};
// ****************    PUT     ***********************************
ctrlForo.putForoMens = async (req, res) =>{
    const Foroid = req.params.id_Foro
    
    const {commerceName, telefono, mensaje} = req.body;
    
    try {
        const foroUpdate = await ForoMensaje.findByIdAndUpdate( Foroid,
        {commerceName, telefono, mensaje
    }); 
    return res.json(
        {
            msg: 'Foro actualizado correctamente',
            foroUpdate
        })
    }
    catch (error) {
        return res.json({
            msg: 'Error al actualizar el dato del foro',
            error:error.message
        });
    }
};

// ****************    DELETE   ***********************************
ctrlForo.deleteForoMens = async (req,res)=>{
    const Foroid = req.params.id_Foro
    
    try {
        await ForoMensaje.findByIdAndUpdate(Foroid,{isActive: false})
        return res.json({
            msg: 'Mensaje del foro eliminado correctamente'
        })
    } catch (error) {
        return res.res.json({
            msg: 'Error al eliminar el mensaje del foro'
        })
    };
};


module.exports = ctrlForo;