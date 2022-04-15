const mysql = require('mysql');

// Local DB
const connection = mysql.createConnection({
    host: 'localhost',
    database: 'photos',
    user: 'root',
    password: 'root'
})

module.exports = connection;