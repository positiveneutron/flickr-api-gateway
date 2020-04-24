const express = require("express");
const dotEnv = require("dotenv");
const router = express.Router();

const adapter = require("../adapters/apiAdapter");
// environment configuration and caller
dotEnv.config();
const { BASE_URL } = process.env;

const api = adapter(BASE_URL);

router.get("/public_image", (req, res) => {
  return api.get("/").then((resp) => {
    res.json(resp.data);
  });
});

module.exports = router;
