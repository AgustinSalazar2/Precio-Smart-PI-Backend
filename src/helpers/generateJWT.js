
const jwt = require('jsonwebtoken');


const generateJWT = uid => {
    return new Promise ( (resolve, reject) => {
        //*Generación del token con el id del usuario y una palabra secreta
        jwt.sign( uid , process.env.JWT_SECRET, 
            {
            expiresIn : '24h'
            } ,
            (err, token) => {
                if (err) {
                    return reject(err);
                }
                console.log('Token generated: ', token);
                resolve(token);
            }
        );
    });
};

module.exports = generateJWT;