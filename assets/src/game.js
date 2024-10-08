class Game {

  constructor(ctx) {
    this.ctx = ctx;

    this.bg = new Background(ctx);
    this.interval = null;
    this.finalInterval = null;
    this.tick = 0;
    this.timerTick = 0
    this.sec = 0;
    this.min = 0;

    this.player = new Player(ctx);
    this.items = [];
    this.geo = 0;
    this.munitionCount = 0;

    this.enemies = [];
    this.tickEnemy1 = 0;
    this.tickEnemy2 = 0;
    this.tickEnemy3 = 0;

    this.killedCount = 0;

    this.gameAudio = new Audio("assets/src/music/gameAudio.mp3");
    this.gameAudio.volume = 0.01;
    
    this.gameOverAudio = new Audio("assets/src/music/gameOver.mp3");
    this.gameAudio.volume = 0.01;

    this.itemAudio = new Audio ("assets/src/music/item.mp3")
    this.itemAudio.volume = 0.03;
  }

  start() {
    this.gameAudio.loop = true;
    this.gameAudio.play();
    this.stop();
    this.initListeners();
    this.interval = setInterval(() => {
      this.timer()
      this.clear();
      this.draw();
      this.move();
      this.addEnemies();
      this.addItems();
      this.addMunitions();
      this.checkCollision();
      this.checkBulletsCollision();
      this.checkCollectItem();
      
    }, 1000 / 60);

  }

  
  draw() {
    this.bg.draw();
    this.player.draw(this.killedCount) ;
    this.enemies.forEach(enemy => enemy.draw()); 
    this.killedCount < 30 ? this.items.forEach(item => item.draw()) : false; 
    this.timer()

  }

  timer() {

    this.killedCount < 30 ? this.timerTick++ : false;
    
    let minutes = `0${this.min}`;
    let secondes = "";
    
    if (this.timerTick >= 100) {
      this.timerTick = 0
      this.sec++; 
    }

    if (this.sec >= 60) {
      this.min++;
      this.sec = 0;
    } else if (this.sec <= 9) {
      secondes = `0${this.sec}`;
    } else {secondes = this.sec}
    
    
    this.ctx.fillStyle = "white";

    if (this.killedCount < 30) {
      this.ctx.font = "15px serif";
      this.ctx.fillText(minutes, 748, 55)
      this.ctx.fillText(":", 764, 55)
      this.ctx.fillText(secondes,770, 55)
    } else {
            this.ctx.font = "90px serif";
      this.ctx.fillText(minutes, 300, 150)
      this.ctx.fillText(":", 390, 150)
      this.ctx.fillText(secondes,420, 150)
    }


  }

  move() {
    this.player.move() ;
    this.enemies.forEach(enemy => enemy.move());
    const x = this.player.vx * -1;
    this.items.forEach(item => item.move(x));
    this.bg.move(x);
  }

  addEnemies() {
    this.tickEnemy1++;
    this.tickEnemy2++;
    this.tickEnemy3++;
    let indice = Math.floor(Math.random() * 21);
    const p = this.player;
    
    switch (true) {
      case p.lifeBar.length >= 7 && this.tickEnemy3 >= 130:
        this.enemies.push(new Enemy(ctx, indice));
        this.tickEnemy3 = Math.random() * 100;
        break;
      case p.lifeBar.length >= 5 && this.tickEnemy2 >= 150:
        this.enemies.push(new Enemy(ctx, indice));
        this.tickEnemy2 = Math.random() * 100;
        break;
      case p.lifeBar.length <5 && this.tickEnemy1 >= 180:
        this.enemies.push(new Enemy(ctx, indice));
        this.tickEnemy1 = Math.random() * 100;
        break;
    }

  }

  addItems() {
    const p = this.player;
    this.tick++;
    if (this.tick >= 200 && p.lifeBar.length >= 5) {
      this.items.push(new Item(ctx));
      this.tick = Math.random() * 100;
    }
  }

  addMunitions() {
    const p = this.player;

    if (this.munitionCount >= 1) {
      const x = p.munitions.length;
      this.itemAudio.play();
      
      if (p.munitions.length<=2 && p.lifeBar.length >= 5) {
        p.munitions.push(new Munition(ctx, x));
        this.itemAudio.play();
        this.munitionCount = 0;
      } else { this.munitionCount = 0}     
    }
  
  }

  stop() {
    clearInterval(this.interval)
    //TODO cortar this.initListeners();
  }
  
  

  checkBulletsCollision() {
    const p = this.player;
      
    this.enemies.forEach((enemy) => {
      const b = enemy.enemiesBullets;
      b.forEach((bullet,y) => {
        const colX = (bullet.x + bullet.w) >= this.player.x && bullet.x <= (this.player.x + this.player.w);
        const colY = (bullet.y + bullet.h) >= this.player.y && bullet.y <= (this.player.y + this.player.h);
      
        if (colX && colY) {
          p.lifeBar.splice(p.lifeBar.length - 1, 1);
          b.splice(y, 1);
          if (p.lifeBar.length === 0) {
            this.gameOver();
          }
        }

        p.bullets.forEach((bllt, i) => {
        
          const colBX = (bullet.x + bullet.w) >= bllt.x && bullet.x <= (bllt.x + bllt.w);
          const colBY = (bullet.y + bullet.h) >= bllt.y && bullet.y <= (bllt.y + bllt.h);

            if (colBX && colBY) {
              b.splice(y, 1);
              p.bullets.splice(i, 1);
            }        
        })
      })
    })
    
  }

  checkCollision() {
    const p = this.player;
    const x = p.lifeBar.length; 
    
    this.enemies.forEach((enemy, i) => {
    
    const enemyType = enemy.enemyTypes[enemy.indice];
    
    
    const colX = (p.x + p.w) >= enemyType.x && p.x <= (enemyType.x + enemyType.w);
    const colY = (p.y + p.h) >= enemyType.y && p.y <= (enemyType.y + enemyType.h);
    
    if (colX && colY) {
      if (p.vy > enemyType.vy && p.lifeBar.length < 5) {
        this.enemies.splice(i, 1);
        p.lifeBar.push(new Life(ctx, x));
        this.killedCount++;
        if (this.killedCount >= 30) {
          this.finish()
        }
        
      } else {
        p.lifeBar.splice(p.lifeBar.length - 1, 1);
        this.enemies.splice(i, 1);
        if (p.lifeBar.length === 0) {
          this.gameOver();
        }
      }
        
    }

      p.bullets.forEach((bullet, y) => {

        this.enemies.forEach((enemy, i) => {

          const enemyType = enemy.enemyTypes[enemy.indice];
    
          const colX = (bullet.x + bullet.w) >= enemyType.x && bullet.x <= (enemyType.x + enemyType.w);
          const colY = (bullet.y + bullet.h) >= enemyType.y && bullet.y <= (enemyType.y + enemyType.h);

          if (colX && colY) {
            this.enemies.splice(i, 1);
            p.bullets.splice(y, 1);
            this.killedCount++;
            if (this.killedCount >= 30) {
          this.finish()
        }
            if (p.lifeBar.length < 9) {
              p.lifeBar.push(new Life(ctx, x));
              
            } 
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
        this.geo++;
        this.munitionCount++;
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

    const p = this.player;

    p.bullets = p.bullets.filter(bullet => bullet.isVisible())
    
      this.ctx.clearRect(
      0,
      0,
      this.ctx.canvas.width,
      this.ctx.canvas.height,
    )

  } 

  finish() {
    this.stop();
    this.finalInterval = setInterval(() => {
      this.clear();
      this.draw();
      this.player.finalMove();
      this.enemies.forEach(enemy => enemy.move());
    }, 1000 / 60);

  }

  
  gameOver() {
    this.stop();
    this.gameAudio.pause(); 
    this.gameOverAudio.play();
    this.ctx.font = "60px serif";
    this.ctx.fillStyle = "white";
    this.ctx.fillText('GAME OVER', 200, 250);
  }


  initListeners() {

    document.onkeydown = (e) => {
      if (this.killedCount < 30) {
        this.player.onKeyDown(e.keyCode);
      }
      
    }

    document.onkeyup = (e) => {
      if (this.killedCount < 30) {
        this.player.onKeyUp(e.keyCode);
      }
      
    }
  }



}