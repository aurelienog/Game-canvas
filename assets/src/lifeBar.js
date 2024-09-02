class Life {

  constructor(ctx, x) {
    this.ctx = ctx;

    this.x = 10 + x * 20;
    this.y = 10;
    this.w = 15;
    this.h = 25;

    this.img = new Image();
    this.img.src = "assets/src/images/life.png"
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
}