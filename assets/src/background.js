class Background {

  constructor(ctx) {
    this.ctx = ctx
    
    this.w = this.ctx.canvas.width;
    this.h = this.ctx.canvas.height;
    this.x = 0;
    this.y = 0;
    this.vx = 0;
    this.img = new Image();
    this.img.src = 'https://img.itch.zone/aW1nLzIzMjI1NTEucG5n/315x250%23c/2KUTNe.png';

  }

  draw() {
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    this.ctx.drawImage(this.img, this.x + this.w, this.y, this.w, this.h);

  }

  move(x) {
    this.x += x
    
    if (this.x <= -this.ctx.canvas.width) {
      this.x = 0;
    }
  
  }

}

