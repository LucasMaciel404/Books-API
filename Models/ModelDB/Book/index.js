const sequelize = require('sequelize');
const database = require('../conect/bd').Connection;

const Livro = database.define('Livros', {
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
    author:{
        type: sequelize.STRING,
        allowNull: false
    },
    bookDate:{
        type: sequelize.STRING,
        allowNull: false
    },
    avaliation:{
        type: sequelize.INTEGER,
        allowNull: false
    },
    image:{
        type: sequelize.STRING,
        allowNull: false
    },
    price:{
        type: sequelize.INTEGER,
        allowNull: false
    },
    amout:{
        type: sequelize.STRING,
        allowNull: false
    },
    views:{
        type: sequelize.STRING,
        allowNull: false
    },
    type:{
        type: sequelize.STRING,
        allowNull: false
    },
    description:{
        type: sequelize.STRING,
        allowNull: false
    }
});

module.exports = Livro;