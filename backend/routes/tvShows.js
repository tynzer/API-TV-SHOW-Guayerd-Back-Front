const express = require("express");
const router = express.Router();
const tvShowsController = require("../controllers/tvShowsController");
const mongoFind = require("../middleware/mongoFind");
const requestLog = require("../middleware/requestLogs");

// middleware that is specific to this router
router.get("/:name", requestLog, mongoFind, tvShowsController.list);
/* router.post('/', carouselImagenController.create); */

module.exports = router;
