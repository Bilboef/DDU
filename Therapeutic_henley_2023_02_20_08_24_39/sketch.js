function draw() {
  background(220);
    image(img, 0, 0);
}
let img;
function preload() {
  img = loadImage('Nokia.png');
}

let button;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  button = createButton('Restaffald');
  button.position(width/2, height/2);
  button.mousePressed(changeBG);
}

function changeBG() {
  let val = random(255);
  background(val);
}
Hey 
