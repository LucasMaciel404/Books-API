const config = require('./config');
const Configs = new config();

const express = require("express")
const app = express();

Configs.sessions()
Configs.mySwagger()
Configs.setCofig()

app.use('/Users', Configs.routerUser);
app.use('/Validate', Configs.routerLogin);
app.use('/books', Configs.routerBook);

// Sincronizando com o banco de dados:
const SincDatabase = require("./Models/ModelDB/conect/bd").SincronizaDb;
SincDatabase().then(() => app.emit("SincDatabase")).catch(err => console.log(err));

// LOG:
const port = 8000;
app.on('SincDatabase', () => {
    app.listen(port, () => {
        console.log(`Running on port: http://localhost:${port}`);
    });
});