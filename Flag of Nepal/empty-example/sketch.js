function setup() {
  createCanvas(1000,1000)
  console.log(screen.width)
  console.log(screen.height)
}

function draw() {
    beginShape();
      vertex (300,300);
      vertex(600,500)
      vertex(400,500)
      vertex(600,700)
      vertex(310,700)
      vertex(310,900)
      vertex(300,900)
      vertex(300,300)
      fill(0,0,255)
    endShape();

    beginShape();
      vertex(310,320)
      vertex(570,490)
      vertex(375,490)
      vertex(575,690)
      vertex(310,690)
      vertex(310,320)
      fill(255,0,0)
    endShape();
    
  push();
  translate(width*0.8, height*0.5);
  
  star(-400,120, 25, 40, 15); 
  pop();

  
  push();
  fill(255)
  stroke(255,0,0)
  arc(390, 420, 80, 80, TWO_PI, PI );
  fill(255,0,0)
  stroke(255,0,0)
  arc(390, 409, 80, 80, TWO_PI, PI);
  pop(); 

  push();
  translate(width*0.8, height*0.5);
  star(-410,-65, 15, 25, 15); 
  pop();

}

function star(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle/2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
    fill(255,255,255)
    stroke(255)
  }
  endShape(CLOSE);
}

