const Sequelize = require('sequelize');
const models = require('../connections/models');
const Op = Sequelize.Op;

module.exports = {
    find: (req, res) => {

        let opts = {
            group: ["link"],
            attributes: ['id', 'title', 'link', 'publishDate', 'referrer', 'company'],
            order: [["publishDate", "DESC"]],
            offset: req.query.offset || 0,
            limit: req.query.limit || 25,
            include: [{ model: models.tag, as: 'Tags' }]
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
            },
            include: [{ model: models.tag, as: 'Tags' }]
        }).then((job) => {
            return res.json(job);
        }).catch((err) => {
            return res.status(500).send(err);
        });
    }
};