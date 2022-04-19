
var Jimp = require('jimp');
const fs = require("fs")

function photoEditing(req, res, next) {
    const pathToFile = `${__dirname}/../image/default.jpg`
    const file = req.files.file
    const timestamp = new Date(Date.now())
    const timestampFormatted = timestamp.getMonth()+"/"+timestamp.getDate()+" "+timestamp.getHours()+":"+timestamp.getMinutes()

    file.mv(pathToFile, err => {
        console.error(err)
    })

    Jimp.read('image/default.jpg')
        .then(photo => {
            return photo
                .quality(60) // set JPEG quality
                .greyscale() // set greyscale
                .write('grayDefault.jpg'); // save
        })
        .catch(err => {
            console.error(err);
        });

        Jimp.read('image/default.jpg')
        .then(photo => {
            Jimp.loadFont(Jimp.FONT_SANS_32_BLACK).then(font => {
                photo.print(font, 10, 10, timestampFormatted);
                photo.write("grayDefault.jpg")
            });
        })
        .catch(err => {
            console.error(err);
        });

        setTimeout(function() {
            next();
        }, 2000);
    
}

exports.photoEditing = photoEditing