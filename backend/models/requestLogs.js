const mongoose = require("mongoose");

const requestLogSchema = new mongoose.Schema({
  date: String,
  tvShowSearched: String,
  ip: String,
  responseFrom: String,
});

module.exports = mongoose.model("RequestLog", requestLogSchema);
