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
      },
    })
    .then((resp) => {
      res.send(resp.data);
    });
});

module.exports = router;
