var hr, mn, sc;
var scAngle, hrAngle, mnAngle;
 
function setup() {
  createCanvas(800,400);
  

}

function draw() {
  background(0);  

  angleMode(DEGREES);

  hr = hour();
  mn = minute();
  sc = second();

  hrAngle = map(hr%12, 0, 12, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  scAngle = map(sc, 0, 60, 0, 360);

  console.log(mn+","+mnAngle);
  if(hrAngle != 0){
    stroke(0, 255, 0);
    fill(0);
    strokeWeight(10);
    arc(400, 200, 250, 250, 0-90, hrAngle-90, OPEN);
  }

  stroke(0, 0, 255);
  strokeWeight(8);
  fill(0);
  arc(400, 200, 220, 220, 0-90, mnAngle-90, OPEN);

  push();
  translate(400,200);
  rotate(scAngle-90);
  stroke(255, 0, 0);
  strokeWeight(6);
  line(0, 0, 100, 0);
  pop();


  drawSprites();
}