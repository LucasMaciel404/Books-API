require('dotenv').config();
const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;

const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

const DB_TYPE = process.env.DB_TYPE;
const DB_PORT = process.env.DB_PORT;

const Sequelize = require('sequelize');

const Connection = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
    host: DB_HOST,
    dialect: DB_TYPE,
    port: DB_PORT,
    // dialectOptions: {
    //     ssl: {
    //         require: true,
    //         rejectUnauthorized: false, // Permite conexões com certificados autoassinados (para desenvolvimento)
    //     }
    // },
});

const SincronizaDb = async () => {
    const Usuarios = require("./user");
    const Livros = require("./book");
    // const Session = require("./session");
    await Connection.sync();
}
const TesteConexao = async () => {
    try {
        await Connection.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};


module.exports = {
    Connection,
    TesteConexao,
    SincronizaDb
}