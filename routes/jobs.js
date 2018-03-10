const Sequelize = require('sequelize');
const models = require('../connections/models');
const Op = Sequelize.Op;

module.exports = {
    find: (req, res) => {
        let q = req.query;
        let opts = {
            group: ["link", "id"],
            attributes: ['id', 'title', 'link', 'publishDate', 'referrer', 'company', 'tags'],
            order: [["publishDate", "DESC"]],
            offset: req.query.offset || 0,
            limit: req.query.limit || 25
        }

        let whereOr = {};

        if (req.query.search) {
            whereOr.title = {
                [Op.like]: `%${req.query.search}%`
            }
            whereOr.company = {
                [Op.like]: `%${req.query.search}%`
            }
            whereOr.tags = {
                [Op.like]: `%${req.query.search}%`
            }
        }

        if (req.query.tags) {
            let tagIds = req.query.tags.split(',');
            whereOr.tags = {};
            tagIds.forEach(t => {
                whereOr.tags[Op.like] = `%${t}%`
            });
        }

        if (Object.keys(whereOr).length) {
            opts.where = {
                [Op.or]: whereOr
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
};