const Usuario = require("../Models/user");

class userServices {
        async getUserByPk(id) {
                const user = await Usuario.findByPk(id);
                let usuario = { ...user.dataValues }
                delete usuario.senha;
                return usuario;
        }
        async SessionVerify(userId) {
                return (req.session.userId)
        }
        async getAllUsers() {
                const users = await Usuario.findAll();
                let allUsers = [];
                for (let key in users) {
                        allUsers.push(users[key].dataValues);
                }
                let usuarios = allUsers.map(objeto => {
                        let novoObjeto = { ...objeto };
                        delete novoObjeto.senha;

                        return novoObjeto;
                });
                return usuarios;
        }
        async createUser(arrayUser) {
                const user = await Usuario.create(arrayUser);
                return user;
        }
        async updateUser(id, arrayModificacoes) {
                const usuario = await Usuario.findByPk(id); // Encontrar o usuário pelo ID

                if (!usuario) {
                        throw new Error('Usuário não encontrado');
                }
                for (const campo in arrayModificacoes) {
                        usuario[campo] = arrayModificacoes[campo];
                }
                await usuario.save();
        }
        async updateUserFavoritos(id, modificacao) {
                const usuario = await Usuario.findByPk(id);
                if (!usuario) {
                        throw new Error('Usuário não encontrado');
                }
                usuario.favoritos = `${usuario.favoritos}, ${modificacao}`;
                await usuario.save();
                return usuario;
        }
        async deleteUser(id) {
                const user = await Usuario.destroy({ where: { id: id } });
                return user;
        }
        async Login(email, senha) {
                try {
                        const usuarioEncontrado = await Usuario.findOne({ where: { email: email } });
                        const Myuser = usuarioEncontrado.dataValues;

                        if (Myuser.email) {
                                if (Myuser.senha == senha) {
                                        req.session.userId = Myuser.id;
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