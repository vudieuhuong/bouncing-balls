/*
Week 10 - Class
*/
let myBall;
let balls = [];

function setup() {
  createCanvas(400, 400);
  
  // for (let i=0; i<10; i++){
  //   balls[i] = new Ball(random(0, width), random(0, height));
  // }
}

function draw() {
  background(220);
  
   for (let i=0; i<balls.length; i++){
     balls[i].drawBall();
     balls[i].moveBall();
     balls[i].bounceBall();
  }
}

function mousePressed(){
  balls.push(new Ball(mouseX, mouseY));
}