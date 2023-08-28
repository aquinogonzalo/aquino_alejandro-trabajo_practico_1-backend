//Importamos sequelize y DataTypes
const { DataTypes, sequelize } = require('../database');

//Modelo de Post
const Post = sequelize.define('post', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    título: {
        type: DataTypes.STRING,
        allowNull: false,
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
    tableName: 'posts'
}
);
//Esto hay que cambiar de false a true, si es que queremos crear la tabla si es que no habia creado.
Post.sync({ force: false }).then(() => {
    console.log('Hey, la tabla posts se ha creado!');
});


module.exports = Post