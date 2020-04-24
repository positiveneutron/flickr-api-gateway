// npm module loader
const express = require("express");
const app = express();
const dotEnv = require("dotenv");
const router = require("./routers");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Flickr API Gateway");
});

app.use(router);
app.listen(8000);
