const mongoose = require("mongoose");

const tvShowSchema = new mongoose.Schema({
  id: Number,
  url: String,
  name: String,
  type: String,
  language: String,
  genres: [
    {
      type: String,
    },
  ],
  status: String,
  runtime: Number,
  premiered: String,
  officialSite: String,
  schedule: {
    time: String,
    days: [String],
  },
  rating: {
    average: Number,
  },
  weight: String,
  network: {
    id: Number,
    name: String,
    country: {
      name: String,
      code: String,
      timezone: String,
    },
  },
  externals: {
    tvrage: {
      type: Number,
    },
    thetvdb: {
      type: Number,
    },
    imdb: {
      type: String,
    },
  },
  image: {
    medium: String,
    original: String,
  },
  summary: String,
  updated: Number,
  _links: {
    self: {
      href: String,
      previousepisode: {
        href: String,
      },
    },
  },
});

module.exports = mongoose.model("SeriesApiResponses", tvShowSchema);

/* {"id":139,"url":"http://www.tvmaze.com/shows/139/girls","name":"Girls","type":"Scripted","language":"English","genres":["Drama","Romance"],
"status":"Ended","runtime":30,"premiered":"2012-04-15","officialSite":"http://www.hbo.com/girls",
"schedule":{"time":"22:00","days":["Sunday"]},"rating":{"average":6.7},"weight":81,
"network":{"id":8,"name":"HBO","country":{"name":"United States","code":"US","timezone":"America/New_York"}},
"webChannel":null,"externals":{"tvrage":30124,"thetvdb":220411,"imdb":"tt1723816"},"image":{"medium":"http://static.tvmaze.com/uploads/images/medium_portrait/31/78286.jpg","original":"http://static.tvmaze.com/uploads/images/original_untouched/31/78286.jpg"},"summary":"<p>This Emmy winning series is a comic look at the assorted humiliations and rare triumphs of a group of girls in their 20s.</p>","updated":1600633829,
"_links":{"self":
                {"href":"http://api.tvmaze.com/shows/139"},
                "previousepisode":{"href":"http://api.tvmaze.com/episodes/1079686"}}} */
