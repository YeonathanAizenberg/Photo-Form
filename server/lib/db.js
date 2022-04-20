const mysql = require('mysql');

// Local DB
// const connection = mysql.createConnection({
//     host: 'localhost',
//     database: 'pumbaparking',
//     user: 'root',
//     password: 'root'
// })

// Deployed DB
const connection = mysql.createConnection({
    host: 'eu-cdbr-west-02.cleardb.net',
    database: 'heroku_be2a71aa4c96122',
    user: 'bbe483cc2901c9',
    password: '0cf24f1c'
})

module.exports = connection;