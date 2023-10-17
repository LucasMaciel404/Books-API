const bookServices = require("../services/bookServices");
const MyBookService = new bookServices();

class BookController {
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
            console.log(newBook)
            newBook.forEach(book => {
                console.log(book.nome)
                if (book.nome && book.author && book.bookDate && book.avaliation && book.image && book.price && book.amout && book.views && book.description && book.type) {
                    MyBookService.createBooks(book);
                } else {
                    if (!book.nome){resp.send(`O campo nome é obrigatório.`)}
                    else if (!book.author){resp.send(`O campo author é obrigatório.`)}
                    else if (!book.bookDate){resp.send(`O campo bookDate é obrigatório.`)}
                    else if (!book.avaliation){resp.send(`O campo avaliation é obrigatório.`)}
                    else if (!book.image){resp.send(`O campo image é obrigatório.`)}
                    else if (!book.price){resp.send(`O campo price é obrigatório.`)}
                    else if (!book.amout){resp.send(`O campo amout é obrigatório.`)}
                    else if (!book.views){resp.send(`O campo views é obrigatório.`)}
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