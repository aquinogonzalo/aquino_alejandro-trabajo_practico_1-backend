// Importaciones 
const express = require('express');
require('dotenv').config();

//Enrutadores
const routerUsuario = require('./routes/Usuario.routes');
const routerPost = require('./routes/Post.routes')
const routerComentario = require('./routes/Comentario.routes')

// Configuracion de la aplicación.
const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(express.json());

// Se conecta la Base de Datos
const { conexionDB } = require('./database');

conexionDB()

//Rutas
app.use(routerUsuario);
app.use(routerPost);
app.use(routerComentario);


//Listen port
app.listen(port, () => {
    console.log(`Ok, parece que todo salió bien! El server corre en http://localhost:${port}`);
});