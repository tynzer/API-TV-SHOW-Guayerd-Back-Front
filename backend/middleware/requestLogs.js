const RequestLog = require("../models/requestLogs");

module.exports = (req, res, next) => {
  const name = req.params.name.trim();
  RequestLog.create(
    {
      ip: req.connection.remoteAddress,
      tvShowSearched: name,
      date: new Date(),
      responseFrom: "CACHE",
    },
    function (err) {
      if (err) {        
        return res.status(500).send({ errors: err.errors });
      } else {
        next();
      }
    }
  );
};
