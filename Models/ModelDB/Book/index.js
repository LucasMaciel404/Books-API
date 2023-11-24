const sequelize = require('sequelize');
const database = require('../conect/bd').Connection;

const Livro = database.define('Livros', {
    id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name:{
        type: sequelize.STRING,
        allowNull: false,
    },
    author:{
        type: sequelize.STRING,
        allowNull: false
    },
    year:{
        type: sequelize.INTEGER,
        allowNull: false
    },
    stars:{
        type: sequelize.INTEGER,
        allowNull: false
    },
    image:{
        type: sequelize.STRING,
        allowNull: false
    },
    price:{
        type: sequelize.DECIMAL(10, 2),
        allowNull: false
    },
    units:{
        type: sequelize.INTEGER,
        allowNull: false
    },
    view:{
        type: sequelize.INTEGER,
        allowNull: false
    },
    type:{
        type: sequelize.ARRAY(sequelize.STRING),
        allowNull: false
    },
    description:{
        type: sequelize.STRING(1500),
        allowNull: false
    }
});

module.exports = Livro;