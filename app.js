const express = require("express");
const cors = require("cors");
const db = require("./Models/ModelDB/conect/bd");
// Chamando minhas rotas:
const routerBook = require("./router/routerBook");
const routerUser = require("./router/routerUser");
const routerFavorite = require("./router/routerFavorite");
// 
const app = express();
app.use(express.json()); 
app.use(cors({origin: "*"})); // Liberando do acesso para todos 

app.use('/Users', routerUser); 
app.use('/books', routerBook); 
app.use('/favorites', routerFavorite);

// Listando operações da minha API
const port = 8000;
app.listen(port, () => {
    console.log(`Running on port: http://localhost:${port}`);
});