const FeedMe = require('feedme');
const https = require('https');
const encoding = require('encoding');
const bulkCreateJobsAndTags = require('./bulkCreateJobsAndTags');

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
                if (!((jobsite === 'stackoverflow' && title.indexOf('remote') === -1) || jobsite === 'github' && title.indexOf('remote') === -1)) {
                    const descBuffer = encoding.convert(item.description, 'ISO-8859-1', 'UTF-8');
                    const description = descBuffer.toString();
                    batchUpdates.push({
                        title: title,
                        company: company,
                        description: description,
                        link: item.link,
                        referrer: jobsite,
                        publishDate: new Date(item.pubdate)
                    });
                }
            });

            parser.on('end', () => {
                bulkCreateJobsAndTags({ batchUpdates, jobsite }).then(() => {
                    console.log(`Updated jobs for ${jobsite}.`);
                    return resolve();
                })
            });
            response.pipe(parser);
        });
    });

}

module.exports = getRss;