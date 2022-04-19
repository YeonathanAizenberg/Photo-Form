
var Jimp = require('jimp');

function photoEditing(req, res, next) {
    const pathToFile = `${__dirname}/../image/default.jpg`
    const file = req.files.file
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

        setTimeout(function() {
            next();
        }, 2000);
    
}

exports.photoEditing = photoEditing