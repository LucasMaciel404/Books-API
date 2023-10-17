const express = require("express");
const cors = require("cors");

// Sincronizando com o banco de dados:
const SincDatabase = require("./Models/ModelDB/conect/bd").SincronizaDb;
SincDatabase().then(() => app.emit("SincDatabase")).catch(err => console.log(err));


// Chamando minhas rotas:
const routerBook = require("./router/routerBook");
const routerUser = require("./router/routerUser");

const app = express();
app.use(express.json());
app.use(cors({ origin: "*" })); // Liberando do acesso para todos 

app.use('/Users', routerUser);
app.use('/books', routerBook);


const port = 8000;
// Listando operações da minha API
app.on('SincDatabase', () => {
    app.listen(port, () => {
        console.log(`Running on port: http://localhost:${port}`);
    });
})