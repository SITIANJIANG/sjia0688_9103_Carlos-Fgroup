
let imageLogo;
const imageWidth = 100;
const imageHeight = 60;

let keyState = "satic";
let imageX, imageY;
let speedX, speedY;

// load the image first before the setup function
function preload(){
  imageLogo = loadImage("assets/dvd.png");
}

function setup() {
  createCanvas(600, 600);

  imageX = random(width);
  imageY = random(height);
  speedX = 4;
  speedY = 4;
}


function draw(){
  background("blue");
  if (keyState == "static") {
      imageX = width/2 - imageWidth/2;
      imageY = height/2 - imageHeight/2;
      image(imageLogo, imageX,imageY, imageWidth, imageHeight);
    }
    if (keyState == "mouse") {
      image(imageLogo, mouseX, mouseY, imageWidth, imageHeight);
    }
    if (keyState == "moving") {
    imageX += speedX;
    imageY += speedY;
    if (imageX + imageWidth > width || imageX < 0){
      speedX = -speedX;
    }
    if (imageY + imageHeight > height || imageY < 0){
      speedY = -speedY;
    }
    image(imageLogo, imageX, imageY, imageWidth, imageHeight);

  }
}

function keyPressed(){
  if (key == "1"){
    keyState = "static";
  }
  if (key == "2"){
    keyState = "mouse";
  }

  if (key =="3"){
    keyState = "moving";
  }
}
