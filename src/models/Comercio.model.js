
const {
    model,
    Schema
} = require('mongoose')

const commerceSchema = new Schema({
    commerceName: {
        type: String,
        required: true
    },
    direccion: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required:true
    },
    idUsuario : {
        type: Schema.Types.ObjectId,
        ref: 'Usuarios'
    },
    isActive : {
        type: Boolean,
        default: true
    }
}, {
    versionKey: false,
    timestamps: true
})

module.exports = model('Comercios', commerceSchema);
