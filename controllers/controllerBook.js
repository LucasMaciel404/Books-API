
const { getAllBooks, getBookId, insertBook, patchBook, deletBookToID } = require("../services/serverBook");

function getBooks(req, resp) {
    try {
        const books = getAllBooks();
        resp.send(books);
    } catch (e) {
        resp.status(500);
        resp.send(e.message);
    }
}

function getBook(req, resp) {
    try {
        const id = req.params.id;
        if ( id && Number(id)){
            const livro = getBookId(id);
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

function postBook(req, resp) {
    try {
        const newBook = req.body;
        if(req.body.name){
            insertBook(newBook);
            resp.status(201)
            resp.send('Book inserted successfully');
        }else{
            resp.status(422);
            resp.send("Field name is required");
        }
    } catch (e) {
        e.status(500);
        resp.send(e.message);
    }
}

function updateBook(req, resp){
    try {
        
        const id = req.params.id;
        if ( id && Number(id)){
            const body = req.body;
            console.log(body)
            patchBook(body, id);
    
            resp.send('Book updated successfully');
        }else{
            resp.status(422); 
            resp.send("This ID is not valid.")
        }

    } catch (e) {
        e.status(500);
        resp.send(e.message);
    }
}

function deletBook(req, resp){
    try {
        const id = req.params.id; 
        if ( id && Number(id)){
            deletBookToID(id)
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
    getBook,
    getBooks, 
    postBook, 
    updateBook,
    deletBook
};
