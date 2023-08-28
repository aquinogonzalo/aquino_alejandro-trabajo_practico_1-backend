const { Router } = require('express');
const router = Router();

const {
    crearUsuario
} = require('../controllers/Usuario.controllers');

// Crear una usuario
router.post('/usuario', crearUsuario);

module.exports = router