const Post = require('../models/Post.js');
const ctrlPost = {};

//CRUD POST

//Create Post
ctrlPost.crearPost = async (req, res) => {
    const {
        id_usuario,
        título,
        contenido,
    } = req.body;
    try {
        const nuevoPost = await Post.create({
            id_usuario,
            título,
            contenido,
        })
        res.json(nuevoPost);
    }
    catch (error) {
        console.error(error);
        console.log('Error al crear Post', error);
        return res.status(500).json({ message: 'Error al crear Post' })
    }
}

//Read Post
ctrlPost.obtenerPosts = async (_req, res) => {
    try {
        const posts = await Post.findAll({
            attributes: ['id_post', 'título', 'contenido'],
        });

        return res.json(posts);
    } catch (error) {
        console.log('Error al obtener los posts', error);
        return res.status(500).json({
            message: 'Error al obtener los posts'
        })
    }
}

// Read Post (Pk)
ctrlPost.obtenerPost = async (req, res) => {
    console.log(req.params);
    try {
        const id = req.params.id_post;
        const post = await Post.findOne({
            where: {
                id_post: id
            },
            attributes: ['id_post', 'título', 'contenido'],

        });
        return res.json(post);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Error al obtener el post'
        })
    }
}

//Update post
ctrlPost.actualizarPost = async (req, res) => {
    try {
        const id = req.params.id_post;
        const {
            id_usuario,
            título,
            contenido,
        } = req.body;
        await Post.update({
            id_usuario,
            título,
            contenido,
        }, {
            where: {
                id_post: id
            }
        });
        return res.json({
            message: 'Post actualizado'
        });
    }
    catch (error) {
        console.error(error);
        console.log('Error al actualizar Post', error);
        return res.status(500).json({ message: 'Error al actualizar Post' })
    }
}

//Delete Post
ctrlPost.eliminarPost = async (req, res) => {
    try {
        const id = req.params.id_post;
        await Post.destroy({
            where: {
                id_post: id
            }
        })
        return res.json({ message: 'Post eliminado' })
    }
    catch (error) {
        console.error(error);
        console.log('Error al eliminar Post', error);
        return res.status(500).json({ message: 'Error al eliminar Post' })
    }
}


module.exports = ctrlPost;