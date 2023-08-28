// Importaciones 
const express = require('express');
require('dotenv').config();
const routerUsuario = require('./routes/Usuario.routes');


// Configuracion de la aplicación.
const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(express.json());


// Se conecta la Base de Datos
const { conexionDB } = require('./database');

conexionDB()

app.use(routerUsuario);

//Listen port
app.listen(port, () => {
    console.log(`Ok, parece que todo salió bien! El server corre en http://localhost:${port}`);
});