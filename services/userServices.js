const Usuario = require("../Models/user");

class userServices {
        async getUserByPk(id) {
                const user = await Usuario.findByPk(id);
                let usuario = { ...user.dataValues }
                delete usuario.senha;
                return usuario;
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

}

module.exports = userServices;