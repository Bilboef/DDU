function draw() {
  background(220);
  imageMode(CENTER);
  img2.resize(windowWidth, windowHeight);
  image(img2, windowWidth/2, windowHeight/2);

    image(img, windowWidth/2, windowHeight/5);
}
let img;
let img2;
function preload() {
  img = loadImage('Nokia.png');
  img2 = loadImage('Baggrund.jpg');

}

let button;
let b2;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  button = createButton('Restaffald');
  button.position(width/2, height/2);
  button.mousePressed(changeBG);

  b2 = createButton('Bioaffald');
  b2.position(width/2, height/2.5);
  b2.mousePressed(changeBG);
}

function changeBG() {
  let val = random(255);
  background(val);
}
