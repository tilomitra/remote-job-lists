const request = require("request");
const Sequelize = require("sequelize");
const encoding = require("encoding");

const sequelize = require("../connections/db");
const models = require("../connections/models");

const Op = Sequelize.Op;
const getRss = require("./getRss");

const getRelatedTags = require("./getRelatedTags");
const bulkCreateJobsAndTags = require("./bulkCreateJobsAndTags");

const apiRoutes = {
    jobs: require("./jobs"),
    subscribe: require("./subscribe"),
    unsubscribe: require("./unsubscribe"),
    updateTags: require("./updateTags"),
    removeDuplicates: require("./removeDuplicates"),
    getJobListForUser: require("./generateJobListForUser"),
    sendMailToUsers: require("./sendMailToUsers"),

    weworkremotely: (req, res) => {
        const urls = [
            "https://weworkremotely.com/categories/remote-programming-jobs.rss",
            "https://weworkremotely.com/categories/remote-business-exec-management-jobs.rss",
            "https://weworkremotely.com/categories/remote-customer-support-jobs.rss",
            "https://weworkremotely.com/categories/remote-marketing-jobs.rss",
            "https://weworkremotely.com/categories/remote-jobs.rss"
        ];

        const fetchFeeds = urls.map(u => {
            return getRss({
                url: u,
                jobsite: "weworkremotely"
            });
        });

        Promise.all(fetchFeeds)
            .then(() => {
                return res.status(200).send({
                    success: true,
                    message: "Updated WeWorkRemotely Jobs."
                });
            })
            .catch(err => {
                console.error(err);
                return res.status(500).send(err);
            });
    },

    stackoverflow: (req, res) => {
        getRss({
            url: "https://stackoverflow.com/jobs/feed",
            jobsite: "stackoverflow"
        })
            .then(() => {
                return res.status(200).send({
                    success: true,
                    message: "Updated StackOverflow Jobs."
                });
            })
            .catch(err => {
                console.error(err);
                return res.status(500).send(err);
            });
    },
    github: (req, res) => {
        getRss({
            url: "https://jobs.github.com/positions.atom",
            jobsite: "github"
        })
            .then(() => {
                return res.status(200).send({
                    success: true,
                    message: "Updated Github Jobs."
                });
            })
            .catch(err => {
                console.error(err);
                return res.status(500).send(err);
            });
    },
    remoteok: (req, res) => {
        request(
            {
                url: "https://remoteok.io/remote-jobs.json",
                json: true
            },
            (err, response, body) => {
                let batchUpdates = [];

                if (err) {
                    return res.status(500).send(err);
                } else {
                    body.forEach(d => {
                        // Convert the ISO-8859-1 format that is in these feeds to UTF-8.
                        const descBuffer = encoding.convert(
                            d.description,
                            "ISO-8859-1",
                            "UTF-8"
                        );
                        const relatedTags = getRelatedTags({
                            title: d.position
                        });
                        batchUpdates.push({
                            title: d.position,
                            company: d.company,
                            description: descBuffer.toString(),
                            link: `http://remoteok.io/l/${d.id}`,
                            referrer: "remoteok",
                            publishDate: new Date(d.date),
                            slug: d.slug,
                            tags: relatedTags
                        });
                    });
                }

                bulkCreateJobsAndTags({ batchUpdates, jobsite: "remoteok" })
                    .then(() => {
                        console.log("Updated RemoteOK Jobs.");
                        return res.status(200).json({
                            success: true,
                            message: "Updated RemoteOK Jobs"
                        });
                    })
                    .catch(err => {
                        console.error(err);
                        return res.status(500).send(err);
                    });
            }
        );
    }
};

module.exports = apiRoutes;
