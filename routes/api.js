const FeedMe = require('feedme');
const https = require('https');
const sequelize = require('../connections/db');
const models = require('../connections/models');

const Job = models.job;

const apiRoutes = {
    jobs: (req, res) => {
        Job.findAll().then((jobs) => {
            return res.json(jobs);
        }).catch((err) => {
            return res.status(500).send(err);
        });
    },

    weworkremotely: (req, res) => {
        https.get('https://weworkremotely.com/categories/remote-programming-jobs.rss', (response) => {
            if (response.statusCode != 200) {
                console.error(new Error(`status code ${response.statusCode}`));
                return;
            }
            var parser = new FeedMe();
            parser.on('title', (title) => {
                console.log('title of feed is', title);
            });
            parser.on('item', (item) => {
                Job
                    .build({ title: item.title, description: item.description, link: item.link })
                    .save()
                    .then(() => {
                        console.log('saved job:', item.title);
                    });
            });
            response.pipe(parser);
            return res.status(200);
        });
    }
}

module.exports = apiRoutes;