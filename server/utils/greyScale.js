function greyScale(photo) { 
    var image = new Image(20,  20)
    try {
        for (var pixel of image.values()) {
                var red= pixel.getRed();
                var green= pixel.getGreen();
                var blue= pixel.getBlue();
                average= (red+green+blue)/3;
                pixel.setRed(average);
                pixel.setGreen(average);
                pixel.setBlue(average);
        }
        return image.drawTo(emptyCanvas)
    }
    catch(err) {
        console.log(err)
    };
}

module.exports = {
    greyScale
};