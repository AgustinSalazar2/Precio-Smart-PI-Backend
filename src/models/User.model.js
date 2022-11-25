const {
    model,
    Schema
} = require('mongoose')

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    rol: {
        type: String,
        required: true

    },
    isActive : {
        type: Boolean,
        default: true
    },

    comerce_id : {
        type : Schema.Types.ObjectId,
        ref : 'Comercios' //!El ref indica la colección a la que tengo que ir a buscar el id!
    },

}, {
    versionKey: false,
    timestamps: true
})

module.exports = model('Usuarios', userSchema);