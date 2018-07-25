let radius;
let x_coordinate,y_coordinate;


function setup() {
  createCanvas(screen.width,screen.height);  
    radius = 100;
  }
  
  function draw() { 
    translate(300,300);
    p = 1-radius;
    x_coordinate = 0;
    y_coordinate = radius;
    point(0,0);
    stroke(2);
    while(! (x_coordinate>=y_coordinate)){
        if (p<0){
            ellipse(x_coordinate,y_coordinate,1);
            x_coordinate++;
            p += 2*x_coordinate + 1;
        }else{
            ellipse(x_coordinate,y_coordinate,0.5);
            x_coordinate++;
            y_coordinate--;
            p += 2*x_coordinate+1-2*y_coordinate;
        }
        points(x_coordinate,y_coordinate);    
    }
  }

  function points(x,y){
      ellipse(y,x,0.5);
      ellipse(x,-y,0.5);
      ellipse(y,-x,0.5);
      ellipse(-y,-x,0.5);
      ellipse(-x,-y,0.5);
      ellipse(-x,y,0.5);
      ellipse(-y,x,0.5);

  }
