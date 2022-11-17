const mongoose = require('mongoose');

const connectDB = async () => {

    const 
    {
        TASK_APP_MONGODB_HOST,
        TASK_APP_MONGODB_HOST_ATLAS,
        TASK_APP_MONGODB_DATABASE,
        TASK_APP_PASSWORD
    } = process.env;

    //!Conexión a MONGO DB ATLAS:
    const MONGO_ATLAS_URI = `mongodb+srv://${TASK_APP_MONGODB_HOST_ATLAS}:${TASK_APP_PASSWORD}@preciosmart-cluster.ag1ljws.mongodb.net/${TASK_APP_MONGODB_DATABASE}?retryWrites=true&w=majority`;

    

    //!Conexión a BD local con MONGO DB COMPASS:
    const MONGO_COMPASS_URI = `mongodb://${TASK_APP_MONGODB_HOST}/${TASK_APP_MONGODB_DATABASE}`;

    try {
        //*Conexión a Atlas
        mongoose.connect(MONGO_ATLAS_URI, {
            useUnifiedTopology : true,
            useNewUrlParser : true
        });

        //*Conexión a Compass.
        /* mongoose.connect(MONGO_COMPASS_URI, {
            useUnifiedTopology : true,
            useNewUrlParser : true
        }); */


        console.log('Conected to the database');

    } catch (error) {
        console.log(error.message);

        return res.status(500).json(
            {
                status: 500,
                message: error.message,
                msg: 'Error trying to connect to the database'
            }
        )
    }

}

module.exports = connectDB;