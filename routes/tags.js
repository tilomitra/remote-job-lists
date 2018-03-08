const Sequelize = require('sequelize');
const models = require('../connections/models');
const Op = Sequelize.Op;


module.exports = {
    find: (req, res) => {

        models.tag.findAndCountAll().then((tags) => {
            return res.json(tags);
        }).catch((err) => {
            return res.status(500).send(err);
        });
    },
    findOne: (req, res) => {
        models.tag.findAll({
            where: {
                id: req.params.id
            }
        }).then((tag) => {
            return res.json(tag);
        }).catch((err) => {
            return res.status(500).send(err);
        });
    }
};