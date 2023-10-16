const Livro = require("../Models/ModelDB/Book/index");

class bookServices {

        // Pesquisa um Livro pelo seu ID
        async getBookByPk(id) {
                const book = await Livro.findByPk(id);
                return book;
        }

        // Pesquisa todos os Livros
        async getAllBooks() {
                const books = await Livro.findAll();
                let allBooks = [];
                for (let key in books) {
                        allBooks.push(books[key].dataValues);
                }
                console.log(allBooks);
                return allBooks;
        }

        // Cria  um novo Livro
        async createBooks(arrayBook) {
                try {
                        const newBook = await Livro.create(arrayBook);
                        return newBook;
                }catch(e){
                        console.log("AQUI AMIGO KRL OLHA ESSA POHA !!!: ",e);
                }
        
        }

        // Atualiza um Livro
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

        // Deleta um Livro
        async deleteBook(id) {
                const Book = await Livro.destroy({ where: { id: id } });
                return Book;
        }

}

module.exports = bookServices;