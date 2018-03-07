const FeedMe = require('feedme');
const https = require('https');
const sequelize = require('../connections/db');
const models = require('../connections/models');

const Job = models.job;


const getRss = ({ url, jobsite }) => {
    return new Promise((resolve, reject) => {
        https.get(url, (response) => {
            if (response.statusCode != 200) {
                const err = new Error(`status code ${response.statusCode}`);
                return reject(err);
            }
            var parser = new FeedMe(true);
            var promises = [];

            parser.on('title', (title) => {
                console.log('title of feed is', title);
            });
            parser.on('item', (item) => {

                let title;
                let company;
                if (jobsite === 'weworkremotely') {
                    title = item.title.split(':')[1].trim();
                    company = item.title.split(':')[0].trim();
                } else {
                    title = item.title;
                    company = item.name;
                }

                promises.push(
                    Job.findOrCreate({
                        where: {
                            title: title,
                            referrer: jobsite,
                            publishDate: item.pubdate
                        },
                        defaults: {
                            title: title,
                            company: company,
                            description: item.description,
                            link: item.link,
                            referrer: jobsite,
                            publishDate: item.pubdate
                        }
                    })
                        .then((job) => {
                            var created = job[1];
                            job = job[0]; //new or found
                            if (created) {
                                console.log('created job:', item.title);
                            } else {
                                console.log('found job:', item.title);
                            }
                        })
                )

            });

            parser.on('end', () => {
                Promise.all(promises).then(resolve());
            });
            response.pipe(parser);
        });
    });

}


const apiRoutes = {
    jobs: (req, res) => {
        Job.findAll({ limit: 200 }).then((jobs) => {
            return res.json(jobs);
        }).catch((err) => {
            return res.status(500).send(err);
        });
    },

    weworkremotely: (req, res) => {
        const urls = [
            'https://weworkremotely.com/categories/remote-programming-jobs.rss',
            'https://weworkremotely.com/categories/remote-business-exec-management-jobs.rss',
            'https://weworkremotely.com/categories/remote-customer-support-jobs.rss',
            'https://weworkremotely.com/categories/remote-marketing-jobs.rss',
            'https://weworkremotely.com/categories/remote-jobs.rss'
        ];

        const fetchFeeds = urls.map((u) => {
            return getRss({
                url: u,
                jobsite: 'weworkremotely'
            })
        });

        Promise.all(fetchFeeds)
            .then(() => {
                return res.status(200).send({
                    success: true,
                    message: "Updated WeWorkRemotely Jobs."
                })
            })
            .catch((err) => {
                console.error(err);
                return res.status(500).send(err);
            })
    },

    stackoverflow: (req, res) => {
        getRss({
            url: 'https://stackoverflow.com/jobs/feed',
            jobsite: 'stackoverflow'
        })
            .then(() => {
                return res.status(200).send({
                    success: true,
                    message: "Updated StackOverflow Jobs."
                });
            })
            .catch((err) => {
                console.error(err);
                return res.status(500).send(err);
            })
    }
}




module.exports = apiRoutes;