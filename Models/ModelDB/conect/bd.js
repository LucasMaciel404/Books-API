const express = require("express");
const app = express();

// Pegando informações de conexão de um .env para segurança dos dados.
require('dotenv').config();
const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;

const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

const DB_TYPE = process.env.DB_TYPE;
const DB_PORT = process.env.DB_PORT;

// Importando o Sequelize
const Sequelize = require('sequelize');
// Conectando ao banco de dados com o Sequelize 
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
    host: DB_HOST,
    dialect: DB_TYPE,
    port: DB_PORT
});

(async() => {    
    // Teste de conexão:
    try {
        await db.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})

module.exports = sequelize;