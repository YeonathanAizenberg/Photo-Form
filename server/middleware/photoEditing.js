
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
        // Read("Take") the file img and turn into grayscale
        Jimp.read('image/default.jpg')
            .then(photo => {
                return photo
                    .resize(256, 256)
                    .greyscale()
                    .write('./image/grayDefault.jpg');
            })

        // Loop over the pixels, and if the value is >= 180, turn it white
            .then(grayPhoto => {
                    grayPhoto.scan(0, 0, grayPhoto.bitmap.width, grayPhoto.bitmap.height, function (x, y, idx) {
                        var red = this.bitmap.data[idx + 0];
                        var green = this.bitmap.data[idx + 1];
                        var blue = this.bitmap.data[idx + 2];
                        var alpha = this.bitmap.data[idx + 3];

                        if ((red + green + blue) / 3 >= 180) {
                            // 255,255,255 = white on rgb
                            this.bitmap.data[idx] = 255
                        }

                    });
                    return grayPhoto.write("./image/grayDefault.jpg")
            })

            // Add time stamp
            .then(grayWhitePhoto => {
                    Jimp.loadFont(Jimp.FONT_SANS_12_BLACK).then(font => {
                        grayWhitePhoto.print(font, 10, 10, timestampFormatted);
                        grayWhitePhoto.write("./image/grayDefault.jpg", callNext)
                    });
            })

            .catch(err => {
                console.error(err);
            });
    }
}

module.exports = {
    photoEditing
};