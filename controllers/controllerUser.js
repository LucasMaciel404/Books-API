const UserServices = require("../services/userServices");
const MyUserService = new UserServices();

class UserController {
    async getAllUsers(req, resp) {
        try {
            const Users = await await MyUserService.getAllUsers();
            console.log(Users)
            resp.send(Users);
        } catch (e) {
            resp.status(500);
            resp.send(e.message);
        }
    }

    async getUser(req, resp) {
        try {
            const id = req.params.id;
            if (id && Number(id)) {
                const Usuario = await MyUserService.getUserByPk(id);
                resp.send(Usuario);
            } else {
                resp.status(422);
                resp.send("This ID is not valid.")
            }
        } catch (e) {
            resp.status(500);
            resp.send(e.message);
        }
    }

    postUser(req, resp) {
        try {
            const newUser = req.body;
            if (!Array.isArray(newUser)) {
                throw new Error("O corpo da requisição deve ser um array de usuários.");
            }

            newUser.forEach(user => {
                if (user.nome && user.email && user.senha) {
                    MyUserService.createUser(user);
                } else {
                    resp.status(422);
                    resp.send(`Os campos nome, email e senha são obrigatórios.`);
                    return; // Retorna para evitar a execução do código abaixo em caso de erro
                }
            });

            resp.status(201);
            resp.send('Usuário inserido com sucesso.');
        } catch (erro) {
            console.error(erro); // Log do erro para debug
            resp.status(500);
            resp.send("Ocorreu um erro ao processar a requisição.");
        }
    }


    updateUser(req, resp) {
        try {
            const id = Number(req.params.id);

            if (id) {
                const body = req.body;
                MyUserService.updateUser(id, body[0]);
                resp.send('User updated successfully');
            } else {
                resp.status(422);
                resp.send("This ID is not valid.");
            }
        } catch (e) {
            e.status(500);
            resp.send(e.message);
        }
    }
    updateUserFavoritos(req, resp) {
        try {
            const id = Number(req.params.id);

            if (id) {
                const body = req.body;
                MyUserService.updateUserFavoritos(id, body[0]);
                resp.send('User updated successfully');
            } else {
                resp.status(422);
                resp.send("This ID is not valid.");
            }
        } catch (e) {
            e.status(500);
            resp.send(e.message);
        }
    }

    deleteUser(req, resp) {
        try {
            const id = req.params.id;
            if (id && Number(id)) {
                MyUserService.deleteUser(id);
                resp.send('delete completed successfully!');
            } else {
                resp.status(422)
                resp.send("This ID is not valid.")
            }
        } catch (e) {
            resp.status(500);
            resp.send(e.message);
        }
    }
}

module.exports = UserController;