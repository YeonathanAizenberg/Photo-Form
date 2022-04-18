var Jimp = require('jimp');

function editingPhoto() {
    Jimp.read('image/default.jpg', (err, photo) => {
        if (err) throw err;
        photo
            .greyscale() // set greyscale
            .quality(60) // set JPEG quality
            .write('grayDefault.jpg'); // save
    });
}

module.exports = {
    editingPhoto
};