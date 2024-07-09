// Carregando recursos necessarios
const express = require("express")
const config = require('./config');
const swaggerUi = require('swagger-ui-express');
const swaggerDOC = require('./swagger.json');
const serviceLogin = require('./services/loginServices');
const serviceAutenticate = new serviceLogin();
const jwt_Autenticate = serviceAutenticate.verifyJWT;

// Classe de configurações de middlewere
const Configs = new config();

// Carregando express
const app = express();

// iniciando minhas sessions
Configs.sessions();

const cors = require("cors");

// Transformando o corpo da requisição em JSON
app.use(express.json());
// Liberando o uso da API a todos os IP's
app.use(cors({ origin: "*" }));

// swagguer
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerDOC));

// Rotas principais
app.use('/Users', jwt_Autenticate, Configs.routerUser);
app.use('/Validate', Configs.routerLogin);
app.use('/books', Configs.routerBook);

// tratamento de rota nao encontrada "Erro: 404"
app.use('', (request, response) => {
    response.status(404).send('Rota não encontrada.')
});

// Iniciando meus Models (Criando Tabelas caso nao exista)
const SincDatabase = require("./Models/connect").SincronizaDb;

// Emitindo sinal para iniciar a API
SincDatabase().then(() => app.emit("SincDatabase")).catch(err => console.log(err));

// Esperando sinal para iniciar a API
const port = 8000;
app.on('SincDatabase', () => {
    // Start da API
    app.listen(port, () => {
        console.log(`Running on port: http://localhost:${port}/doc`);
    });
});