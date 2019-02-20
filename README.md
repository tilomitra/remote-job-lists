# Remote Job Lists
A side project for a remote job listing site. Originally [planned to productize](http://tilomitra.com/launching-remote-job-lists/), but decided to open source.

![](https://i2.wp.com/tilomitra.com/wp-content/uploads/2018/03/Screen-Shot-2018-04-12-at-7.36.28-AM.png?w=1000)

## Features
- Fetches data from various remote job databases and providers and stores it in a Postgres Database
    - Github
    - WeWorkRemotely
    - RemoteOK
    - Stack Overflow
- Categorizes jobs based on title/description/meta 
- Allows users to subscribe to job and category notifications via Email


## Technologies
- 100% JavaScript
- React and Redux
- Express with NextJS
- Postgres with Sequelize as an ORM
- Sendgrid for Email sends


## Local Setup
1. Clone the repository
2. Setup a local database and enter the credentials into `connections/db.js`
3. `npm install`
4. `npm start`
5. You will need to create a `.env` file with a `SENDGRID_API_KEY` to allow for email sends.


## Fetching Jobs
To fetch jobs, hit each one of these endpoints:

```
    server.get("/api/findJobs/weworkremotely", api.weworkremotely);
    server.get("/api/findJobs/stackoverflow", api.stackoverflow);
    server.get("/api/findJobs/remoteok", api.remoteok);
    server.get("/api/findJobs/github", api.github);
```

## Licence
MIT

