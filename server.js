const env = require("dotenv").config();

const express = require("express");
const routerBook = require("./router/routerBook")
const routerFavoritos = require("./router/routerFavorito")

const app = express();
app.use(express.json());



const cors = require("cors");
app.use(cors({origin: "*"}));

app.use('/books', routerBook);
app.use('/favoritos', routerFavoritos);

const port = 8000;
app.listen(port, () => {
    console.log(`Execotando na porta: ${port}`);
}); 