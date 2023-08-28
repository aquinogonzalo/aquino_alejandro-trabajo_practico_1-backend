const Usuario = require('../models/Usuario.js');
const ctrlUsuario = {};

ctrlUsuario.crearUsuario = async (req, res) => {
    const {
        nombre,
        correo,
        contraseña,
    } = req.body;

    try {
        const nuevoUsuario = await Usuario.create({
            nombre,
            correo,
            contraseña,
        })

        return res.status(201).json({ message: 'Usuario creado con éxito', nuevoUsuario })
    } catch (error) {
        console.error(error);
        console.log('Error al crear Usuario', error);
        return res.status(500).json({ message: 'Error al crear Usuario' })
    }
}

module.exports = ctrlUsuario;