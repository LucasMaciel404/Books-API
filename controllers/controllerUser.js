const UserServices = require("./../services/userServices");
const MyUserService = new UserServices();

class UserController {

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