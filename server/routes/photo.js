const express = require('express');
const router = express.Router();
const connection = require('../lib/db');

const { greyScale } = require('../utils/greyScale');

router.post('/', (req, res) => {
    if(req.files === null) {
        return res.status(400).json({msg: 'No file uploaded'})
    } else {
        console.log("req.files", req.files)
        const file = req.files.file
        console.log(file)
        greyScale(file)
    }
})

module.exports = router