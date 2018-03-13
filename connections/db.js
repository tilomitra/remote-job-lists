const Sequelize = require('sequelize');
const path = require('path');

const env = process.env.NODE_ENV;
let sequelize;



if (env === 'production') {
  let match = process.env.DATABASE_URL.match(/postgres:\/\/([^:]+):([^@]+)@([^:]+):(\d+)\/(.+)/);

  sequelize = new Sequelize(match[5], match[1], match[2], {
    dialect: 'postgres',
    protocol: 'postgres',
    port: match[4],
    host: match[3],
    logging: false,
    operatorsAliases: true,
    dialectOptions: {
      ssl: true
    }
  });

} else {

  let config = {
    name: 'remote_job_lists',
    username: 'tilo',
    password: 'testuser',
    host: 'localhost'
  }

  sequelize = new Sequelize(config.name, config.username, config.password, {
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
}

module.exports = sequelize;

