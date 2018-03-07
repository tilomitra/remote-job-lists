const Sequelize = require('sequelize');
const sequelize = require('./db');


let models = {
    job: sequelize.define('Job', {
        title: Sequelize.STRING,
        description: Sequelize.TEXT,
        company: Sequelize.TEXT,
        link: {
            type: Sequelize.STRING,
            unique: true
        },
        slug: {
            type: Sequelize.STRING,
            unique: true
        },
        referrer: Sequelize.TEXT,
        publishDate: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        }
    }),

    tag: sequelize.define('Tag', {
        name: Sequelize.STRING
    })
}

models.job.hasMany(models.tag, { as: 'Tags' });

module.exports = models;