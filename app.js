const express = require("express");
const routerBook = require("./router/routerBook")
const routerUser = require("./router/routerUser")
const routerFavorite = require("./router/routerFavorite")
const app = express();

app.use(express.json());

const cors = require("cors");
app.use(cors({origin: "*"})); // Liberando do acesso para todos


app.use('/books', routerBook);
app.use('/Users', routerUser);
app.use('/favorites', routerFavorite);

const port = 8000;
app.listen(port, () => {
    console.log(`Running on port: http://localhost:${port}`);
});
