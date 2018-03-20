const Sequelize = require("sequelize");
const request = require("request");
const moment = require("moment");
const qs = require("query-string");
const config = require("../config");
const models = require("../connections/models");
const sendMail = require("../scripts/sendMail");
const jobUtils = require("../scripts/jobUtils");
const generateEmailTemplate = require("../scripts/generateEmailTemplate");

const Op = Sequelize.Op;

function sendMailToUsers(req, res) {
    // find all users
    let whereOpts = {
        subscribed: true,
        lastEmailSent: {
            [Op.or]: {
                [Op.lte]: moment()
                    .subtract(7, "days")
                    .format(),
                [Op.eq]: null
            }
        }
    };
    if (req.query.test) {
        whereOpts.email = "tilomitra@gmail.com";
    }
    models.user
        .findAll({
            where: whereOpts
        })
        .then(users => {
            //for each user, we need to know what mail to send them.
            console.log(`Found ${users.length} users to email today.`);
            let userPromises = [];
            let emailsSent = [];
            let emailsSkipped = [];

            if (!users.length) {
                return res.status(200).json({
                    message: "There are no users to email at this time."
                });
            }
            users.forEach(u => {
                const fromDate = u.lastEmailSent
                    ? moment(u.lastEmailSent)
                    : moment(u.createdAt);
                const toDate = moment();
                // 1. get all the jobs for the user between today and the day the last email was sent.
                // Default to a week if last email was not sent.

                userPromises.push(
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
                            let numJobsFound = filteredJobs.length;

                            console.log(
                                `Sending mail to ${
                                    u.email
                                } with ${numJobsFound} jobs.`
                            );

                            if (numJobsFound > 0) {
                                return sendMail({
                                    to: u.email,
                                    from: {
                                        email: "tilo@remotejoblists.com",
                                        name: "Tilo from Remote Job Lists"
                                    },
                                    reply_to: {
                                        name: "Tilo Mitra",
                                        email: "tilomitra@gmail.com"
                                    },
                                    bcc: {
                                        name: "Tilo Mitra",
                                        email: "tilomitra@gmail.com"
                                    },
                                    content: "text/html",
                                    subject: `${numJobsFound} remote jobs that you may be interesed in`,
                                    text: `We found ${numJobsFound} jobs that you may be interested in between ${fromDate} and ${toDate}`,
                                    html: generateEmailTemplate({
                                        jobs: filteredJobs,
                                        fromDate: fromDate.format("MMM Do"),
                                        toDate: "today",
                                        qs: qs.stringify({
                                            from: fromDate.format("YYYY-MM-DD"),
                                            to: toDate.format("YYYY-MM-DD")
                                        }),
                                        baseUrl: config.host,
                                        tags: u.tags ? u.tags.split(",") : []
                                    })
                                });
                            } else {
                                emailsSkipped.push(u.email);
                                return;
                            }
                        })
                        .then(({ response, to }) => {
                            if (to) {
                                emailsSent.push(to);
                                return models.user.findOne({
                                    where: {
                                        email: to
                                    }
                                });
                            } else {
                                return;
                            }
                        })
                        .then(user => {
                            if (user) {
                                user.lastEmailSent = moment().format();
                                user.numberOfEmailsSent += 1;
                                return user.save();
                            } else return;
                        })
                        .then(() => {
                            console.log("Emailed and saved user.");
                        })
                        .catch(err => {
                            console.log(err);
                        })
                );
            });

            Promise.all(userPromises)
                .then(() => {
                    return res.status(200).json({
                        message: `Emailed ${emailsSent.length} users, skipped ${
                            emailsSkipped.length
                        } users.`,
                        emailsSent: emailsSent,
                        emailsSkipped: emailsSkipped
                    });
                })
                .catch(err => {
                    console.log(err);
                    return res.status(500).send(err);
                });
        })
        .catch(err => {
            console.log(err);
            return res.status(500).send(err);
        });
}

module.exports = sendMailToUsers;
