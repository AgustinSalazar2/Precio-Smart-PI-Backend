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
    }

}, {
    versionKey: false,
    timestamps: true
})

module.exports = model('Usuarios', userSchema);