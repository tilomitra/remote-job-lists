const Sequelize = require('sequelize');
const path = require('path');


const sequelize = new Sequelize('remote_job_lists', 'tilo', 'testuser', {
  host: 'localhost',
  dialect: 'postgres',

  pool: {
    max: 100,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
  operatorsAliases: true
});

module.exports = sequelize;
