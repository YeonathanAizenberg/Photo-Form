const express = require('express');
const router = express.Router();
const connection = require('../lib/db');

const { greyScale } = require('../utils/greyScale');

router.post('/:id', (req, res) => {
    if(req.files === null) {
        return res.status(400).json({msg: 'No file uploaded'})
    } else {
        const file = req.files.file
        const {name, data} = file
        const dataToString = data.toString('base64')
        let sql = `UPDATE event_table SET photo = "${dataToString}" WHERE id = ${req.params.id}`;
        connection.query(sql, function (err, results) {
            if (err) throw err;
            res.send(results)
        });
        // greyScale(file)
    }
})

module.exports = router