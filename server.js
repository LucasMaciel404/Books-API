const express = require("express");
const routerBook = require("./router/routerBook")
const server = express();

server.use(express.json());


server.use('/books', routerBook)

const port = 8000;
server.listen(port, () => {
    console.log(`Execotando na porta: ${port}`);
});