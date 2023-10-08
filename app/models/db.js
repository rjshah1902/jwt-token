const mysql = require('mysql');

const config = require('./../config/config');

const connecton = mysql.createConnection({
    host: config.hostname,
    user: config.username,
    password: config.password,
    database: config.database
});

module.exports = connecton;