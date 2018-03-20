const request = require("request");
const moment = require("moment");
const config = require("../config");
const models = require("../connections/models");
const sendMail = require("../scripts/sendMail");
const jobUtils = require("../scripts/jobUtils");
const generateEmailTemplate = require("../scripts/generateEmailTemplate");

function sendMailToUsers(req, res) {
    // find all users
    models.user
        .findAll({
            where: {
                email: "tilomitra@gmail.com"
            }
        })
        .then(users => {
            //for each user, we need to know what mail to send them.
            users.forEach(u => {
                const fromDate = u.lastEmailSent || moment(u.createdAt);
                const toDate = moment();
                // 1. get all the jobs for the user between today and the day the last email was sent.
                // Default to a week if last email was not sent.

                jobUtils
                    .getJobsForDates({
                        from: fromDate.format("YYYY-MM-DD"),
                        to: toDate.format("YYYY-MM-DD")
                    })
                    .then(jobs => {
                        let filteredJobs = jobs;
                        if (u.tags) {
                            filteredJobs = jobUtils.filterJobsWithTags(
                                jobs,
                                u.tags.split(",")
                            );
                        }
                        console.log("Sending mail to" + u.email);
                        sendMail(
                            {
                                to: u.email,
                                from: "tilo@remotejoblists.com",
                                subject: "New Job Listings",
                                text: `There are ${
                                    filteredJobs.length
                                } jobs for you between ${fromDate} and ${toDate}`,
                                html: generateEmailTemplate({
                                    jobs: filteredJobs,
                                    fromDate: fromDate.format("MMM Do YY"),
                                    toDate: "today",
                                    tags: u.tags.split(",")
                                })
                                // templateId:
                                //     "25e9dd3e-6996-464a-9679-38161e337861",
                                // substitutions: {
                                //     "%email%": u.email,
                                //     "%from%": fromDate.format("MMM Do YY"),
                                //     "%to%": "today",
                                //     "%count%": filteredJobs.length
                                // }
                            },
                            (err, response) => {
                                if (err) {
                                    return res.status(500).send(err);
                                } else {
                                    return res.status(200).json(response);
                                }
                            }
                        );
                    });
            });
        })
        .catch(err => {
            return res.status(500).send(err);
        });
}

module.exports = sendMailToUsers;
