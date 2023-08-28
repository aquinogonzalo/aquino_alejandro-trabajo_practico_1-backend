const { Router } = require('express');
const router = Router();

const {
    crearComentario,
    eliminarComentario
} = require('../controllers/Comentario.controllers');

// Routes Comentario

//Crear un comentario
router.post('/api/comentario', crearComentario);
//Borrar un comentario
router.delete('/api/comentario/:id_comentario', eliminarComentario);
module.exports = router;