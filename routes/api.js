const request = require('request');

const sequelize = require('../connections/db');
const models = require('../connections/models');

const getRss = require('./getRss');

const apiRoutes = {

    jobs: {
        find: (req, res) => {
            models.job.findAndCountAll({
                group: ["link"],
                attributes: ['id', 'title', 'link', 'publishDate', 'referrer', 'company'],
                order: [["publishDate", "DESC"]],
                offset: req.query.offset || 0,
                limit: req.query.limit || 25
            }).then((jobs) => {
                return res.json(jobs);
            }).catch((err) => {
                return res.status(500).send(err);
            });
        },
        findOne: (req, res) => {
            models.job.findAll({
                where: {
                    id: parseInt(req.params.id)
                }
            }).then((job) => {
                return res.json(job);
            }).catch((err) => {
                return res.status(500).send(err);
            });
        }
    },

    weworkremotely: (req, res) => {
        const urls = [
            'https://weworkremotely.com/categories/remote-programming-jobs.rss',
            'https://weworkremotely.com/categories/remote-business-exec-management-jobs.rss',
            'https://weworkremotely.com/categories/remote-customer-support-jobs.rss',
            'https://weworkremotely.com/categories/remote-marketing-jobs.rss',
            'https://weworkremotely.com/categories/remote-jobs.rss'
        ];

        const fetchFeeds = urls.map((u) => {
            return getRss({
                url: u,
                jobsite: 'weworkremotely'
            })
        });

        Promise.all(fetchFeeds)
            .then(() => {
                return res.status(200).send({
                    success: true,
                    message: "Updated WeWorkRemotely Jobs."
                })
            })
            .catch((err) => {
                console.error(err);
                return res.status(500).send(err);
            })
    },

    stackoverflow: (req, res) => {
        getRss({
            url: 'https://stackoverflow.com/jobs/feed',
            jobsite: 'stackoverflow'
        })
            .then(() => {
                return res.status(200).send({
                    success: true,
                    message: "Updated StackOverflow Jobs."
                });
            })
            .catch((err) => {
                console.error(err);
                return res.status(500).send(err);
            })
    },

    remoteok: (req, res) => {
        request({
            url: 'https://remoteok.io/remote-jobs.json',
            json: true
        }, (err, response, body) => {

            let batchUpdates = [];

            if (err) {
                return res.status(500).send(err);
            } else {
                body.forEach(d => {
                    batchUpdates.push({
                        title: d.position,
                        company: d.company,
                        description: d.description,
                        link: d.url,
                        referrer: 'remoteok',
                        publishDate: new Date(d.date),
                        slug: d.slug
                    });
                });
            }

            models.job.bulkCreate(batchUpdates, {
                fields: ["title", "company", "description", "link", "referrer", "slug", "publishDate"]
            }).then(() => {
                console.log('Updated RemoteOK Jobs.');
                return res.status(200).json({
                    success: true,
                    message: 'Updated RemoteOK Jobs'
                });
            }).catch((err) => {
                console.error(err);
                return res.status(500).send(err);
            })
        });


    }
}




module.exports = apiRoutes;