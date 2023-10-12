const { getAllFavorite, insertFavorite, deletFavoriteToID } = require("../services/favorite");

function getFavorite(req, resp) {
    try {
        const book = getAllFavorite();
        resp.send(book);
    } catch (error) {
        resp.status(500);
        resp.send(error.message);
    }
}

function postFavorites(req, resp) {
    try {
        const id = req.params.id;
        const livrosExistentes = getAllFavorite();
        let repetido = [];
        repetido = livrosExistentes.filter(livro => livro.id == id);
        if (repetido.length > 0) {
            resp.status(422);
            resp.send("Item ja existente");
        } else {
            resp.status(200);
            insertFavorite(id);
        }
        // resp.status(201);
        resp.send('Book inserted successfully');

    } catch (e) {
        e.status(500);
        resp.send(e.message);
    }
}

function deletFavorite(req, resp) {
    try {
        const id = req.params.id;
        if (id && Number(id)) {
            deletFavoriteToID(id);
            resp.send('Book deleted successfully');
        } else {
            resp.status(422);
            resp.send("This ID is not valid.");
        }
    } catch (error) {
        error.status(500);
        resp.send(error.message);
    }
}

module.exports = {
    getFavorite,
    postFavorites,
    deletFavorite
}