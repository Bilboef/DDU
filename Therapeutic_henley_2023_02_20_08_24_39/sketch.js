function draw() {
  background(220);
  imageMode(CENTER);
    image(img, windowWidth/2, windowHeight/5);
}
let img;
function preload() {
  img = loadImage('Nokia.png');

}

let button;
let b2;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  button = createButton('Restaffald');
  button.position(width/2, height/2);
  button.mousePressed(changeBG);

  b2 = createButton('Restaffald');
  b2.position(width/2, height/2.5);
  b2.mousePressed(changeBG);
}

function changeBG() {
  let val = random(255);
  background(val);
}
//hej
