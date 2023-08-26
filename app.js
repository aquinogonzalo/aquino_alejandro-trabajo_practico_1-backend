// Importaciones 
const express = require('express');
const cors = require('cors');
const helmet = require('helmet')
const morgan = require('morgan');

// Configuracion de la aplicación.
const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(helmet());
app.use(morgan('dev'))
app.use(express.json());

require('dotenv').config();

// Se conecta la Base de Datos
const { conexionDB } = require('./database');

conexionDB()

//Listen port
app.listen(port, () => {
    console.log(`Ok, parece que todo salió bien! El server corre en http://localhost:${port}`);
});