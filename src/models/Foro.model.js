const {model, Schema} = require('mongoose')

const foroSchema = new Schema({
    commerceName: {
        type: String,
        required : true
    },
    telefono: {
        type: Number,
        required: true
    },
    mensaje: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
    idComercio: {
        type: Schema.Types.ObjectId,
        ref: 'Comercios' 
    }
},{
    versionKey: false,
    timestamps: true
})

module.exports = model ('Foros', foroSchema)