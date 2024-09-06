class EnemyBullet extends Bullet {

  constructor(ctx,x,y,vy) {
    super(ctx);
    this.x = x;
    this.y = y;
    this.w = 30;
    this.h = 30;
    this.vx = -8;
    this.vy = vy;

    this.img = new Image;
    this.img.src = ["assets/src/images/enemyBullet.png",];
    this.img.frames = 7;
    this.img.frameIndex = 0;
  }

  draw() {
    super.draw();
}

  animate() {
    super.animate();
  }

  move() {
    this.y += this.vy;
    this.x += this.vx;
  }
  
  isVisible() {
    super.isVisible();
  }

}