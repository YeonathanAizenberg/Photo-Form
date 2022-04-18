const express = require('express');
const router = express.Router();
const connection = require('../lib/db');

router.post('/', (req, res) => {
    const { photoName, photographer, exhibition, country, year, style } = req.body;
    let sql = `SELECT * FROM country_table WHERE country="${country}"`;
    connection.query(sql, function (err, results) {
        if (results.length === 0) {
            let sqlTwo = `INSERT INTO country_table (country) VALUES ("${country}")`;
            connection.query(sqlTwo, function (err, results) {
                if (err) {
                    throw err;
                } else {
                    let sqlThree = `INSERT INTO event_table (photoName, photographer, exhibition, year, style, country_id) VALUES ("${photoName}", "${photographer}", "${exhibition}", "${year}", "${style}", "${results.insertId}")`;
                    connection.query(sqlThree, function (err, results) {
                        if (err) throw err;
                        res.send(results)
                    });
                }
            });
        } else {
            let sqlThree = `INSERT INTO event_table (photoName, photographer, exhibition, year, style, country_id) VALUES ("${photoName}", "${photographer}", "${exhibition}", "${year}", "${style}", "${results[0].id}")`;
            connection.query(sqlThree, function (err, results) {
                if (err) throw err;
                res.send(results)
            });
        }
    })
})

router.get('/exhibition/:exhibition', (req, res) => {
    const { exhibition } = req.params;
    let sql = `SELECT photo FROM photo_table INNER JOIN event_table ON event_table.photo_id=photo_table.id AND event_table.exhibition="${exhibition}"`;
    connection.query(sql, function (err, results) {
        if (err) throw err;
        if (results.length !== 0) {
            res.send(results)
        } else {
            res.send("No data found")
        }
    });
})

router.get('/country/:country', (req, res) => {
    const { country } = req.params;
    let sql = `SELECT id FROM country_table WHERE country="${country}"`;
    connection.query(sql, function (err, results) {
        if (err) throw err;
        if (results.length !== 0) {
            let sqlTwo = `SELECT name, size, encoding, tempFilePath, truncated, mimetype, md5, mv FROM photo_table INNER JOIN event_table ON event_table.photo_id=photo_table.id AND event_table.country_id=${results[0].id}`;
            connection.query(sqlTwo, function (err, results) {
                if (err) throw err;
                res.send(results)
            });
        } else {
            res.send("No data found")
        }
    });
})

module.exports = router