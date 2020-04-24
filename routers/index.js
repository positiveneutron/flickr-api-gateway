const express = require("express");
const router = express.Router();
const flickrService = require("../services/flickrService");

router.use((req, res, next) => {
  next();
});

router.use(flickrService);

module.exports = router;
