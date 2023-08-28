const { Router } = require('express');
const router = Router();

const {
    crearPost,
    obtenerPosts,
    obtenerPost,
    actualizarPost,
    eliminarPost
} = require('../controllers/Post.controllers');

//Routes CRUD

// Crear un post
router.post('/api/post', crearPost);
// Obtener todos los posts
router.get('/api/posts', obtenerPosts);
// Obtener un post
router.get('/api/post/:id_post', obtenerPost);
// Actualizar un post
router.put('/api/post/:id_post', actualizarPost);
// Eliminar un post
router.delete('/api/post/:id_post', eliminarPost);

module.exports = router