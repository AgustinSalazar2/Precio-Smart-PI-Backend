const { isValidObjectId } = require('mongoose');
const User = require('../models/User.models');



const validateEmail = async value => {

    const user = await User.findOne({ email : value });

    if (user) {
        throw new Error('El usuario ya existe! 🚫');
    }

    return true;

}

module.exports = validateEmail;