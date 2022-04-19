const express = require('express');
const router = express.Router();
const connection = require('../lib/db');
const fs = require("fs")

const { photoEditing } = require('../middleware/PhotoEditing');

router.post('/:id', photoEditing, (req, res) => {
    if (req.files === null) {
        return res.status(400)
    } else {
        const file = req.files.file
        const { name, size, encoding, tempFilePath, truncated, mimetype, md5, mv } = file
        const grayImage = fs.readFileSync(`${__dirname}/../image/grayDefault.jpg`).toString('base64')
        let sql = `INSERT INTO photo_table (name, photo, size, encoding, tempFilePath, truncated, mimetype, md5, mv) VALUES ("${name}", "${grayImage}", "${size}", "${encoding}", "${tempFilePath}", "${truncated}", "${mimetype}", "${md5}", "${mv}")`;
        connection.query(sql, function (err, results) {
            if (err) throw err;
            let sqlTwo = `UPDATE event_table SET photo_id = "${results.insertId}" WHERE id = ${req.params.id}`;
            connection.query(sqlTwo, function (err, results) {
                if (err) throw err;
                res.send(results)
            });
            fs.unlink(`${__dirname}/../image/default.jpg`, err => {
                console.error(err)
            })
            fs.unlink(`${__dirname}/../image/grayDefault.jpg`, err => {
                console.error(err)
            })
        });
    }
})

module.exports = router