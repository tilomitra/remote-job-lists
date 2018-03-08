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
        id: {
            type: Sequelize.STRING,
            primaryKey: true,
            unique: true
        }
    }),

    // user: sequelize.define('User', {
    //     email: {
    //         type: Sequelize.STRING,
    //         unique: true
    //     }
    // })
}

models.job.belongsToMany(models.tag, { as: "Tags", through: "JobTags", foreignKey: 'jobId' });
models.tag.belongsToMany(models.job, { as: "Jobs", through: "JobTags", foreignKey: 'tagId' });


module.exports = models;