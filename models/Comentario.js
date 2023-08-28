//Importamos sequelize y DataTypes
const { DataTypes, sequelize } = require('../database');
const Post = require('./Post');

//Modelo de Comentario
const Comentario = sequelize.define('Comentario', {
    id_comentario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    contenido: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    deletedAt: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    createdAt: true,
    updatedAt: true,
    deletedAt: true,
    tableName: 'comentarios'
}
);

Comentario.belongsTo(Post, {
    foreignKey: 'id_post',
});

//Esto hay que cambiar de false a true, si es que queremos crear la tabla si es que no habia creado.
Comentario.sync({ force: false }).then(() => {
    console.log('Hey, la tabla comentarios se ha creado!');
});


module.exports = Comentario;