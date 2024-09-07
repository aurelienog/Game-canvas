class Bullet {

  constructor(ctx, x, y, vy) {
    this.ctx = ctx;

    this.x = x;
    this.y = y;
    this.w = 45;
    this.h = 20;
    this.vx = 2;
    this.vy = vy;
    
    this.tick = 0;
    this.img = new Image();
    this.img.src = "assets/src/images/shoot.png";
    this.img.frames = 5;
    this.img.frameIndex = 0;
  }

  draw() {

    this.ctx.drawImage(
      this.img,
      this.img.frameIndex * this.img.width / this.img.frames, //source image x
      0, //source image y
      this.img.width / this.img.frames, //source image width
      this.img.height, //source image height
      this.x,
      this.y,
      this.w,
      this.h
    );
    this.animate();
  }
    
    
  animate() {
    
    this.tick++;
    if (this.tick >= 20) {
        this.img.frameIndex++
        this.tick = 0;
    }
    
    if (this.img.frameIndex >= 4)
      this.img.frameIndex = 0;
  }

  move() {
    this.x += this.vx;
    this.y += this.vy;
  }
  
  isVisible() {
    return this.x + this.w >= 0 && this.x <= this.ctx.canvas.width;
    }


}