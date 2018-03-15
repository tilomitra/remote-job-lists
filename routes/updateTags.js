const sequelize = require('../connections/db');
const models = require('../connections/models');
const Tags = require('../connections/tags');
const getRelatedTags = require('./getRelatedTags');

function updateTags(req, res) {
    models.job.findAll().then((jobs) => {

        jobs.forEach((j) => {
            const tags = getRelatedTags({ title: j.title });

            j.tags = tags;
            savePromises.push(j.save());
        });

        return Promise.all(savePromises);

    }).then((results) => {
        return res.status(200).json({ message: 'Done saving tags for all jobs.' })
    })
        .catch((err) => {
            console.log(err);
            return res.status(500).json({
                success: false,
                error: err
            })
        });
}

module.exports = updateTags;