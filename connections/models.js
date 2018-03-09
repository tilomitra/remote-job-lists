const Sequelize = require('sequelize');
const sequelize = require('./db');


let models = {
    job: sequelize.define('Job', {
        title: Sequelize.STRING,
        description: Sequelize.TEXT,
        company: Sequelize.TEXT,
        link: Sequelize.STRING,
        slug: Sequelize.STRING,
        referrer: Sequelize.TEXT,
        publishDate: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        },
        tags: Sequelize.STRING
    }),
}


module.exports = models;