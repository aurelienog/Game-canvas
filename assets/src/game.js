class Game {

  constructor(ctx) {
    this.ctx = ctx

    this.bg = new Background(ctx);
    this.interval = null;
    this.tick = 0;
    this.tickEnemy = 0;
    this.player = new Player(ctx);
    this.enemies = [];
    this.items = [];
    this.geo = 0;
    this.munitionCount = 0
  }

  start() {
    this.stop()
    this.initListeners();
    
    this.interval = setInterval(() => {
    this.clear();
    this.draw();
    this.move();
    this.addEnemies();
    this.addItems();
    this.addMunitions();
    this.checkCollision();
    this.checkCollectItem();
      
    }, 1000/60)

  }

  
  draw() {
    this.bg.draw();
    this.player.draw() ;
    this.enemies.forEach(enemy => enemy.draw()); 
    this.items.forEach(item => item.draw()); 
    
    
  
  }

  move() {
    this.player.move() ;
    this.enemies.forEach(enemy => enemy.move());
    
    const x = this.player.vx * -1;
    this.items.forEach(item => item.move(x));
    this.bg.move(x);
      
  }

  addEnemies() {
    this.tickEnemy++;
    if (this.tickEnemy >= 300) {
      this.enemies.push(new Enemy(ctx))
      this.tickEnemy = Math.random() * 100;
    }

  }

  addItems() {
    const p = this.player;
    this.tick++;
    if (this.tick >= 200 && p.lifeBar.length >= 3) {
      this.items.push(new Item(ctx))
      this.tick = Math.random() * 100;
    }
  }

  addMunitions() {
    const p = this.player;

    if (this.munitionCount >= 1) {
      const x = p.munitions.length
      if (p.munitions.length<=2 && p.lifeBar.length >= 3) {
      p.munitions.push(new Munition(ctx, x))
      this.munitionCount = 0
      } else { this.munitionCount = 0}     
    }
  
  }

  stop() {
    clearInterval(this.interval)
    //TODO cortar this.initListeners();
  }

  checkCollision() {
    const p = this.player;
    const x = p.lifeBar.length 
    
    this.enemies.forEach((enemy, i) => {
      const colX = (p.x + p.w) >= enemy.x && p.x <= (enemy.x + enemy.w) ;
      const colY = (p.y + p.h) >= enemy.y && p.y <= (enemy.y + enemy.h) ;

      if (colX && colY) {

        if (p.vy > enemy.vy && p.lifeBar.length <3) {
          this.enemies.splice(i, 1)
          p.lifeBar.push(new Life(ctx, x))
        } else {
          p.lifeBar.splice(p.lifeBar.length -1, 1);
          this.enemies.splice(i, 1);
        if (p.lifeBar.length === 0) {
          this.gameOver()
        }

        }
        
        
      }

      p.bullets.forEach((bullet, y) => {

        this.enemies.forEach((enemy, i) => {
          const colX = (bullet.x + bullet.w) >= enemy.x && bullet.x <= (enemy.x + enemy.w);
          const colY = (bullet.y + bullet.h) >= enemy.y && bullet.y <= (enemy.y + enemy.h);

          if (colX && colY) {
            this.enemies.splice(i, 1);
            p.bullets.splice(y, 1);
            p.lifeBar.push(new Life(ctx, x))
          }
        })
        })
    })

  }

    checkCollectItem() {
    const p = this.player;

    this.items.forEach((item,i)  => {
      const colX = (p.x + p.w) >= item.x && p.x <= (item.x + item.w) ;
      const colY = (p.y + p.h) >= item.y && p.y <= (item.y + item.h) ;

      if (colX && colY) {
        this.items.splice(i, 1);
        this.geo++
        this.munitionCount++
      }
    })

  }
  
  clear(){
    this.enemies = this.enemies.filter(enemy => enemy.isVisible())
    
      this.ctx.clearRect(
      0,
      0,
      this.ctx.canvas.width,
      this.ctx.canvas.height,
    )

    this.items = this.items.filter(item => item.isVisible())
    
      this.ctx.clearRect(
      0,
      0,
      this.ctx.canvas.width,
      this.ctx.canvas.height,
    )

    const p = this.player

    p.bullets = p.bullets.filter(bullet => bullet.isVisible())
    
      this.ctx.clearRect(
      0,
      0,
      this.ctx.canvas.width,
      this.ctx.canvas.height,
    )

  } 

  
  gameOver() {
    this.stop();
    this.ctx.font = "60px serif";
    this.ctx.fillText('GAME OVER', 200, 250)
  }


  initListeners() {

    document.onkeydown = (e) => {
      this.player.onKeyDown(e.keyCode);
    }

    document.onkeyup = (e) => {
      this.player.onKeyUp(e.keyCode);
    }
  }



}