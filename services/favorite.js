const fs = require("fs");

function getAllFavorite(){
    return JSON.parse(fs.readFileSync("./favorite.json")); 
}
function deletFavoriteToID(id){
    const livros = JSON.parse(fs.readFileSync("./favorite.json"));
    // pegaremos todos os livros que sejam diferente do que queremos deletar
    const livrosFiltrados = livros.filter((livro)=>{livro.id !== id})
    
    fs.writeFileSync("favoritos.json", JSON.stringify(livrosFiltrados))
}
function insertFavorite(id){
    const livros = JSON.parse(fs.readFileSync("./books.json"));
    const favoritos = JSON.parse(fs.readFileSync("./favorite.json"));
    const livroInserido = livros.find( livro => livro.id == id);
    const novaListaDeLivros =[...favoritos, livroInserido];
    fs.writeFileSync("./favorite.json", JSON.stringify(novaListaDeLivros));
}


module.exports = {
    getAllFavorite,
    deletFavoriteToID,
    insertFavorite
}