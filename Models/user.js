const sequelize = require('sequelize');
const database = require('./connect').Connection;

const Usuario = database.define('usuarios', {
    id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome:{
        type: sequelize.STRING,
        allowNull: false,
    },
    email:{
        type: sequelize.STRING,
        allowNull: false
    },
    senha:{
        type: sequelize.STRING,
        allowNull: false
    },
    favoritos: {
        type: sequelize.STRING,
        allowNull: true
    }
});

module.exports = Usuario;