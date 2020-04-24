const axios = require("axios");
const dotEnv = require("dotenv");

// environment configuration and caller
dotEnv.config();
const { BASE_URL } = process.env;

module.exports = () => axios.create({ baseURL: BASE_URL });
