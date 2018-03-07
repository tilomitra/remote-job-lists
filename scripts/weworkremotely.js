const FeedMe = require('feedme');
const https = require('https');
const sequelize = require('../connections/db');
const models = require('../connections/models');

const Job = models.job;

https.get('https://weworkremotely.com/categories/remote-programming-jobs.rss', (res) => {
    if (res.statusCode != 200) {
        console.error(new Error(`status code ${res.statusCode}`));
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
    res.pipe(parser);
});