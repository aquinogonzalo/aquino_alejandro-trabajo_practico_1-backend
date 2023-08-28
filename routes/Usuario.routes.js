const { Router } = require('express');
const router = Router();

const {
    crearUsuario
} = require('../controllers/Usuario.controllers');

// Routes Usuario

// Crear un usuario
router.post('/api/usuario', crearUsuario);

module.exports = router