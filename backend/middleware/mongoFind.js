const SeriesApiResponses = require("../models/tvShows");

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
        return res
          .status(200)
          .send({
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
