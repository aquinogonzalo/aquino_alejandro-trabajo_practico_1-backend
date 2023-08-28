const Comentario = require('./Comentario')
const Post = require('./Post');
const Usuario = require('./Usuario');


function associations() {
    console.log("Se asocio")
    Usuario.hasMany(Post);
    Post.belongsTo(Usuario, {
        foreignKey: {
            field: 'id_usuario'
        }
    });
    Post.hasMany(Comentario);
    Comentario.belongsTo(Post, {
        foreignKey: 'id_post'
    });
}


module.exports = { associations }