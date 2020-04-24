// npm module loader
const https = require("https") 
const dotenv = require("dotenv");

// environment configuration and caller
dotenv.config();
const { 
    BASE_URL
} = process.env