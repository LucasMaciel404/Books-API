const config = require('./config');
const Configs = new config();

const express = require("express")
const app = express();

const swaggerUi = require('swagger-ui-express');
const swaggerDOC = require('./swagger.json');

Configs.sessions()
const cors = require("cors");

app.use(express.json());
app.use(cors({ origin: "*" }));

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerDOC));
app.use('/Users', Configs.routerUser);
app.use('/Validate', Configs.routerLogin);
app.use('/books', Configs.routerBook);
app.use('', (request, response) => {
    response.status(404).send('Rota não encontrada.')
});

const SincDatabase = require("./Models/connect").SincronizaDb;
SincDatabase().then(() => app.emit("SincDatabase")).catch(err => console.log(err));

const port = 8000;
app.on('SincDatabase', () => {
    app.listen(port, () => {
        console.log(`Running on port: http://localhost:${port}`);
    });
});