const Usuario = require("../Models/user");

class userServices {
        async SessionVerify(userId) {
                return req.session.userId
        }

        async createUser(myUser) {
                const usuarioEncontrado = await Usuario.findOne({ where: { email: myUser.email } });
                if (!usuarioEncontrado){
                        await Usuario.create(myUser);
                        return 'Usuario criado com sucesso!' 
                }else{
                        return 'Usuario ja cadastrado.'
                }
        }

        async Login(email, senha) {
                try {
                        const usuarioEncontrado = await Usuario.findOne({ where: { email: email } });
                        const Myuser = usuarioEncontrado.dataValues;

                        if (Myuser.email) {
                                if (Myuser.senha == senha) {
                                        return { status: true, msg: 'Sucesso!' }
                                } else {
                                        return { status: false, msg: 'Senha invalida.' };
                                }
                        } else {
                                return { status: false, msg: 'Usuario invalido.' };
                        }
                } catch (error) {
                        return { status: false, msg: `tipo de dados incompativeis. Erro: ${error}` };
                }
        }

}

module.exports = userServices;