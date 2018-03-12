const Sequelize = require('sequelize');
const path = require('path');

const env = process.env.NODE_ENV;

let config = {
  name: 'remote_job_lists',
  username: 'tilo',
  password: 'testuser',
  host: 'localhost'
}

if (env === 'production') {
  config = {
    name: 'd1qp08pho72grf',
    username: 'bidqlggczxghnj',
    password: '10ebd8e4af2b1963f04a66f1bdcca3cff3213eadc75e568614e7eb0cb7ba5830',
    host: 'ec2-54-83-23-91.compute-1.amazonaws.com'
  }
}



const sequelize = new Sequelize(config.name, config.username, config.password, {
  host: config.host,
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
