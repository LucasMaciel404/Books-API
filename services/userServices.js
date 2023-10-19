const Usuario = require("../Models/ModelDB/User/index");

class userServices {
        // Pesquisa um usuario pelo seu ID
        async getUserByPk(id) {
                const user = await Usuario.findByPk(id);
                return user;
        }

        // Pesquisa todos os usuarios
        async getAllUsers() {
                const users = await Usuario.findAll();
                let allUsers = [];
                for (let key in users) {
                        allUsers.push(users[key].dataValues);
                }
                console.log(allUsers);
                return allUsers;
        }

        // Cria  um novo Usuario
        async createUser(arrayUser) {
                const user = await Usuario.create(arrayUser);
                return user;
        }

        // Atualiza um usuario
        async updateUser(id, arrayModificacoes) {
                const usuario = await Usuario.findByPk(id); // Encontrar o usuário pelo ID

                if (!usuario) {
                        throw new Error('Usuário não encontrado');
                }
                // Atualizar apenas os campos fornecidos no array de modificações
                for (const campo in arrayModificacoes) {
                        usuario[campo] = arrayModificacoes[campo];
                }
                // Salvar as alterações no banco de dados


                await usuario.save();

                return usuario; // Retorna o usuário atualizado
        }

        // Atualiza um usuario
        async updateUserFavoritos(id, modificacao) {
                
                // Encontrar o usuário pelo ID
                const usuario = await Usuario.findByPk(id); 

                // verificando a existencia do usuario:
                if (!usuario) {
                        throw new Error('Usuário não encontrado');
                }

                // Atualizar apenas os campos fornecidos no array de modificações
                usuario.favoritos = `${usuario.favoritos}, ${modificacao}`;
                
                // Salvar as alterações no banco de dados
                await usuario.save();

                return usuario; // Retorna o usuário atualizado
        }

        // Deleta um usuario
        async deleteUser(id) {
                const user = await Usuario.destroy({ where: { id: id } });
                return user;
        }

}

module.exports = userServices;