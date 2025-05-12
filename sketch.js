let backColor
let backImage
let offImage
let onImage
let bulbOn = false

function preload(){
  backImage = loadImage("room.jpg")
  offImage = loadImage("off.png")
  onImage = loadImage("on.png")
}

function setup() {
  backColor = color(0)
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(backColor);
  imageMode(CENTER)
  if (bulbOn === true){
    image(backImage, windowWidth/2, windowHeight/2, windowWidth, windowHeight)
    image(onImage, windowWidth/2, windowHeight/2, offImage.width/3, offImage.height/3)
  } else {
    image(offImage, windowWidth/2, windowHeight/2, offImage.width/3, offImage.height/3)
  }
}

function mousePressed(){
  if (bulbOn === true){
    bulbOn = false
  } else {
    bulbOn = true
  }
}

function keyPressed(){
  if (key === "r"){
    backColor = color(255, 0, 0)
  }

  if (key === "g"){
    backColor = color(0, 255, 0)
  }

  if (key === "b"){
    backColor = color(0, 0, 255)
  }
}