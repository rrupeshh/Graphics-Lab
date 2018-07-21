function setup() {
  createCanvas(1000,1000);
}

function draw() {
  var x1 = 200;
  var y1 = 200;
  var x2 = 600;
  var y2 = 200;
  var dy = y2-y1;
  var dx = x2-x1;

  var d = dy - (dx/2);
  var x = x1;
  var y = y1;

  beginShape();
    vertex(x,y);

    while(x < x2){
      x = x+1;
      if(d<0){
        d = d + dy;
      }
      else{
        d = d+dy-dx;
        y = y+1;
      }
      vertex(x,y);
    }
  endShape();


   
}

