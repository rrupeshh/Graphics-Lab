let x1 = 120, y1 = 43;
let x2 = 120 , y2 = -43;
let x3, y3 = 43;
let x4 = 120 , y4 = -43;
let x5 = 43, y5 = y6 = 120;
let x6 = -43
let x7 = 43, y7;
let  x8 = -43, y8;
let xR1, yR1, xR2, yR2, xR3, yR3, xR4, yR4;
let rate = 2;
function setup() {
	createCanvas(1235, 1200);
	angleMode(DEGREES);
	x3 = ((120 * cos(180)) - (43 * sin(180)));
	x4 = ((120 * cos(180)) - (-43 * sin(180)));
	y7 = ((43 * sin(180)) + (120 * cos(180)));
	y8 = ((-43 * sin(180)) + (120 * cos(180)));
}
function draw() {
	background(255,255,255);
	noStroke();
	translate(600, 150);
	stroke(0);
	//Shaft Start
	strokeWeight(2);
	fill(100,120, 0);
	triangle(-30,0,30,0, 0, -30); //Triangular cap
	fill(10,100,10);	
	quad(-30, 0, 30, 0, 55, 300, -55, 300); // Shaft
	fill(30, 144, 100);
	//door
	fill(0,0,0);
  	rect(-17.5, 220, 40, 80);
  	fill(100,140,200);
  	quad(-17.5,220, 13,230, 13, 300, -17.5,300);
	//base
	fill(100, 120, 0);
	rect(-60, 300, 120, 20);
	rect(-75, 323, 150, 20);
	rect(-95, 346, 190, 20);
	//shaft End
	//First Blade Start
	xR1 = (x1*cos(rate)) - (y1 * sin(rate));
	yR1 = (x1 * sin(rate)) + (y1 * cos(rate));
	x1 = xR1;
	y1 = yR1;

	xR2 = (x2*cos(rate)) - (y2 * sin(rate));
	yR2 = (x2 * sin(rate)) + (y2 * cos(rate));
	x2 = xR2;
	y2 = yR2;

	fill(10,10,200,100);
	quad(0, 0, 0, 0, xR1, yR1, xR2, yR2);
	
	// Second Blade Start
	xR3 = (x3*cos(rate)) - (y3 * sin(rate));
	yR3 = (x3 * sin(rate)) + (y3 * cos(rate));
	x3 = xR3;
	y3 = yR3;

	xR4 = (x4*cos(rate)) - (y4 * sin(rate));
	yR4 = (x4 * sin(rate)) + (y4 * cos(rate));
	x4 = xR4;
	y4 = yR4;
	quad(0, 0, 0, 0, xR3, yR3, xR4, yR4);
	
	//Second Blade Stop

	// Third Blade start
	//SE line
	xR5 = (x5*cos(rate)) - (y5 * sin(rate));
	yR5 = (x5 * sin(rate)) + (y5 * cos(rate));
	x5 = xR5;
	y5 = yR5;

	xR6 = (x6*cos(rate)) - (y6 * sin(rate));
	yR6 = (x6 * sin(rate)) + (y6 * cos(rate));
	x6 = xR6;
	y6 = yR6;
	quad(0, 0, 0, 0, xR5, yR5, xR6, yR6);
	
	// Third Blade Stop
	//Fourth Blade Start
	xR7 = (x7*cos(rate)) - (y7 * sin(rate));
	yR7 = (x7 * sin(rate)) + (y7 * cos(rate));
	x7 = xR7;
	y7 = yR7;

	xR8 = (x8*cos(rate)) - (y8 * sin(rate));
	yR8 = (x8 * sin(rate)) + (y8 * cos(rate));
	x8 = xR8;
	y8 = yR8;
	quad(0, 0, 0, 0, xR7, yR7, xR8, yR8);
	//Fourth Blade Stop

}