const express = require('express');
const router = express.Router();
const connection = require('../lib/db');

// Image handling 
const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb)=> {
        cb(null, '../Images')
    },
})

const upload = multer({storage: storage});

const { greyScale } = require('../utils/greyScale');

router.post('/', upload.single('Photo'), (req, res) => {
    console.log(req.file)
    const {photoName, photographer, exhibition, country, year, style, photo, emptyCanvas} = req.body;
    console.log(photoName, photographer, exhibition, country, year, style, photo, emptyCanvas)
    // const grayPhoto = greyScale(photo, emptyCanvas)
    // console.log(grayPhoto)
    // let sql = `INSERT INTO users_table (room, user) VALUES ("${room}", "${user}")`;
    // connection.query(sql, function(err, results) {
    //     if(err) {
    //         throw err;
    //     } else {
    //         let sqlTwo = `INSERT INTO messages_table (message, time, user_id) VALUES ("${message}", "${time}", "${results.insertId}")`;
    //         connection.query(sqlTwo, function(err, results) {
    //             if(err) throw err;
    //             res.send(results)
    //         });
    //     }
        
    // });
})

router.get('/', (req, res) => {
    let sql = "SELECT room, user, message, time FROM users_table INNER JOIN messages_table ON users_table.id = messages_table.user_id";
    connection.query(sql, function(err, results) {
        if(err) throw err;
        res.send(results)
    });
})

module.exports = router