let xwmin=300;
let ywmin=200;
let xwmax= 600;
let ywmax=400;

function setup(){
    createCanvas(screen.width, screen.height);
    text('Liang Barsky Line clipping Algorithm',350,450);
    stroke(0,0,255);
    text('Blue line indicate clipped line',350,470);
}

function draw(){
    stroke(255,0,0);
    rect(xwmin,ywmin,(xwmax-xwmin),(ywmax-ywmin));
    
    clip(60,600,20,700);
    clip(20,50,800,600);
    clip(50,500,600,80);
    clip(200,300,700,300);
    clip(20,20,600,30);
    clip(500,60,600,500);
    clip(500,60,600,500);
}

function clip(x1,y1,x2,y2){ 
    let p = [];
    let q = [];
    let r1 = [];
    let r2 = [];


    let flag = true;
    dx = (x2 -x1);
    dy = (y2-y1);
    p[0] = -dx;
    p[1] = dx;
    p[2] = -dy;
    p[3] = dy;

    q[0] = x1 - xwmin;
    q[1] = xwmax - x1;
    q[2] = y1 - ywmin;
    q[3] = ywmax - y1;

    for (i = 0; i < 4; i++) {
        if (p[i] === 0) {
          if (q[i] < 0)
            flag = false;
        }
    }

    if (flag == true) {
        for (i = 0; i < 4; i++) {
          if (p[i] < 0) {
            r1.push((q[i] / p[i])); //Appending r1 array
          } else if (p[i] > 0) {
            r2.push((q[i] / p[i])); //Appending r2 array
          }
        }
    }

    u1 = max(r1);
    u2 = min(r2);

    if(u1<u2){
        xI = x1 + u1*dx;
        yI = y1 + u1*dy;
        xJ = x1 + u2*dx;
        yJ = y1 + u2*dy
        stroke(0,0,255);
        line(xI,yI,xJ,yJ); //Clipped Line
    }
    
}