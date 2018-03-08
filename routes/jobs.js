const Sequelize = require('sequelize');
const sequelize = require('../connections/db');
const models = require('../connections/models');
const Op = Sequelize.Op;

module.exports = {
    find: (req, res) => {
        let q = req.query;
        let query = `
        SELECT Jobs.id, Jobs.title, Jobs.link, Jobs.publishDate, Jobs.referrer, Jobs.company FROM Jobs GROUP BY Jobs.link ORDER BY Jobs.publishDate DESC LIMIT ${q.limit || 25} OFFSET ${q.offset || 0}
        `;

        let countQuery = `
            SELECT COUNT(*) FROM Jobs GROUP BY Jobs.link
        `;

        // let query = {
        //     basic: `
        //     SELECT Jobs.id, Jobs.title, Jobs.link, Jobs.publishDate, Jobs.referrer, Jobs.company FROM Jobs  AND (Jobs.title LIKE '%frontend%') GROUP BY Jobs.link ORDER BY Jobs.publishDate DESC LIMIT ${q.limit || 25} OFFSET ${q.offset || 0}
        //     `,
        //     where: [
        //         {
        //             search: `(Jobs.title LIKE '%${req.query.search}%')`
        //         }
        //     ]
        // };


        // let opts = {
        //     group: ["link"],
        //     attributes: ['id', 'title', 'link', 'publishDate', 'referrer', 'company'],
        //     order: [["publishDate", "DESC"]],
        //     offset: req.query.offset || 0,
        //     limit: req.query.limit || 25,
        //     include: [{ model: models.tag, as: 'Tags', attributes: ['id'] }]
        // }

        if (req.query.search) {

            query = `
            SELECT Jobs.id, Jobs.title, Jobs.link, Jobs.publishDate, Jobs.referrer, Jobs.company FROM Jobs  WHERE (Jobs.title LIKE '%${q.search}%' OR Jobs.company LIKE '%${q.search}%') GROUP BY Jobs.link ORDER BY Jobs.publishDate DESC LIMIT ${q.limit || 25} OFFSET ${q.offset || 0}
            `

            countQuery = `
                SELECT COUNT(*) FROM Jobs  WHERE (Jobs.title LIKE '%${q.search}%' OR Jobs.company LIKE '%${q.search}%') GROUP BY Jobs.link
            `

            // opts.where = {
            //     [Op.or]: {
            //         title: {
            //             [Op.like]: `%${req.query.search}%`
            //         },
            //         company: {
            //             [Op.like]: `%${req.query.search}%`
            //         }
            //     }

            // }
        }



        if (req.query.tags) {
            let tags = req.query.tags.split(',');
            let tagsQueryArr = tags.map((t) => {
                return `JobTags.tagId = '${t}`;
            });

            let tagsQuery = tagsQueryArr.join(' OR ');



            query = `
            SELECT Jobs.id, Jobs.title, Jobs.link, Jobs.publishDate, Jobs.referrer, Jobs.company FROM JobTags JOIN Jobs on (JobTags.jobId = Jobs.id)  WHERE (${tagsQuery}) GROUP BY Jobs.link ORDER BY Jobs.publishDate DESC LIMIT ${q.limit || 25} OFFSET ${q.offset || 0}
            `

            countQuery = `
                SELECT COUNT(*) FROM JobTags JOIN Jobs on (JobTags.jobId = Jobs.id)  WHERE (${tagsQuery}) GROUP BY Jobs.link
            `

        }


        const findAllQuery = sequelize.query(query, { type: sequelize.QueryTypes.SELECT });
        const countAllQuery = sequelize.query(countQuery, { type: sequelize.QueryTypes.SELECT })

        Promise.all([findAllQuery, countAllQuery]).then((values) => {

            console.log(values);
            return res.json({
                rows: values[0],
                count: values[1]
            });
        }).catch((err) => {
            return res.status(500).send(err);
        });
        // models.job.findAndCountAll(opts).then((jobs) => {
        //     return res.json(jobs);
        // }).catch((err) => {
        //     return res.status(500).send(err);
        // });
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