const express = require('express');
const router = express.Router();
const connection = require('../lib/db');

const { greyScale } = require('../utils/greyScale');

router.post('/:id', (req, res) => {
    if(req.files === null) {
        return res.status(400)
    } else {
        const file = req.files.file
        const {name, data, size, encoding, tempFilePath, truncated, mimetype, md5, mv} = file
        const dataToString = data.toString('base64')
        // greyScale(file)
        let sql = `INSERT INTO photo_table (name, photo, size, encoding, tempFilePath, truncated, mimetype, md5, mv) VALUES ("${name}", "${dataToString}", "${size}", "${encoding}", "${tempFilePath}", "${truncated}", "${mimetype}", "${md5}", "${mv}")`;
        connection.query(sql, function (err, results) {
            if (err) throw err;
            let sqlTwo = `UPDATE event_table SET photo_id = "${results.insertId}" WHERE id = ${req.params.id}`;
            connection.query(sqlTwo, function (err, results) {
                if (err) throw err;
                res.send(results)
            });
        });
    }
})

module.exports = router