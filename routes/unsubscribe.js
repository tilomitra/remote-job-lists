const models = require("../connections/models");

function unsubscribe(req, res) {
    const Users = models.user;
    const email = req.body.email;

    if (!email) {
        return res.status(401).send({
            message: "Please enter an email address"
        });
    }

    Users.findOne({
        where: { email }
    })
        .then(user => {
            if (user) {
                user.subscribed = false;
                return user.save();
            } else {
                return res.status(400).json({
                    success: false,
                    message: "User was not found."
                });
            }
        })
        .then(() => {
            return res.status(200).json({
                success: true,
                message: "User was unsubscribed successfully."
            });
        })
        .catch(err => {
            return res.status(500).json({
                success: false,
                error: err
            });
        });
}

module.exports = unsubscribe;
