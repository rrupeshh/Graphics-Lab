function setup() {
  createCanvas(1200,1200)
}

function draw() {
  line(20,10,20,600);
  line(20,600,1200,600)
  
 drawLine(50,400,300,200);
 drawLine(300,200,500,100);
 drawLine(500,100,700,200);
 drawLine(700,200,900,150);
 drawLine(900,150,1000,200);
}

function drawLine(x1,y1,x2,y2){
  var dx = x2-x1;
  var dy = y2-y1;

  if (Math.abs(dx) > Math.abs(dy)){
    var steps = Math.abs(dx);
  }
  else{
    var steps = Math.abs(dy);
  }

  var Xinc = dx/steps;
  var Yinc = dy/steps;

  var X = x1;
  var Y = y1;
  beginShape();
  for ( var i = 0; i <= steps; i++){
    vertex(X,Y);
    X += Xinc;
    Y += Yinc;
  }
  endShape();
}

