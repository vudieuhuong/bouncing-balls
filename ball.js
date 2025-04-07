class Ball{
  constructor(x, y, size){
    this.x = x;
    this.y = y;
    this.dx = 2;
    this.dy = 3;
  }
  
  drawBall(){
    fill(0, 255, 0);
    circle(this.x, this.y, 50);
  }
  
  moveBall(){
    this.x = this.x + this.dx;
    this.y = this.y + this.dy;
  }
  
  bounceBall(){
    if (this.x > width || this.x < 0){
    this.dx = this.dx * -1;
  }
  if (this.y > height || this.y < 0){
    this.dy = this.dy * -1;
  }
  }
}