const sequelize = require('../connections/db');
const models = require('../connections/models');

// Remove duplicate entries from database.
function removeDuplicates(req, res) {
    const Jobs = models.job;
    sequelize.query(`
        DELETE
        FROM
            "Jobs" a
                USING "Jobs" b
        WHERE
            a.id < b.id
            AND a.title = b.title
            AND a.company = b.company
    `, { model: Jobs }).then((response) => {
            return res.status(200).send(response);
        }).catch((err) => {
            return res.status(500).send(err);
        });
}

module.exports = removeDuplicates;