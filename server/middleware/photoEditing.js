
var Jimp = require('jimp');
const fs = require("fs")

function photoEditing(req, res, next) {
    const pathToFile = `${__dirname}/../image/default.jpg`
    const file = req.files.file
    const timestamp = new Date(Date.now())
    const timestampFormatted = (timestamp.getMonth()+1)+"/"+timestamp.getDate()+" "+timestamp.getHours()+":"+timestamp.getMinutes()

    file.mv(pathToFile, err => {
        console.error(err)
    })

    setTimeout(function() {
    Jimp.read('image/default.jpg')
        .then(photo => {
            return photo
                .resize(256, 256) 
                .quality(60) // set JPEG quality
                .greyscale() // set greyscale
                .write('grayDefault.jpg'); // save
        }).then(grayPhoto => {
            Jimp.loadFont(Jimp.FONT_SANS_12_BLACK).then(font => {
                grayPhoto.print(font, 10, 10, timestampFormatted);
                grayPhoto.write("grayDefault.jpg")
            });
        })
        .catch(err => {
            console.error(err);
        });
    }, 1000);

        setTimeout(function() {
            next();
        }, 5000);
}

exports.photoEditing = photoEditing