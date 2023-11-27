const Livro = require("./../Models/book");

class bookServices {
        async getBookByPk(id) {
                const book = await Livro.findByPk(id);
                return book;
        }
        async getAllBooks() {
                const books = await Livro.findAll();
                let allBooks = [];
                for (let key in books) {
                        allBooks.push(books[key].dataValues);
                }
                return allBooks;
        }
        async createBooks(arrayBook) {
                try {
                        const newBook = await Livro.create(arrayBook);
                        return newBook;
                }catch(e){
                        console.log("Erro com serviço BookService, por favor entrar em contato com o responsavel ",e);
                }
        }
        async updateBook(id, arrayModificacoes) {
                const MyBook = await Livro.findByPk(id); // Encontrar o Livro pelo ID

                if (!MyBook) {
                        throw new Error('Livro não encontrado');
                }
                // Atualizar apenas os campos fornecidos no array de modificações
                MyBook.set(arrayModificacoes);

                // Salvar as alterações no banco de dados
                await MyBook.save();

                return MyBook; // Retorna o Livro atualizado
        }
        async deleteBook(id) {
                const Book = await Livro.destroy({ where: { id: id } });
                return Book;
        }
}

module.exports = bookServices;