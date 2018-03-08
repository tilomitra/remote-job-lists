const getRelatedTags = require('./getRelatedTags');
const models = require('../connections/models');


const bulkCreateJobsAndTags = ({ batchUpdates, jobsite }) => {
    return models.job.bulkCreate(batchUpdates, {
        fields: ["title", "company", "description", "link", "referrer", "publishDate"]
    })
        .then(() => {
            return models.job.findAll({ where: { referrer: jobsite } })
        })
        .then((jobs) => {
            let jobPromises = [];
            jobs.forEach(j => {
                const relatedTags = getRelatedTags({ title: j.title });
                const tagmodels = relatedTags.map((t) => { return models.tag.build({ id: t }) });

                j.setTags(tagmodels);

                console.log(j);

                jobPromises.push(j.save());
            });
            return Promise.all(jobPromises);
        })
        .catch((err) => {
            console.error(err);
        })
};

module.exports = bulkCreateJobsAndTags;