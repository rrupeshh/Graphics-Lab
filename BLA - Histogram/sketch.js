function setup() {
  createCanvas(screen.width,screen.height)
}

function draw() {
  line(50,0,50,500)
  line(50,500,1000,500)
  values = [50,200,80,180,40,140,20,200,80,180];
  findingCoords(values)
  console.log('Job done')
}

function findingCoords(values){
  init_x = 150 
  init_y = 500
  a = init_x;
  b = init_y;
  for (val in values){
    height = values[val]
    for (var i=0;i<3;++i){
      if (i==0){
        x_next = init_x;
        if(init_y != 500){
          init_y = 500
        }
        y_next = init_y - height;
      }else if(i==1){
        init_y = y_next;
        x_next = init_x + 40;
      }else{
        init_x = x_next;
        y_next = init_y + height
      }
      bla(init_x,init_y,x_next,y_next)
      
    }
  }
  
}


function bla(x0,y0,x1,y1){
  let dx = x1-x0;
  let dy = y1-y0;
  let x = x0;
  let y = y0;
  beginShape();
  if (dy==0){
    p = 2*dy-dx;
    while(x<x1){
      if (p<0){
        vertex(x,y);
        x = x+1;
        p = p +2*dy;
      }else{
        vertex(x,y);
        x = x+1;
        y = y+1;
      }
    }
  }else if(dx==0){
    if (y0>y1){
      //upward vertical line drawing
      dy = Math.abs(dy); // because of the negative value that appears here...
      p = 2*dx-dy;
      // console.log(y)
      while(y>y1){
        if (p<0){
          vertex(x,y);
          y = y-1;
          p = p+2*dx;
        }else{
          vertex(x,y);
          x = x+ 1;
          y = y+1;
          p = p+2*dx-2*dy
        }
      }
    }else{
      p = 2*dx-dy;
      while(y<y1){
        if(p<0){
          vertex(x,y);
          y = y+1;
          p = p+2*dx;
        }else{
          vertex(x,y);
          x = x+1;
          y = y-1;
          p = p+2*dx-2*dy
        }
      }
      
    }
  }
  endShape();
}