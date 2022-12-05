
//*#############################- IMPORTACIÓN DE LIBRERÍAS -#########################################

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');

//Ejecuto la librería de express
const app = express();

//*##############################- IMPORTING CONNECTION TO DATABASE -#################################

const connectDB = require('./database/connection.database');


//*#############################- CONFIGURATIONS -##################################################

dotenv.config();

port = process.env.PORT || 3000;

connectDB();//Ejecuto la función connectDB para HACER LA CONEXIÓN A LA BASE DE DATOS.

//*#############################- MIDDLEWARES -##################################################

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
// expressApp.use(user);

//*#############################- ROUTES -##########################################################
//*Importación de endpoints
app.use(require('./routes/auth.routes'));
app.use(require('./routes/user.routes'));
app.use(require('./routes/comerce.routes'));
app.use(require('./routes/product.routes'));
app.use(require('./routes/foro.routes'));

//*#############################- DIRECTORIO DE ARCHIVOS ESTÁTICOS -#########################################
// expressApp.use(express.static(path.join(__dirname, 'src/public')));


//*#############################- STARTING SERVER -#################################################
app.listen(port, () => {
    console.log(`Server running and listening on port: ${port}`);
});