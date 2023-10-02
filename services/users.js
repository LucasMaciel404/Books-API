const fs = require("fs");

function getAllUsers(){
    return JSON.parse(fs.readFileSync("./users.json")) 
}

function getUserId(id){
    const Usuarios = getAllUsers()
    const UsuarioFiltrado = Usuarios.filter( Usuario => Usuario.id == id )[0] //este [0] é para pegar o primeiro elemento, limitando a busca para 1 elemento
    return UsuarioFiltrado
} 

function patchUser(diferencas, id){
    let UsuariosAtuais = JSON.parse(fs.readFileSync('Users.json'));
    const indiceModificado = UsuariosAtuais.findIndex(Usuario => Usuario.id == id);

    const conteudoMudado = { ...UsuariosAtuais[indiceModificado], ...diferencas };
    UsuariosAtuais[indiceModificado] = conteudoMudado;
    fs.writeFileSync('Users.json', JSON.stringify(UsuariosAtuais));
}

function insertUser(Usuario){
    const Usuarios = getAllUsers();
    const novaListaUsuarios = [...Usuarios, Usuario];
    fs.writeFileSync("Users.json", JSON.stringify(novaListaUsuarios));
}

function deletUserToID(id){
    let Usuarios = JSON.parse(fs.readFileSync('Users.json'));
    let indexUsuario = Usuarios.findIndex(Usuario => Usuario.id == id);
    Usuarios.splice(indexUsuario, 1);
    fs.writeFileSync("Users.json", JSON.stringify(Usuarios))
}
module.exports = {
    getAllUsers,
    getUserId,
    insertUser,
    patchUser,
    deletUserToID
}