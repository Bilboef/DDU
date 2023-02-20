let visbilleder = true;
let visbillede2 = false;

function draw() {
  background(220);
  imageMode(CENTER);
  img2.resize(windowWidth, windowHeight);
  
  if(visbilleder){
  image(img2, windowWidth/2, windowHeight/2);
  fill(0);
  rectMode(CENTER);
      rect(windowWidth/2, windowHeight/5,200,200);
    image(img, windowWidth/2, windowHeight/5);
    imageMode(CENTER);
    image(img3, windowWidth/2, windowHeight/2);
  }
  if(visbillede2){
    
    image(img2, windowWidth/2, windowHeight/2);

  }
}
let img;
let img2;
function preload() {
  img = loadImage('Nokia.png');
  img2 = loadImage('Baggrund.jpg');
img3 = loadImage('aaskrald.jpg');
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
 
}

function changeBG() {
  b2.hide();
  button.hide();
  visbilleder = false;
  visbillede2 = true;
 
}

function changeBG2() {
  b2.hide();
  button.hide();
  visbilleder = false;
  visbillede2 = true;
  
}


function mousePressed(){

print(mouseX,mouseY);

}