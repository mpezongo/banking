const mysql = require("mysql");
const path = require("path");
const dotenv = require("dotenv");

dotenv.config({path: "./.env"});
exports.db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
});