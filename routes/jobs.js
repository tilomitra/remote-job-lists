const Sequelize = require('sequelize');
const models = require('../connections/models');
const _ = require('lodash');
const Op = Sequelize.Op;

// Capitalize first letter
function cfl(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = {
    find: (req, res) => {
        let q = req.query;

        let opts = {
            group: ["link", "id"],
            attributes: ['id', 'title', 'link', 'publishDate', 'referrer', 'company', 'tags'],
            order: [["publishDate", "DESC"]],
            offset: q.offset || 0,
            limit: q.limit || 25,
            where: {}
        }

        let whereOr = {};

        if (q.search) {

            let lowercase = q.search.toLowerCase();
            let capitalized = cfl(lowercase);
            whereOr = {
                $or: {
                    title: {
                        $iLike: `%${lowercase}%`
                    },

                    company: {
                        $iLike: `%${lowercase}%`
                    },
                }
            }

            _.assignIn(opts.where, whereOr)


        }

        if (q.tags) {
            let tagIds = q.tags.split(',');


            _.assignIn(opts.where, {
                tags: {
                    $contains: tagIds
                }
            });

        }


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