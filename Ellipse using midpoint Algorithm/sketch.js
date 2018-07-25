function setup(){
    createCanvas(screen.width,screen.height);
    radiusX = 200;
    radiusY = 150;
}

function draw(){
    translate(300,300);
    x_coordinate = 0;
    y_coordinate = radiusY;
    let pR1,pR2;
    pR1 = radiusY*radiusY-radiusX*radiusX*radiusY+0.25*radiusX*radiusX;

    while(!(2*radiusY*radiusY*x_coordinate >= 2*radiusX*radiusX*y_coordinate)){
        if (pR1<0){
            ellipse(x_coordinate,y_coordinate,1);
            x_coordinate++;
            pR1 += 2*radiusY*radiusY*x_coordinate+radiusY*radiusY;
        }else{
            ellipse(x_coordinate,y_coordinate,1);
            x_coordinate++;
            y_coordinate--;
            pR1 += 2*radiusY*radiusY*x_coordinate-2*radiusX*radiusX*y_coordinate+radiusY*radiusY;
        }
        points(x_coordinate,y_coordinate);
    }

    if ((2*radiusY*radiusY*x_coordinate >= 2*radiusX*radiusX*y_coordinate)){
    
        pR2 = Math.pow(radiusY,2)*Math.pow(x_coordinate+0.5,2)+Math.pow(radiusX,2)*Math.pow(y_coordinate-1,2)-radiusX*radiusX*radiusY*radiusY;
        while((x_coordinate!=8 && y_coordinate!=0)){
            if(pR2<0){
                ellipse(x_coordinate,y_coordinate,1);
                x_coordinate++;
                y_coordinate--;
                pR2 += 2*radiusY*radiusY*x_coordinate-2*radiusX*radiusX*y_coordinate+radiusX*radiusX;
            }else{
                ellipse(x_coordinate,y_coordinate,1);
                y_coordinate--;
                pR2 += radiusX*radiusX-2*radiusX*radiusX*y_coordinate;
            }
            points(x_coordinate,y_coordinate);
        }
    }
}

function points(x,y){
    ellipse(x,-y,1);
    ellipse(-x,y,1);
    ellipse(-x,-y,1);
}