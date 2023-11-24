const bookServices = require("../services/bookServices");
const MyBookService = new bookServices();

class BookController {
    
    async postLogin(req, resp) {
        try {
            const { email, senha } = req.body;
            const user = await MyUserService.Login(email, senha);
            resp.send('ola Mundo');
        } catch (e) {
            resp.status(500);
            resp.send(e.message);
        }
    }

    async getAllBooks(req, resp) {
        try {
            const Books = await await MyBookService.getAllBooks();
            console.log(Books)
            resp.send(Books);
        } catch (e) {
            resp.status(500);
            resp.send(e.message);
        }
    }

    async getBook(req, resp) {
        try {


            const id = req.params.id;
            if (id && Number(id)) {
                const livro = await MyBookService.getBookByPk(id);
                resp.send(livro);
            } else {
                resp.status(422);
                resp.send("This ID is not valid.")
            }
        } catch (e) {
            resp.status(500);
            resp.send(e.message);
        }
    }

    postBook(req, resp) {
        try {
            const newBook = req.body;
            if (!Array.isArray(newBook)) {
                throw new Error("O corpo da requisição deve ser um array de Livros.");
            }
            newBook.forEach(book => {
                if (book.name && book.author && book.year && book.stars && book.image && book.price && book.units && book.view && book.description && book.type) {
                    MyBookService.createBooks(book);
                } else {
                    if (!book.name){resp.send(`O campo name é obrigatório.`)}
                    else if (!book.author){resp.send(`O campo author é obrigatório.`)}
                    else if (!book.year){resp.send(`O campo year é obrigatório.`)}
                    else if (!book.stars){resp.send(`O campo stars é obrigatório.`)}
                    else if (!book.image){resp.send(`O campo image é obrigatório.`)}
                    else if (!book.price){resp.send(`O campo price é obrigatório.`)}
                    else if (!book.units){resp.send(`O campo units é obrigatório.`)}
                    else if (!book.view){resp.send(`O campo view é obrigatório.`)}
                    else if (!book.description){resp.send(`O campo description é obrigatório.`)}
                    else if (!book.type){resp.send(`O campo type é obrigatório.`)}

                    resp.status(422);
                    return; // Retorna para evitar a execução do código abaixo em caso de erro
                }
            });

            resp.status(201);
            resp.send('Livros inseridos com sucesso.');
        } catch (erro) {
            console.error(erro); // Log do erro para debug
            resp.status(500);
            resp.send("Ocorreu um erro ao processar a requisição.");
        }
    }


    updateBook(req, resp) {
        try {
            const id = Number(req.params.id);

            if (id) {
                const body = req.body;
                MyBookService.updateBook(id, body[0]);
                resp.send('Book updated successfully');
            } else {
                resp.status(422);
                resp.send("This ID is not valid.");
            }

        } catch (e) {
            e.status(500);
            resp.send(e.message);
        }
    }

    deleteBook(req, resp) {
        try {
            const id = req.params.id;
            if (id && Number(id)) {
                MyBookService.deleteBook(id);
                resp.send('delete completed successfully!');
            } else {
                resp.status(422)
                resp.send("This ID is not valid.")
            }
        } catch (e) {
            e.status(500);
            resp.send(e.message);
        }
    }
}

module.exports = BookController;