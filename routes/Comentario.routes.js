const { Router } = require('express');
const router = Router();

const {
    crearComentario,
    eliminarComentario
} = require('../controllers/Comentario.controllers');

// Routes Comentario
router.post('/api/comentario', crearComentario);
router.delete('/api/comentario/:id_comentario', eliminarComentario);
module.exports = router;