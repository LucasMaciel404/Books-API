const { getTodosFavoritos, insereFavorito, deletaFavoritoPorId } = require("../services/favoritos");

function getFavoritos(req, resp) {
    try {
        const livros = getTodosFavoritos();
        resp.send(livros);
    } catch (error) {
        resp.status(500);
        resp.send(error.message);
    }
}

function postFavoritos(req, resp) {
    try {
        const id = req.params.id
        insereFavorito(id);
        resp.status(201)
        resp.send(`Livro inserido com sucesso: ${id}`);

    } catch (error) {
        error.status(500);
        resp.send(error.message);
    }
}

function deletaFavorito(req, resp){
    try {
        const id = req.params.id; // pega o id da url
        if ( id && Number(id)){
            deletaFavoritoPorId(id)
            resp.send('delete concluido com sucesso!');
        }else{
            resp.status(422) // dado não é igual ao esperado
            resp.send('ID invalido!')
        }
    } catch (error) {
        error.status(500);
        resp.send(error.message);
    }
}
module.exports = {
    getFavoritos,
    postFavoritos, 
    deletaFavorito
}