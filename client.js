window.onload = rotate;

var techPic = 0;
var techImages = ["images/pic1.png","images/pic2.png","images/pic3.png","images/pic4.png","images/pic5.png","images/pic6.png","images/pic7.png"];

function rotate() {
    techPic++;
    if (techPic == techImages.length) {
        techPic = 0;
    }
    document.getElementById("pic1").src = techImages[techPic];

    setTimeout(rotate, 4 * 1000);
}


