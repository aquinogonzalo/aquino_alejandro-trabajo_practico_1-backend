//Controllers para comentario
const Comentario = require('../models/Comentario.js');
const ctrlComentario = {};

//Crear comentario
ctrlComentario.crearComentario = async (req, res) => {
    try {
        const {
            id_post,
            contenido,
        } = req.body;
        const nuevoComentario = await Comentario.create({
            id_post,
            contenido,
        })
        res.json(nuevoComentario);
    }
    catch (error) {
        console.error(error);
        console.log('Error al crear Comentario', error);
        return res.status(500).json({ message: 'Error al crear Comentario' })
    }
}

// Borrar comentario
ctrlComentario.eliminarComentario = async (req, res) => {
    try {
        const id = req.params.id_comentario;
        await Comentario.destroy({
            where: {
                id_comentario: id
            }
        })
        return res.json({ message: 'Comentario eliminado' })

    }
    catch (error) {
        console.error(error);
        console.log('Error al eliminar Comentario', error);
        return res.status(500).json({ message: 'Error al eliminar Comentario' })
    }
}

module.exports = ctrlComentario;