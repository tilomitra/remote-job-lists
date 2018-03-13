const env = process.env.NODE_ENV;
let config;
if (env === 'production') {
    config = {
        host: 'https://remote-job-lists.herokuapp.com'
    }
} else[
    config = {
        host: 'http://localhost:3000'
    }
]


module.exports = config;