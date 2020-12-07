const express = require("express");
const router = express.Router();
const tvShowsController = require("../controllers/tvShowsController");
const mongoFind = require("../middleware/mongoFind");
 
// middleware that is specific to this router
router.get("/:name", mongoFind, tvShowsController.list);

module.exports = router;
