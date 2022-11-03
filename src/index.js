
//*#############################- IMPORTACIÓN DE LIBRERÍAS -#########################################

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');

//*##############################- IMPORTING CONNECTION TO DATABASE -#################################

const connectDB = require('./database/connection.database');

//Ejecuto la librería de express
const expressApp = express();

//*#############################- ROUTES -##########################################################
//*Importación de endpoints



//*#############################- CONFIGURATIONS -##################################################

dotenv.config();

port = process.env.PORT || 3000;

connectDB();//Ejecuto la función connectDB para HACER LA CONEXIÓN A LA BASE DE DATOS.

//*#############################- MIDDLEWARES -##################################################

expressApp.use(express.json());

expressApp.use(cors());
expressApp.use(morgan('dev'));
// expressApp.use(user);


//*#############################- DIRECTORIO DE ARCHIVOS ESTÁTICOS -#########################################
// expressApp.use(express.static(path.join(__dirname, 'src/public')));


//*#############################- STARTING SERVER -#################################################
expressApp.listen(port, () => {
    console.log(`Server running and listening on port: ${port}`);
});