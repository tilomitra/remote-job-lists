const Sequelize = require('sequelize');
const models = require('../connections/models');
const _ = require('lodash');
const Op = Sequelize.Op;

module.exports = {
    find: (req, res) => {
        let q = req.query;

        let opts = {
            group: ["link", "id"],
            attributes: ['id', 'title', 'link', 'publishDate', 'referrer', 'company', 'tags'],
            order: [["publishDate", "DESC"]],
            offset: req.query.offset || 0,
            limit: req.query.limit || 25,
            where: {}
        }

        let whereOr = {};

        if (req.query.search) {

            whereOr = {
                $or: {
                    title: {
                        $like: `%${req.query.search}%`
                    },
                    company: {
                        $like: `%${req.query.search}%`
                    }
                }
            }

            console.log('assinging or');
            _.assignIn(opts.where, whereOr)
            console.log(opts.where);


        }

        if (req.query.tags) {
            let tagIds = req.query.tags.split(',');


            _.assignIn(opts.where, {
                tags: {
                    $contains: tagIds
                }
            });

        }

        // if (Object.keys(whereAnd).length) {
        //     where[Op.and] = whereAnd;
        //     opts.where = where;
        // }

        console.log(opts.where);

        if (Object.keys(opts.where).length === 0) {
            delete opts.where;
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