const UserServices = require("./../services/loginServices");
const MyUserService = new UserServices();

class LoginController {
    async postLogin(req, resp){
        try {
            const email = req.body.email
            const password = req.body.password
            const retorno = MyUserService.Login(email, password)
            if (retorno.status){
                resp.status(200).send(retorno.msg)    
            }else{
                resp.status(500).send(retorno.msg)
            }
        } catch (error) {
            resp.status(500).send(error)
        }
    }
    async postRegister(req, resp) {
        try {
            const newUser = req.body;
            if (!typeof newUser === 'object') {
                throw new Error("O corpo da requisição é invalido.");
            }

            if (newUser.name && newUser.email && newUser.password) {
                const resposta = await MyUserService.createUser(newUser);
                resp.status(200)
                resp.send(resposta)
            } else {
                resp.status(422);
                resp.send(`Os campos name, email e passowrd são obrigatórios.`);
                return;
            }
            
        } catch (erro) {
            console.error(erro); // Log do erro para debug
            resp.status(500);
            resp.send("Ocorreu um erro ao processar a requisição.");
        }
    }
}

module.exports = LoginController;