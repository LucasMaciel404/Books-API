const sequelize = require('sequelize');
const database = require('../conect/bd').Connection;

const Usuario = database.define('usuarios', {
    // meu ID será minha primary key
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