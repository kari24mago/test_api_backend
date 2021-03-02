/********** Backend(NodeJS) - Servidor *********/
// Conexión de la base de datos (data base o BD)
var Sequelize = require('sequelize');

const sequelize = new Sequelize(
  // 'sertracen', //nombre de la base de datos
  // 'root', //usuario
  // '', //contraseña
  // {
  //   host: 'localhost',
  //   dialect: 'mysql'
  // }

  // mysql://b4411c5fada009:04596105@us-cdbr-east-03.cleardb.com/heroku_943513fcfb158a2?reconnect=true

  // 'heroku_943513fcfb158a2', //nombre de la base de datos
  'base_api',
  'b4411c5fada009', //usuario
  '04596105 ', //contraseña
  {
    host: 'us-cdbr-east-03.cleardb.com',
    dialect: 'mysql'
  }
);

module.exports = sequelize;