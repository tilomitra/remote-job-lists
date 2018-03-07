const express = require('express')
const next = require('next')

const api = require('./routes/api');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

// Parse APP_ID remote-job-lists-api-server
// Parse MASTER_KEY of09m103ngrioem13gm10i4g14kg

app.prepare()
    .then(() => {
        const server = express()

        server.get('/job/:id', (req, res) => {
            const actualPage = '/job'
            const queryParams = { id: req.params.id }
            app.render(req, res, actualPage, queryParams)
        });

        server.get('/api/jobs', api.jobs.find);
        server.get('/api/jobs/:id', api.jobs.findOne);

        server.get('/api/findJobs/weworkremotely', api.weworkremotely);
        server.get('/api/findJobs/stackoverflow', api.stackoverflow);
        server.get('/api/findJobs/remoteok', api.remoteok);


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