
var nbr_circles;
var retiniRandom;
var moire = 50;
var cx = 0; // x centro del cerchio
var cy = 0; // y centro del cerchio
var lg_diam;
var lg_rad;
var chiaro;
var scuro;
var opticalArea;
var angle;
var spaziatura;
var scale = 1.618;

function setup(){
  var myCanvas = createCanvas(windowWidth, windowHeight);
  myCanvas.parent('myContainer');
  retiniRandom=1;
  nbr_circles = 100;
  moire = 50;
  spessoreLinea = 3;
  poligono = 3;  
}

function draw(){
  opticalArea = 30;
  chiaro = map(mouseX, width/2-lg_rad/2, width/2+lg_rad/2, 25, 250);
  scuro = map (mouseX, 0, width/2-lg_rad/2, width/2+lg_rad/2, 250, 25);

  background(scuro);
  lg_diam = width;
  lg_rad = lg_diam / 2;

  translate(width/2, height/2);
  rotateCerchio();

}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
// seleziona il cerchio
function selectedCerchio(){
  if(retiniRandom == 1){
    cerchio_01();
  }else if(retiniRandom == 2){
    cerchio_02();
  }else if(retiniRandom == 3){
    cerchio_03();
  }else if(retiniRandom == 4){
    cerchio_04();
  }else if(retiniRandom == 5){
    cerchio_05();
  }else if(retiniRandom == 6){
    cerchio_06();
  }else if(retiniRandom == 7){
    cerchio_07();
  }
}

function rotateCerchio(){
  var a = atan2(pmouseY-height/2, pmouseX-width/2);
  push();
  rotate(-a);
  selectedCerchio();
  pop()
  if(keyIsPressed){}else{
   // var a = -atan2(pmouseY-height/2, pmouseX-width/2);
    rotate(a);
    selectedCerchio();
  }
}


function cerchio_07(){
  for (var i = 1; i <= nbr_circles; ++i) {
    for (var bi = 1.618; bi <= nbr_circles; ++bi) {
      angle = i * TWO_PI / nbr_circles;
      x = cy + cos(angle) * lg_rad;
      y = cx + sin(angle) * lg_rad;
      noStroke();
      fill(chiaro);
      ellipse(x*bi, y/bi, bi, moire*bi);
    }
  }
}
function cerchio_02(){
  //spessoreLinea(1, 7); nbr_circles(35, 140)
  strokeWeight(spessoreLinea);
  stroke(chiaro);
  strokeCap(ROUND);  
  lg_rad = (height-28)/2; // abbondanza linee vs cerchio centrale
  for (var i = 1; i <= nbr_circles; ++i) {
    var angle = i * TWO_PI / nbr_circles;
    var x = cx + cos(angle) * lg_rad;
    var y = cy + sin(angle) * lg_rad;
    line(x, y, cx-lg_rad, cy);
  }
}
function cerchio_03(){
  //moire(10,30)
  var spacer = moire*1.2;
  noStroke();
  fill(chiaro);
  for (var x = 0; x <= lg_diam+spacer; x+=spacer) {
    for (var y = 0; y <= lg_diam+spacer; y+=spacer) {
      ellipse(y-lg_rad, x-lg_rad, moire, moire);
    }
  }
}
function cerchio_04(){
  //poligono(1,7); moire(15, 30);
  var spacer = moire*2-poligono/10;
  noStroke();
  fill(chiaro);
  for (var x = 0; x <= lg_diam+spacer; x+=spacer) {
    for (var y = 0; y <= lg_diam+spacer; y+=spacer) {
      polygon(y-lg_rad, x-lg_rad, moire, poligono);
    }
  }
}
function cerchio_05(){
  var spacer = moire*2;
  fill(chiaro);
  noStroke();
  for (var x = 0; x <= lg_diam; x+=spacer) {
    for (var y = 0; y <= lg_diam; y+=spacer) {
      var centro = lg_diam/x
      star(x-lg_rad+moire/2, y-lg_rad+moire/2, poligono, moire+spacer/2, poligono)
    }
  }
}
function cerchio_06(){
    var lg_circ = PI * lg_diam;
  
    for (var i = 0.5; i <= nbr_circles*2; ++i) {
      var angle = i * TWO_PI / nbr_circles;
      var x = cx + sin(angle) * lg_diam;
      var y = cy + sin(angle) * lg_diam;
      stroke(chiaro);
      strokeWeight(0.1*i);
      noFill();
      quad(x, cx, cy, y, -x, -cx, -cy, -y);
    }
}
function cerchio_01(){
  var spacer = moire*2;
  fill(chiaro);
  noStroke();
  for (var x = 0; x <= lg_diam; x+=spacer) {
    for (var y = 0; y <= lg_diam; y+=spacer) {
      var centro = lg_diam/x
      star(x-lg_rad+moire/2, y-lg_rad+moire/2, poligono, moire+spacer/2, poligono)
    }
  }
}


function polygon(x, y, radius, npoints) {
    var angle = TWO_PI / npoints;
    beginShape();
    for (var a = 0; a < TWO_PI; a += angle) {
      var sx = x + cos(a) * radius;
      var sy = y + sin(a) * radius;
      vertex(sx, sy);
    }
    endShape(CLOSE);   
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
  }
  endShape(CLOSE);
}

function perlini(x, y){
  var separator = width/18;
  stroke(scuro, 60);
  fill(scuro, 60);
  ellipse(x, y, 3, 3);
  
  function dragSegment(i, xin, yin) {
    dx = mouseX - x;
    dy = mouseY - y;
    angle2 = atan2(dy, dx);
    segment(x, y, angle2);
  }
  function segment(x, y, a) {
    push();
    translate(x, y);
    rotate(a);
    line(0, 0, 15, 0);
    pop();
  }
  dragSegment(x, mouseX, mouseY);
}
function pelini_02(){
  var bcx = width/2; // x centro del cerchio
  var bcy = height/2; // y centro del cerchio
  for (var bi = 1; bi <= 7; ++bi) {
    var angle = bi * PI / 60*2;
    var bx = bcx + cos(angle) * height/1.618;
    var by = bcy + sin(angle) * height/1.618;
    fill(chiaro)
    perlini(bx, by);
  }
}
function mousePressed() {
    retiniRandom = int(random(1, 7));
    spessoreLinea = retiniRandom;
    //retiniRandom=1;
    if(retiniRandom == 1){
      poligono=int(random(3,8));
      nbr_circles=int(random(14, 28));
    }else if(retiniRandom == 2){
      spessoreLinea =int(random(3, 7));
      nbr_circles=int(random(35, 140));      
    }else if(retiniRandom == 3){
      moire=int(random(20, 100));
    }else if(retiniRandom == 4){
      poligono=int(random(3,8));
      moire=int(random(20, 100));
      
    }else if(retiniRandom == 5){
      poligono=int(random(3,8));
      spaziatura=int(random(spessoreLinea*10,spessoreLinea*20));
      nbr_circles=int(random(14, 28));
    }else if(retiniRandom == 6){
      spessoreLinea =int(random(3, 7));
      nbr_circles=int(random(30, 60));
      moire=int(random(10, 20));
    }else if(retiniRandom == 7){
      poligono=int(random(3,8));
      spessoreLinea=int(random(3,8));
  }
}