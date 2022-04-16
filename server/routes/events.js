const express = require('express');
const router = express.Router();
const connection = require('../lib/db');

router.post('/', (req, res) => {
    const {photoName, photographer, exhibition, country, year, style, emptyCanvas} = req.body;
    console.log(photoName, photographer, exhibition, country, year, style, emptyCanvas)
    res.send("id")
})

router.get('/', (req, res) => {
    let sql = "SELECT room, user, message, time FROM users_table INNER JOIN messages_table ON users_table.id = messages_table.user_id";
    connection.query(sql, function(err, results) {
        if(err) throw err;
        res.send(results)
    });
})

module.exports = router