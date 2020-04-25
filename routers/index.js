const express = require("express");
const router = express.Router();
const flickrService = require("../services/flickrService");

router.use(flickrService);

module.exports = router;
