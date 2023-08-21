
const { getTodosLivros, getLivroPorId, insereLivro, modificaLivro, deletaLivros } = require("../services/serverBook");

function getBooks(req, resp) {
    try {
        const livros = getTodosLivros();
        resp.send(livros);
    } catch (error) {
        resp.status(500);
        resp.send(error.message);
    }
}

function getBook(req, resp) {
    try {
        const id = req.params.id;
        if ( id && Number(id)){
            const livro = getLivroPorId(id);
            resp.send(livro);
        }else{
            resp.status(422); // dado não é igual ao esperado
            resp.send("ID invalido! ")
        }
    }catch (error) {
        resp.status(500);
        resp.send(error.message);
    }
}

function postBook(req, resp) {
    try {
        const livroNovo = req.body;
        if(req.body.name){
            insereLivro(livroNovo);
            resp.status(201)
            resp.send('Livro inserido com sucesso');
        }else{
            resp.status(422);
            resp.send("Campo name é obrigatorio");
        }
    } catch (error) {
        error.status(500);
        resp.send(error.message);
    }
}



function patchBook(req, resp){
    try {
        
        const id = req.params.id;
        if ( id && Number(id)){
            const body = req.body;
            modificaLivro(body, id);
    
            resp.send('deu certo meu consagrado!');
        }else{
            resp.status(422); // dado não é igual ao esperado
            resp.send("ID invalido! ")
        }

    } catch (error) {
        error.status(500);
        resp.send(error.message);
    }
}
function deletBook(req, resp){
    try {
        const id = req.params.id; // pega o id da url
        if ( id && Number(id)){
            deletaLivros(id)
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
    getBooks,
    getBook,
    postBook,
    patchBook,
    deletBook
};
