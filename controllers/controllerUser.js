const UserServices = require("./../services/userServices");
const MyUserService = new UserServices();

class UserController {

    async postLogin(req, resp) {
        try {
            const email = req.body.email;
            const senha = req.body.senha;
            const LoginUser = await MyUserService.Login(email, senha, req);
            if (LoginUser.status) {
                resp.status(200);
                resp.send(LoginUser.msg);
            } else {
                resp.status(401);
                resp.send(LoginUser.msg);
            }
        } catch (e) {
            resp.status(500);
            resp.send(e.message);
        }
    }

    async getAllUsers(req, resp) {
        try {
            const Users = await await MyUserService.getAllUsers();
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

    async postRegister(req, resp) {
        try {
            const newUser = req.body;
            if (!typeof newUser === 'object') {
                throw new Error("O corpo da requisição é invalido.");
            }


            if (newUser.nome && newUser.email && newUser.senha) {
                MyUserService.createUser(newUser);
            } else {
                resp.status(422);
                resp.send(`Os campos nome, email e senha são obrigatórios.`);
                return;
            }

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