const moment = require("moment");
const models = require("../connections/models");
const Sequelize = require("sequelize");
const _ = require("lodash");
const Op = Sequelize.Op;

// Generate all job listings that should go into an email.
const getJobsForDates = ({ from, to }) => {
    const Jobs = models.job;

    return Jobs.findAll({
        attributes: ["id", "title", "company", "link", "publishDate", "tags"],
        where: {
            updatedAt: {
                [Op.and]: {
                    [Op.lte]: to,
                    [Op.gte]: from
                }
            }
        }
    });
};

const filterJobs = (jobs, tags) => {
    let filteredJobs = [];

    if (!tags || tags.length === 0) {
        return jobs;
    }

    _.each(jobs, j => {
        let intersection = _.intersection(j.tags, tags);
        if (intersection.length > 0) {
            filteredJobs.push(j);
        }
    });

    return filteredJobs;
};

module.exports = {
    getJobsForDates: getJobsForDates,
    filterJobsWithTags: filterJobs
};
