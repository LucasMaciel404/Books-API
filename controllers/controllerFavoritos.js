const { getAllFavorite, insertFavorite, deletFavoriteToId } = require("../services/favorites");


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
        const id = req.params.id
        insertFavorite(id);
        resp.status(201);
        resp.send('Book inserted successfully');

    } catch (error) {
        error.status(500);
        resp.send(error.message);
    }
}


function deletFavorite(req, resp){
    try {
        const id = req.params.id; 
        if ( id && Number(id)){
            deletFavoriteToId(id);
            resp.send('Book deleted successfully');
        }else{
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