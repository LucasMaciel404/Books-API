
const { getAllUsers, getUserId, insertUser, patchUser, deletUserToID } = require("../services/Users");

function getUsers(req, resp) {
    try {
        const Users = getAllUsers();
        resp.send(Users);
    } catch (e) {
        resp.status(500);
        resp.send(e.message);
    }
}

function getUser(req, resp) {
    try {
        const id = req.params.id;
        if ( id && Number(id)){
            const livro = getUserId(id);
            resp.send(livro);
        }else{
            resp.status(422); 
            resp.send("This ID is not valid.")
        }
    }catch (e) {
        resp.status(500);
        resp.send(e.message);
    }
}

function postUser(req, resp) {
    try {
        const newUser = req.body;
        if(req.body.name){
            insertUser(newUser);
            resp.status(201)
            resp.send('User inserted successfully');
        }else{
            resp.status(422);
            resp.send("Field name is required");
        }
    } catch (e) {
        e.status(500);
        resp.send(e.message);
    }
}

function updateUser(req, resp){
    try {
        
        const id = req.params.id;
        if ( id && Number(id)){
            const body = req.body;
            console.log(body)
            patchUser(body, id);
    
            resp.send('User updated successfully');
        }else{
            resp.status(422); 
            resp.send("This ID is not valid.")
        }

    } catch (e) {
        e.status(500);
        resp.send(e.message);
    }
}

function deletUser(req, resp){
    try {
        const id = req.params.id; 
        if ( id && Number(id)){
            deletUserToID(id)
            resp.send('delete completed successfully!');
        }else{
            resp.status(422) 
            resp.send("This ID is not valid.")
        }
    } catch (e) {
        e.status(500);
        resp.send(e.message);
    }
}

module.exports = {
    getUser,
    getUsers, 
    postUser, 
    updateUser,
    deletUser
};
