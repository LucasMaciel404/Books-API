const fs = require("fs");

function getTodosFavoritos(){
    return JSON.parse(fs.readFileSync("./favoritos.json")); 
}
function deletaFavoritoPorId(id){
    const livros = JSON.parse(fs.readFileSync("./favoritos.json"));
    // pegaremos todos os livros que sejam diferente do que queremos deletar
    const livrosFiltrados = livros.filter((livro)=>{livro.id !== id})
    
    fs.writeFileSync("favoritos.json", JSON.stringify(livrosFiltrados))
}
function insereFavorito(id){
    const livros = JSON.parse(fs.readFileSync("./livros.json"));
    const favoritos = JSON.parse(fs.readFileSync("./favoritos.json"));

    const livroInserido = livros.find( livro => livro.id === id);
    const novaListaDeLivros =[...favoritos, livroInserido];
    fs.writeFileSync("favoritos.json", JSON.stringify(novaListaDeLivros))
}


module.exports = {
    getTodosFavoritos,
    deletaFavoritoPorId,
    insereFavorito
}