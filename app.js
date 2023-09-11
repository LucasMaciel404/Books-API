const express = require("express");
const routerBook = require("./router/routerBook")
const routerFavorite = require("./router/routerFavorito")
const app = express();

app.use(express.json());

const cors = require("cors");
app.use(cors({origin: "*"})); // Liberando do acesso para todos



app.use('/books', routerBook);
app.use('/favorites', routerFavorite);

const port = 8000;
app.listen(port, () => {
    console.log(`Running on port: ${port}`);
});