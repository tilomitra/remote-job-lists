const Sequelize = require('sequelize');
const path = require('path');


const sequelize = new Sequelize('database', null, null, {
  host: 'localhost',
  dialect: 'sqlite',

  pool: {
    max: 100,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  // SQLite only
  storage: path.join(__dirname, '../db/database.sqlite'),

  // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
  operatorsAliases: false
});

module.exports = sequelize;
