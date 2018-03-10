const express = require('express')
const next = require('next')
const sequelize = require('./connections/db');
const models = require('./connections/models');
const tags = require('./connections/tags');
const _ = require('lodash');
const bodyParser = require('body-parser')

const api = require('./routes/api');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

// Parse APP_ID remote-job-lists-api-server
// Parse MASTER_KEY of09m103ngrioem13gm10i4g14kg

app.prepare()
    .then(() => {
        sequelize
            .sync({ force: false })
            .then(function (err) {
                console.log('Connected to Postgresql.');
            }).catch((err) => {
                console.error("Error in Sequelize syncing: ", err);
            });

        const server = express()

        server.use(bodyParser.json());       // to support JSON-encoded bodies
        server.use(bodyParser.urlencoded({     // to support URL-encoded bodies
            extended: true
        }));

        server.get('/job/:id', (req, res) => {
            const actualPage = '/job'
            const queryParams = { id: req.params.id }
            app.render(req, res, actualPage, queryParams)
        });

        server.get('/api/jobs', api.jobs.find);
        server.get('/api/jobs/:id', api.jobs.findOne);

        server.post('/api/subscribe', api.subscribe);

        server.get('/api/findJobs/weworkremotely', api.weworkremotely);
        server.get('/api/findJobs/stackoverflow', api.stackoverflow);
        server.get('/api/findJobs/remoteok', api.remoteok);
        server.get('/api/findJobs/github', api.github);

        server.get('*', (req, res) => {
            return handle(req, res)
        })

        server.listen(3000, (err) => {
            if (err) throw err
            console.log('> Ready on http://localhost:3000')
        })
    })
    .catch((ex) => {
        console.error(ex.stack)
        process.exit(1)
    })