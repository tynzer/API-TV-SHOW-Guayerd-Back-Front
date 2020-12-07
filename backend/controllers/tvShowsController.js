const SeriesApiResponses = require("../models/tvShows");
const RequestLog = require("../models/requestLogs");

const fetch = require("node-fetch");

module.exports = {
  list: function (req, res) {
    const name = req.params.name.trim();

    try {
      fetch("http://api.tvmaze.com/singlesearch/shows?q=" + name)
        .then((res) => res.json())
        .then((data) => {
          const ip =
            req.headers["x-forwarded-for"] ||
            req.connection.remoteAddress ||
            req.socket.remoteAddress ||
            req.connection.socket.remoteAddress;

          const {
            id,
            url,
            name,
            type,
            language,
            genres,
            status,
            runtime,
            premiered,
            officialSite,
            schedule,
            rating,
            weight,
            network,
            externals,
            image,
            summary,
            updated,
            _links,
          } = data;
          res.status(201).send({
            id,
            url,
            name,
            type,
            language,
            genres,
            status,
            runtime,
            premiered,
            officialSite,
            schedule,
            rating,
            weight,
            network,
            externals,
            image,
            summary,
            updated,
            _links,
          });
          SeriesApiResponses.create({
            id,
            url,
            name,
            type,
            language,
            genres,
            status,
            runtime,
            premiered,
            officialSite,
            schedule,
            rating,
            weight,
            network,
            externals,
            image,
            summary,
            updated,
            _links,
          });
          RequestLog.create({
            ip: ip.split(":").pop(),
            tvShowSearched: name,
            date: new Date(),
            responseFrom: "API",
          });
        });
    } catch (err) {
      res.status(401).send({
        error: err,
      });
    }
  },
};
