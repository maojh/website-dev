function setup() {
  var myCanvas = createCanvas(windowWidth, windowHeight);
  myCanvas.parent('myContainer');
  background(255);
  for(var i = 0; i <= 100; i++) {
    fill(random(255), random(255));
    ellipse(random(width), random(height), 50, 50);
  }

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
