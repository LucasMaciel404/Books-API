const express = require('express');
const app = express();
class Config {
    constructor() {
        this.routerBook = require("./router/routerBook");
        this.routerUser = require("./router/routerUser");
        this.routerLogin = require("./router/routerLogin");
    }
    sessions() {
        const session = require("express-session");
        const SequelizeStore = require("connect-session-sequelize")(session.Store);
        const connection = require("./Models/ModelDB/conect/bd").Connection;
        // Configurando o Session:
        app.use(session({
            secret: 'Chellenger',
            store: new SequelizeStore({
                db: connection,
                checkExpirationInterval: 15000, // intervalo em milissegundos para verificar expirações de sessão
                expiration: 60 * 60 * 24 * 1 * 1000, // tempo de expiração da sessão em milissegundos
            }),
            resave: false,
            saveUninitialized: false,
        }));
    }
    mySwagger() {


        const swaggerUi = require('swagger-ui-express');
        const swaggerDOC = require('./swagger.json');

        app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerDOC));

    } 
    setCofig() {


        const express = require("express");
        const cors = require("cors");

        app.use(express.json());
        app.use(cors({ origin: "*" })); // Liberando do acesso para todos
    }
}
module.exports = Config
