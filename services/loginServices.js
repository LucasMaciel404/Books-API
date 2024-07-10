require('dotenv').config();
const Usuario = require("../Models/user");
const jwt = require('jsonwebtoken')

// Pegando minha SECRET para o JWT
const SECRET = process.env.SECRET_JWT;

class userServices {
        verifyJWT(req, resp, next) {
                const token = req.headers['x-access-token'];
                jwt.verify(token, SECRET,(err, decoded) => {
                        if(err){ return resp.status(401).end() };
                        
                        req.userId = decoded.userId;
                        next()
                })
        }
        async SessionVerify(userId) {
                return req.session.userId
        }

        async createUser(myUser) {
                const usuarioEncontrado = await Usuario.findOne({ where: { email: myUser.email } });
                if (!usuarioEncontrado) {
                        await Usuario.create(myUser);
                        return 'Usuario criado com sucesso!'
                } else {
                        return 'Usuario ja cadastrado.'
                }
        }

        async Login(email, senha) {
                try {
                        const usuarioEncontrado = await Usuario.findOne({ where: { email: email } });
                        const Myuser = usuarioEncontrado.dataValues;

                        if (Myuser.email) {

                                const token = jwt.sign({ userId: Myuser.id }, SECRET, { expiresIn: 300 })
                                if (Myuser.password == senha) {

                                        return { status: true, msg: 'Sucesso!', token: token }
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