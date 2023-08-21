const fs = require("fs");

function getTodosLivros(){
    return JSON.parse(fs.readFileSync("./livros.json")) 
}

function getLivroPorId(id){
    const livros = getTodosLivros()
    const livroFiltrado = livros.filter( livro => livro.id == id )[0] //este [0] é para pegar o primeiro elemento, limitando a busca para 1 elemento
    return livroFiltrado
} 

function modificaLivro(diferencas, id){
    let livrosAtuais = JSON.parse(fs.readFileSync('livros.json'));
    const indiceModificado = livrosAtuais.findIndex(livro => livro.id == id);

    const conteudoMudado = { ...livrosAtuais[indiceModificado], ...diferencas };
    livrosAtuais[indiceModificado] = conteudoMudado;

    fs.writeFileSync('livros.json', JSON.stringify(livrosAtuais));
}

function insereLivro(livro){
    const livros = getTodosLivros();
    const novaListaLivros = [...livros, livro];
    fs.writeFileSync("livros.json", JSON.stringify(novaListaLivros));
}

function deletaLivros(id){
    let livros = JSON.parse(fs.readFileSync('livros.json'));
    let indexLivro = livros.findIndex(livro => livro.id == id);
    livros.splice(indexLivro, 1);
    fs.writeFileSync("livros.json", JSON.stringify(livros))
}
module.exports = {
    getTodosLivros,
    getLivroPorId,
    insereLivro,
    modificaLivro,
    deletaLivros
}