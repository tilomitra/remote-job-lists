const Sequelize = require('sequelize');
const sequelize = require('./db');


module.exports = {
    job: sequelize.define('Job', {
        title: Sequelize.STRING,
        description: Sequelize.TEXT,
        link: Sequelize.STRING
    })
}