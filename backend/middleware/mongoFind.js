const SeriesApiResponses = require("../models/tvShows");
const RequestLog = require("../models/requestLogs");

module.exports = (req, res, next) => {
  const name = req.params.name.trim();
  SeriesApiResponses.find({ name: name })
    .then(function (tvShowFounded) {
      if (tvShowFounded.length) {
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
        } = tvShowFounded[0];
        const ip =
          req.headers["x-forwarded-for"] ||
          req.connection.remoteAddress ||
          req.socket.remoteAddress ||
          req.connection.socket.remoteAddress;

        RequestLog.create({
          ip: ip.split(":").pop(),
          tvShowSearched: name,
          date: new Date(),
          responseFrom: "CACHE",
        });
        return res.status(200).send({
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
      }
      next();
    })
    .catch(function (err) {
      res.status(500).send({ error: err });
    });
};
