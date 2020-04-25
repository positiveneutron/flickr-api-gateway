const express = require("express");

const router = express.Router();

const adapter = require("../adapters/apiAdapter");

const api = adapter();

router.get("/public_image", (req, res) => {
  return api
    .get("/", {
      params: {
        format: "json",
        lang: "en-us",
        nojsoncallback: 1,
      },
    })
    .then((resp) => {
      res.send(resp.data);
    });
});

router.get("/public_image/:tags", (req, res) => {
  return api
    .get("/", {
      params: {
        format: "json",
        lang: "en-us",
        nojsoncallback: 1,
        tags: req.params.tags,
      },
    })
    .then((resp) => {
      res.send(resp.data);
    });
});

module.exports = router;
