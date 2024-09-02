class Player {

  constructor(ctx) {
    this.ctx = ctx;

    this.x = 50;
    this.y = 350;
    this.w = 90;
    this.h = 70;
    this.vx = 0;
    this.vy = 0;
    this.ax = 0;
    this.ay = 0;
    this.floor = 400;
    this.tick = 0;
    this.bullets = [];
    this.munitions = [];
    this.lifeBar = [new Life(ctx, 0)];
    

    this.img = new Image();
    this.img.src = "assets/src/images/move.png"
    this.img.frames = 3;
    this.img.frameIndex = 0;

    
    this.winImg = new Image();
    this.winImg.src = "assets/src/images/secondMove.png";
    this.winImg.frames = 4;
    this.winImg.frameIndex = 0; 

  }

  draw() {

    let x = this.img;
    let y = this.img.frames;
    let z = this.img.frameIndex;
    let h = 70

    if (this.lifeBar.length >= 3) {
      x = this.winImg;
      y = this.winImg.frames
      z = this.winImg.frameIndex
      h = 90
    } 
      

  this.ctx.drawImage(
      x,
      z * x.width / y, //source image x
      0, //source image y
      x.width / y, //source image width
      x.height, //source image height
      this.x,
      this.y,
      this.w,
      h
  )
    this.animate();

    this.bullets.forEach(bullet => bullet.draw());
    this.munitions.forEach(mun => mun.draw());
    this.lifeBar.forEach(life => life.draw());  

  }

  animate() {

    
    this.tick++;

    if (this.lifeBar.length >= 3 && this.tick >= 20) {
    
      this.winImg.frameIndex++
      this.tick = 0;

      if (this.winImg.frameIndex >= (this.winImg.frames -1)) {
      this.winImg.frameIndex = 0
      }
    
    } else if (this.lifeBar.length <= 3 && this.tick >= 20) {

        this.img.frameIndex++
        this.tick = 0;

        if (this.img.frameIndex >= (this.img.frames -1)) {
        this.img.frameIndex = 0
        }
      
        if (this.vy > 0) {
          this.img.src = "assets/src/images/atterizar.png";
        } else { this.img.src = "assets/src/images/move.png" }
      
      
    }
    

    
  }

  move() {

    this.vx += this.ax
    this.vy += this.ay
    this.y += this.vy

    if (this.lifeBar.length < 3) {
      
      this.ay = 0.5;

      if (this.x <= 0) {
        this.x = 0;
        this.vx = 0;
      }

      if (this.x + this.w >= this.ctx.canvas.width) {
        this.vx = 0;
        this.x = this.ctx.canvas.width - this.w; 
      }

      if (this.y >= this.floor) {
        this.vy = 0;
        this.y = this.floor;
      } 

    } else {
      
      this.ay = 0;
      
      if (this.x <= 0) {
        this.x = 0;
        this.vx = 0;
      }

      if (this.x + this.w >= this.ctx.canvas.width) {
        this.vx = 0;
        this.x = this.ctx.canvas.width - this.w; 
      }

      if (this.y + this.h >= this.ctx.canvas.height) {
        this.vy = 0;
        this.y = this.ctx.canvas.height - this.h;
      } 

      if (this.y <= 0) {
        this.vy = 0;
        this.y = 0;
      } 


    }


    this.bullets.forEach(bullet => bullet.move())
  }


  shoot() {
    
    if (this.munitions.length > 0 && this.lifeBar.length >= 3) {
      const x = this.x + this.w;
      const y = this.y + (this.h / 2);
      const bullet = new Bullet(this.ctx, x, y);
      this.bullets.push(bullet);
      this.munitions.splice(this.munitions.length -1, 1)
    }
    
  }

  jump() {
    if (this.y === this.floor && this.lifeBar.length < 3) {
      this.vy = -15;
      this.vy += this.ay
    }
  }

  onKeyDown(key) {

    switch(key) {
      case RIGHT:
        this.vx = 2
        break;
      case LEFT:
        this.vx = -2
        break;
      case DOWN:
        this.vy = 2;
        break;
      case SPACE:
        this.jump();
        break;
      case UP:
        this.vy = -2;
        break;
      case CTRL:
        this.shoot();
    }
  }

  onKeyUp(key) {

    switch(key) {
      case RIGHT:
      case LEFT:
        this.vx = 0
        break;
      case DOWN:
      case UP:
        this.vy = 0;
    }
  }

  
}

