class Enemy {

  constructor(ctx) {
    this.ctx = ctx;

    this.x = 800;
    this.y = 400+ Math.random() * 50
    this.w = 50;
    this.h = 70;
    this.vx = -4;
    this.vy = 0;
    this.ax = 0;
    this.ay = 0;
    this.tick = 0;
  }

  draw() {
      this.ctx.fillRect(this.x, this.y, this.w, this.h) 
  }

  move() {
    this.vy += this.ay
    this.vx += this.ax
    this.x += this.vx
    this.y += this.vy
  
}

  isVisible() {
    return this.x + this.w >= 0 && this.x <= this.ctx.canvas.width;
    }

}