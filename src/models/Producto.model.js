
const {
    model,
    Schema
} = require('mongoose')

const productSchema = new Schema({
    productName: {
        type: String,
        required: true
    },
    marca: {
        type: String,
        required: true
    },
    presentacion: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true

    },
    idComercio : {
        type: Schema.Types.ObjectId,
        ref: 'Comercios'
    },
    isActive : {
        type: Boolean,
        default: true
    }
}, {
    versionKey: false,
    timestamps: true
})

module.exports = model('Productos', productSchema);
