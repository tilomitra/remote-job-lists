const models = require('../connections/models');

function subscribe(req, res) {
    const Users = models.user;

    const email = req.body.email;
    const tags = req.body.tags;

    if (!email) {
        return res.status(401).send({
            message: "Please enter an email address"
        })
    }

    // convert from empty array to empty string.
    if (tags.length === 0) tags = [];

    let dbTags = tags.join(',');

    Users.findOrCreate({
        where: { email },
        defaults: {
            email,
            tags: dbTags
        },
    })
        .spread((user, created) => {
            user = user.get({
                plain: true
            });
            return res.status(200).json(user);
        }).catch((err) => {
            return res.status(500).json({
                success: false,
                error: err
            });
        })
};

module.exports = subscribe;