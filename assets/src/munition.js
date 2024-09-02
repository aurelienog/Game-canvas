class Munition {

  constructor(ctx, x) {
    this.ctx = ctx;

    this.x = 10 + x * 50;
    this.y = 60;
    this.w = 40;
    this.h = 30;

    this.img = new Image();
    this.img.src = "assets/src/images/fire.png"
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