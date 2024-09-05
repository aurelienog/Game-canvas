class Item {

  constructor(ctx) {
    this.ctx = ctx;

    this.x = 800;
    this.y = 250 + Math.random() * 150;
    this.w = 30;
    this.h = 30;
    this.vx = 0;

    this.img = new Image();
    this.img.src = "assets/src/images/seal.png";
  }

  draw() {
    this.ctx.drawImage(
      this.img,
      this.x,
      this.y,
      this.w,
      this.h
    )
  }

  move(x) {
    
    this.vx = x;
    this.x += this.vx;
  }

  isVisible() {
    return this.x + this.w >= 0 && this.x <= this.ctx.canvas.width;
    }

}