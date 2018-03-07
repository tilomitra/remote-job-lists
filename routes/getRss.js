const FeedMe = require('feedme');
const https = require('https');

const models = require('../connections/models');


const getRss = ({ url, jobsite }) => {
    return new Promise((resolve, reject) => {

        https.get(url, (response) => {
            if (response.statusCode != 200) {
                const err = new Error(`status code ${response.statusCode}`);
                return reject(err);
            }
            var parser = new FeedMe(true);
            var batchUpdates = [];

            parser.on('item', (item) => {

                let title;
                let company;
                if (jobsite === 'weworkremotely') {
                    title = item.title.split(':')[1].trim();
                    company = item.title.split(':')[0].trim();
                } else if (jobsite === 'stackoverflow') {
                    title = item.title.split('at')[0].trim();
                    company = item.title.split('at')[1].trim();
                } else {
                    title = item.title;
                    company = item.name;
                }

                // If stackoverflow job does not have `remote` in the title, return an empty promise.
                if (!(jobsite === 'stackoverflow' && title.indexOf('remote') === -1)) {
                    batchUpdates.push({
                        title: title,
                        company: company,
                        description: item.description,
                        link: item.link,
                        referrer: jobsite,
                        publishDate: new Date(item.pubdate)
                    })
                }
            });

            parser.on('end', () => {
                models.job.bulkCreate(batchUpdates, {
                    fields: ["title", "company", "description", "link", "referrer", "publishDate"]
                }).then(() => {
                    return resolve();
                }).catch((err) => {
                    console.error(err);
                })
            });
            response.pipe(parser);
        });
    });

}

module.exports = getRss;