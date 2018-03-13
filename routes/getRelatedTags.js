const tags = require('../connections/tags');
const _ = require('lodash');


const getRelatedTags = ({ title }) => {
    title = title.toLowerCase();

    let relatedTags = [];

    _.forEach(tags, ({ keywords }, tag) => {
        // check to see if the keywords are in title or description.
        let isRelatedTag = false;
        keywords.forEach(k => {
            const inTitle = _.includes(title, k);
            //const inDesc = _.includes(description, k);
            if (inTitle) {
                isRelatedTag = true;
            }
        });

        if (isRelatedTag) {
            relatedTags.push(tag);
        }
    });

    relatedTags = _.uniq(relatedTags);
    return relatedTags;
}

module.exports = getRelatedTags;