const Sequelize = require('sequelize');
const sequelize = require('./db');


let models = {
    job: sequelize.define('Job', {
        title: Sequelize.STRING,
        description: Sequelize.TEXT,
        company: Sequelize.TEXT,
        link: Sequelize.STRING,
        referrer: Sequelize.TEXT,
        publishDate: {
            type: 'TIMESTAMP',
            defaultValue: Sequelize.NOW
        }
    }),

    tag: sequelize.define('Tag', {
        name: Sequelize.STRING
    })
}

models.job.hasMany(models.tag, { as: 'Tags' });

module.exports = models;