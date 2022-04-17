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

router.get('/:exhibition', (req, res) => {
    const { exhibition } = req.params;
    let sql = `SELECT photo FROM event_table WHERE exhibition= "${exhibition}"`;
    connection.query(sql, function (err, results) {
        if (err) throw err;
        res.send(results)
    });
})

router.get('/:country', (req, res) => {
    const { country } = req.params;
    let sql = `SELECT * FROM event_table WHERE country=${exhibition}`;
    connection.query(sql, function (err, results) {
        if (err) throw err;
        res.send(results)
    });
})
module.exports = router