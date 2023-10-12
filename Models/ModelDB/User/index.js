const sequelize = require('sequelize');
const database = require('../conect/bd');

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
    }
});

module.exports = Usuario;