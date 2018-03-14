const express = require('express')
const next = require('next')
const { parse } = require('url');
const sequelize = require('./connections/db');
const models = require('./connections/models');
const tags = require('./connections/tags');
const _ = require('lodash');
const bodyParser = require('body-parser')

const api = require('./routes/api');
const routeMap = require('./routes/routeMap');

const dev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 3000;
const app = next({ dev })
const handle = app.getRequestHandler()

// Parse APP_ID remote-job-lists-api-server
// Parse MASTER_KEY of09m103ngrioem13gm10i4g14kg


const forceSsl = function (req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https') {
        return res.redirect(['https://', req.get('Host'), req.url].join(''));
    }
    return next();
};

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

        if (process.env.NODE_ENV === 'production') {
            app.use(forceSsl);
        }

        server.get('/', (req, res) => {
            const parsedUrl = parse(req.url, true);
            const { pathname, query = {} } = parsedUrl;
            return app.render(req, res, '/', query);
        });
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
            const parsedUrl = parse(req.url, true);
            const { pathname, query = {} } = parsedUrl;
            const route = routeMap[pathname];

            if (route) {
                return app.render(req, res, route.page, route.query);
            }
            return handle(req, res)
        })

        server.listen(port, (err) => {
            if (err) throw err
            console.log(`> Ready on port:${port} with NODE_ENV:${process.env.NODE_ENV}`)
        })
    })
    .catch((ex) => {
        console.error(ex.stack)
        process.exit(1)
    })