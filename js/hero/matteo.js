/*
title: PixelDawn
Author: Matteo Testa
Project: behance.com/mojh
*/

var width = 900;
var height = 500;

function setup() {
  createCanvas(900, 500);
  background(20);
  frameRate(60);

}

function draw() {
  var b=12;
  translate(width/1.3, height/1.4);

  for (var i = 0; i < 360; i++) {
     rotate(TWO_PI/300);
     //fill(0);
     strokeWeight(1);
     //gialli
     var dist = abs(randomGaussian()*i*b);
     stroke(dist, 250, 250);
     point(dist, 0);
     //rossi
     var dist2 = abs(randomGaussian()*i*b);
     stroke(140, dist2, 140);
     point(dist2, 0);
     //blue
     var dist3 = abs(randomGaussian()*i*b);
     stroke(255, 255, dist3);
     point(dist3, 0);
   }

   for (var i = 0; i < 140; i++) {
     rotate(-PI/100);
     //fill(0);
     var dist = abs(randomGaussian()*(i/1.7));
     stroke(250, 250, 250, 60);
     strokeWeight(2);
     line(0, 0, dist, 0);
   }


  console.log(frameCount);
  if (frameCount%500==0) {
   background(20);
  }
}
