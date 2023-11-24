// esta é minha tabela para guardar as sessions dos meus usuarios
const { DataTypes } = require('sequelize');
const sequelize = require('./../ModelDB/conect/bd').Connection;

const Session = sequelize.define('Session', {
  sid: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  expires: {
    type: DataTypes.DATE,
  },
  data: {
    type: DataTypes.TEXT,
  },
});

module.exports = Session;