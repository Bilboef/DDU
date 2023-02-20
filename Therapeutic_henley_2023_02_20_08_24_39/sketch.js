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
      rect(windowWidth/11, windowHeight/11,200,200);
      
    image(img, windowWidth/11, windowHeight/11);
    imageMode(CENTER);
    img3.resize(windowWidth/1.75, windowHeight/1.75);
    image(img3, windowWidth/2, windowHeight/2);
    rect(windowWidth/3.245, windowHeight/3,windowWidth/3.245*0.625,windowHeight/3*1.1);
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
  if(mouseX>windowWidth/2.92 && mouseX<windowWidth/2.92*0.47 && mouseY>windowHeight/4.725 && mouseY<4.725*1.375)
print('MAD');
}
