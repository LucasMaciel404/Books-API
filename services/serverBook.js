const fs = require("fs");

function getAllBooks(){
    return JSON.parse(fs.readFileSync("./books.json")) 
}

function getBookId(id){
    const livros = getAllBooks()
    const livroFiltrado = livros.filter( livro => livro.id == id )[0] //este [0] é para pegar o primeiro elemento, limitando a busca para 1 elemento
    return livroFiltrado
} 

function patchBook(diferencas, id){
    let livrosAtuais = JSON.parse(fs.readFileSync('books.json'));
    const indiceModificado = livrosAtuais.findIndex(livro => livro.id == id);

    const conteudoMudado = { ...livrosAtuais[indiceModificado], ...diferencas };
    livrosAtuais[indiceModificado] = conteudoMudado;
    fs.writeFileSync('books.json', JSON.stringify(livrosAtuais));
}

function insertBook(livro){
    const livros = getAllBooks();
    const novaListaLivros = [...livros, livro];
    fs.writeFileSync("books.json", JSON.stringify(novaListaLivros));
}

function deletBookToID(id){
    let livros = JSON.parse(fs.readFileSync('books.json'));
    let indexLivro = livros.findIndex(livro => livro.id == id);
    livros.splice(indexLivro, 1);
    fs.writeFileSync("books.json", JSON.stringify(livros))
}
module.exports = {
    getAllBooks,
    getBookId,
    insertBook,
    patchBook,
    deletBookToID
}