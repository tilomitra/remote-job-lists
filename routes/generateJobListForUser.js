const moment = require("moment");
const models = require("../connections/models");
const Sequelize = require("sequelize");
const _ = require("lodash");
const jobUtils = require("../scripts/jobUtils");
const Op = Sequelize.Op;

const handleRoute = (req, res) => {
    let { from, to, tags } = req.query;

    if (!from || !to || !tags) {
        return res.status(401).send("Bad Arguments");
    }

    //Split the comma-separated value into an array.
    tags = tags.split(",");

    jobUtils
        .getJobsForDates({ from, to })
        .then(jobs => {
            let filteredJobs = jobUtils.filterJobsWithTags(jobs, tags);
            return res.status(200).json({
                count: filteredJobs.length,
                from: from,
                to: to,
                jobs: filteredJobs
            });
        })
        .catch(err => {
            return res.status(500).send(err);
        });
};

module.exports = handleRoute;
