const request = require('request');
const Sequelize = require('sequelize');
const encoding = require('encoding');

const sequelize = require('../connections/db');
const models = require('../connections/models');

const Op = Sequelize.Op;
const getRss = require('./getRss');

const apiRoutes = {

    jobs: {
        find: (req, res) => {

            let opts = {
                group: ["link"],
                attributes: ['id', 'title', 'link', 'publishDate', 'referrer', 'company'],
                order: [["publishDate", "DESC"]],
                offset: req.query.offset || 0,
                limit: req.query.limit || 25
            }

            if (req.query.search) {
                opts.where = {
                    [Op.or]: {
                        title: {
                            [Op.like]: `%${req.query.search}%`
                        },
                        company: {
                            [Op.like]: `%${req.query.search}%`
                        }
                    }

                }
            }

            models.job.findAndCountAll(opts).then((jobs) => {
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
    github: (req, res) => {
        getRss({
            url: 'https://jobs.github.com/positions.atom',
            jobsite: 'github'
        })
            .then(() => {
                return res.status(200).send({
                    success: true,
                    message: "Updated Github Jobs."
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
                    // Convert the ISO-8859-1 format that is in these feeds to UTF-8.
                    const descBuffer = encoding.convert(d.description, 'ISO-8859-1', 'UTF-8');
                    batchUpdates.push({
                        title: d.position,
                        company: d.company,
                        description: descBuffer.toString(),
                        link: `http://remoteok.io/l/${d.id}`,
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