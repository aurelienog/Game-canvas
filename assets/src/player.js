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

    
    this.secondImg = new Image();
    this.secondImg.src = "assets/src/images/move2.png";
    this.secondImg.frames = 4;
    this.secondImg.frameIndex = 0; 

    this.thirdImg = new Image();
    this.thirdImg.src = "assets/src/images/move3.png";
    this.thirdImg.frames = 4;
    this.thirdImg.frameIndex = 0; 

  }

  draw() {

    
    let x = this.img;
    let y = this.img.frames;
    let z = this.img.frameIndex;
    let h = 70;

    if (this.lifeBar.length >= 3 && this.lifeBar.length < 5) {
      x = this.secondImg;
      y = this.secondImg.frames;
      z = this.secondImg.frameIndex;
      h = 90;
    } else if (this.lifeBar.length >= 5) {
      x = this.thirdImg;
      y = this.thirdImg.frames;
      z = this.thirdImg.frameIndex;
      h = 90;
    } 
      

    this.ctx.drawImage(
      x,
      z * x.width / y, 
      0, 
      x.width / y, 
      x.height,
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

  switch (true) {
    
    case this.lifeBar.length >= 3 && this.lifeBar.length < 5 && this.tick >= 20:
      this.secondImg.frameIndex++;
      this.tick = 0;

      if (this.secondImg.frameIndex >= (this.secondImg.frames - 1)) {
        this.secondImg.frameIndex = 0;
      }

    break;

    case this.lifeBar.length <= 3 && this.tick >= 20:
      this.img.frameIndex++;
      this.tick = 0;

      if (this.img.frameIndex >= (this.img.frames - 1)) {
        this.img.frameIndex = 0;
      }

      if (this.vy > 0) {
        this.img.src = "assets/src/images/jump.png";
      } else {
        this.img.src = "assets/src/images/move.png";
      }
    break;

    case this.lifeBar.length >= 5 && this.tick >= 20:
      this.thirdImg.frameIndex++;
      this.tick = 0;

      if (this.thirdImg.frameIndex >= (this.thirdImg.frames - 1)) {
        this.thirdImg.frameIndex = 0;
      }
    break;
  }

}

  move() {

    this.vx += this.ax;
    this.vy += this.ay;
    this.y += this.vy;

    switch (true) {

      case this.lifeBar.length < 3:
      
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
        break;
        
      case this.lifeBar.length >=3:
      
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
        this.y = this.ctx.canvas.height - this.h -5;
      } 

      if (this.y <= 0) {
        this.vy = 0;
        this.y = 0;
      } 

    }


    this.bullets.forEach(bullet => bullet.move());
  }


  shoot() {

    if (this.munitions.length > 0 && this.lifeBar.length >= 3) {     

      const x = this.x + this.w;
      const y = this.y + (this.h / 2);
      const bullet = new Bullet(this.ctx, x, y);
      this.bullets.push(bullet);
      this.munitions.splice(this.munitions.length - 1, 1);

      

      
    } 
    
  }

  jump() {
    if (this.y === this.floor && this.lifeBar.length < 3) {
      this.vy = -15;
      this.vy += this.ay;
    }
  }

  onKeyDown(key) {

    switch(key) {
      case RIGHT:
        this.vx = 3;
        break;
      case LEFT:
        this.vx = -3;
        break;
      case DOWN:
        this.vy = 3;
        break;
      case SPACE:
        this.jump();
        break;
      case UP:
        this.vy = -3;
        break;
      case CTRL:
        this.shoot();
    }
  }

  onKeyUp(key) {

    switch(key) {
      case RIGHT:
      case LEFT:
        this.vx = 0;
        break;
      case DOWN:
      case UP:
        this.vy = 0;
    }
    
  }
  
}

