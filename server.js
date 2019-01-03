const express = require("express");
const next = require("next");
const { parse } = require("url");
const sequelize = require("./connections/db");
const models = require("./connections/models");
const tags = require("./connections/tags");
const _ = require("lodash");
const bodyParser = require("body-parser");
const request = require("request");
const async = require("async");
const config = require("./config");

const api = require("./routes/api");
const routeMap = require("./routes/routeMap");

const dev = process.env.NODE_ENV !== "production";
const port = process.env.PORT || 3000;
const app = next({ dev });
const handle = app.getRequestHandler();

require("dotenv").config();

const forceSsl = function(req, res, next) {
  if (req.headers["x-forwarded-proto"] !== "https") {
    return res.redirect(["https://", req.get("Host"), req.url].join(""));
  }
  return next();
};

app
  .prepare()
  .then(() => {
    sequelize
      .sync({ force: false })
      .then(function(err) {
        console.log("Connected to Postgresql.");
      })
      .catch(err => {
        console.error("Error in Sequelize syncing: ", err);
      });

    const server = express();

    server.use(bodyParser.json()); // to support JSON-encoded bodies
    server.use(
      bodyParser.urlencoded({
        // to support URL-encoded bodies
        extended: true,
      }),
    );

    if (process.env.NODE_ENV === "production") {
      server.use(forceSsl);
    }

    server.get("/", (req, res) => {
      const parsedUrl = parse(req.url, true);
      const { pathname, query = {} } = parsedUrl;
      return app.render(req, res, "/", query);
    });
    server.get("/job/:id", (req, res) => {
      const actualPage = "/job";
      const queryParams = { id: req.params.id };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("/unsubscribe", (req, res) => {
      const actualPage = "/unsubscribe";
      const parsedUrl = parse(req.url, true);
      const { pathname, query = {} } = parsedUrl;
      app.render(req, res, actualPage, query);
    });

    server.get("/email-example", (req, res) => {
      const actualPage = "/email-example";
      const parsedUrl = parse(req.url, true);
      const { pathname, query = {} } = parsedUrl;
      app.render(req, res, actualPage, query);
    });

    server.get("/api/jobs", api.jobs.find);
    server.get("/api/jobs/:id", api.jobs.findOne);

    server.post("/api/subscribe", api.subscribe);
    server.post("/api/unsubscribe", api.unsubscribe);
    server.post("/api/updateTags", api.updateTags);
    server.get("/api/getJobListForUser", api.getJobListForUser);
    server.delete("/api/removeDuplicates", api.removeDuplicates);
    server.post("/api/sendMailToUsers", api.sendMailToUsers);

    server.get("/api/findJobs/weworkremotely", api.weworkremotely);
    server.get("/api/findJobs/stackoverflow", api.stackoverflow);
    server.get("/api/findJobs/remoteok", api.remoteok);
    server.get("/api/findJobs/github", api.github);

    server.get("*", (req, res) => {
      const parsedUrl = parse(req.url, true);
      const { pathname, query = {} } = parsedUrl;
      const route = routeMap[pathname];

      if (route) {
        return app.render(req, res, route.page, route.query);
      }
      return handle(req, res);
    });

    server.listen(port, err => {
      if (err) throw err;
      console.log(
        `> Ready on port:${port} with NODE_ENV:${process.env.NODE_ENV}`,
      );

      const BASE_URL = config.host;

      // Set an interval to check jobs every 6 hours.
      setInterval(() => {
        console.log("Attempting to update jobs...");
        async.series(
          [
            cb => {
              request(BASE_URL + "/api/findJobs/remoteOk", cb);
            },
            cb => {
              request(BASE_URL + "/api/findJobs/weworkremotely", cb);
            },

            cb => {
              request(BASE_URL + "/api/findJobs/stackoverflow", cb);
            },

            cb => {
              request(
                {
                  uri: BASE_URL + "/api/removeDuplicates",
                  method: "DELETE",
                },
                cb,
              );
            },
          ],
          (err, results) => {
            if (err) {
              console.log(err);
              console.log("Error when running cron jobs.");
            } else {
              //console.log(results);
              console.log("Jobs updated successfully.");
            }
          },
        );
      }, 60 * 60 * 1000 * 6); //this is 6 hours.
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
