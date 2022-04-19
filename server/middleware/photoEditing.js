
var Jimp = require('jimp');

function photoEditing(req, res, next) {
    const pathToFile = `${__dirname}/../image/default.jpg`
    const file = req.files.file
    const timestamp = new Date(Date.now())
    const timestampFormatted = (timestamp.getMonth() + 1) + "/" + timestamp.getDate() + " " + timestamp.getHours() + ":" + (timestamp.getMinutes() >= 0 && timestamp.getMinutes() < 10 ? "0" + timestamp.getMinutes() : timestamp.getMinutes())

    file.mv(pathToFile, cb => {
        callEdit()
    })

    function callNext() {
        next();
    }

    function callEdit() {
        Jimp.read('image/default.jpg')
            .then(photo => {
                return photo
                    .resize(256, 256)
                    .greyscale()
                    .write('grayDefault.jpg');
            }).then(grayPhoto => {
                Jimp.loadFont(Jimp.FONT_SANS_12_BLACK).then(font => {
                    grayPhoto.print(font, 10, 10, timestampFormatted);
                    grayPhoto.write("grayDefault.jpg", callNext)
                });
            })
            .catch(err => {
                console.error(err);
            });
    }
}

exports.photoEditing = photoEditing