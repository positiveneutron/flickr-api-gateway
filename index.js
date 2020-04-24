// npm module loader
const https = require("https") 
const dotenv = require("dotenv");

// envrironment configuration and caller
dotenv.config();
const { 
    BASE_URL
} = process.env