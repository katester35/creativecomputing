function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(136, 191, 213);
  
  strokeWeight(1);
  stroke(0);
  fill(255,219,172);
  ellipse(190, 180, 225, 250);
  noFill();
  
  fill(120, 103, 71);
  rect(128, 110, 45, 5);
  rect(200, 110, 45, 5);
  noFill();
  fill(255);
  ellipse(150, 150, 35, 50);
  noFill();
  fill(52, 52, 59);
  circle(150, 162, 25);
  noFill();
  
  fill(255);
  ellipse(225, 150, 35, 50);
  noFill();
  fill(52, 52, 59);
  circle(225, 162, 25);
  noFill();
  
  triangle(190, 190, 185, 195, 195, 195);
  
  strokeWeight(2);
  stroke(120, 103, 71);
  point(200, 185);
  point(175, 200);
  point(169, 194);
  point(150, 188);
  point(180, 170);
  point(185, 160);
  point(160, 205);
  point(210, 180);
  point(220, 195);
  
  strokeWeight(1);
  stroke(201, 127, 125);
  fill(255);
  arc(190, 225, 80, 70, 0, PI, CHORD);
  noFill();
  
}
