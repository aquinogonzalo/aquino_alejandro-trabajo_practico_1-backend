// Importamos Sequelize 
const { Sequelize, DataTypes } = require('sequelize');


//Configuramos sequelize
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
    });

//Se verifica que sehaya conectado la base de datos
const conexionDB = async () => {

    try {
        await sequelize.authenticate();
        console.log('Se conectó la base de datos');
    } catch (error) {
        console.log('Lamentablemente no se puedo conectar la base de datos: ', error);
    }

};

module.exports = {
    sequelize,
    DataTypes,
    conexionDB
}