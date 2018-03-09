const getRelatedTags = require('./getRelatedTags');
const models = require('../connections/models');


const bulkCreateJobsAndTags = ({ batchUpdates, jobsite }) => {
    return models.job.bulkCreate(batchUpdates, {
        fields: ["title", "company", "description", "link", "referrer", "publishDate", "tags"]
    })
};

module.exports = bulkCreateJobsAndTags;