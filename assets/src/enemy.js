class Enemy {

  constructor(ctx, indice) {
    this.ctx = ctx;
    this.indice = indice;

    this.tick = 0;

    this.mossFlyImg = new Image()
    this.mossFlyImg.src = ["assets/src/images/enemies/Mossfly.png",]

    this.aspidImg = new Image()
    this.aspidImg.src = ["assets/src/images/enemies/Aspid.png",]

    this.vengeFlyImg = new Image()
    this.vengeFlyImg.src = ["assets/src/images/enemies/Vengefly.png",]

    this.huskImg = new Image()
    this.huskImg.src = ["assets/src/images/enemies/Husk.png",]

    this.massiveMossImg = new Image()
    this.massiveMossImg.src = ["assets/src/images/enemies/MassiveMoss.png",]

    this.sentryImg = new Image()
    this.sentryImg.src = ["assets/src/images/enemies/Sentry.png",]

    this.spinyImg = new Image()
    this.spinyImg.src = ["assets/src/images/enemies/Spiny.png",]

    this.mossCreepImg = new Image()
    this.mossCreepImg.src = ["assets/src/images/enemies/Mosscreep.png",]

    this.mosskinImg = new Image()
    this.mosskinImg.src = ["assets/src/images/enemies/Mosskin.png",]

    this.balloonImg = new Image()
    this.balloonImg.src = ["assets/src/images/enemies/Balloon.png",]

    this.crystallisedHuskImg = new Image()
    this.crystallisedHuskImg.src = ["assets/src/images/enemies/CrystallisedHusk.png",]

    this.crystalCrawlerImg = new Image()
    this.crystalCrawlerImg.src = ["assets/src/images/enemies/CrystalCrawler.png",]

    this.crystalHunterImg = new Image()
    this.crystalHunterImg.src = ["assets/src/images/enemies/CrystalHunter.png",]

    this.mistakeImg = new Image()
    this.mistakeImg.src = ["assets/src/images/enemies/Mistake.png",]

    this.gruzzerImg = new Image()
    this.gruzzerImg.src = ["assets/src/images/enemies/Gruzzer.png",]

    this.flukefeyImg = new Image()
    this.flukefeyImg.src = ["assets/src/images/enemies/Flukefey.png",]

    this.noskImg = new Image()
    this.noskImg.src = ["assets/src/images/enemies/Nosk.png",]


    this.enemyTypes = [

    {
      src : this.mossFlyImg,
      frames: 4,
      frameIndex : 0,
      x : 800,
      y : 150+ Math.random() * 80,
      w : 60,
      h : 60,
      vx: -6,
      vy: 0,
      ax: 0,
      ay: 0
    },
    
      {
      src : this.mossCreepImg,
      frames: 4,
      frameIndex : 0,
      x : 800,
      y : 350+ Math.random() * 50,
      w : 60,
      h : 60,
      vx: -6,
      vy: 0,
      ax: 0,
      ay: 0
      },
    
      {
      src : this.gruzzerImg,
      frames: 4,
      frameIndex : 0,
      x : 800,
      y : 250+ Math.random() * 80,
      w : 70,
      h: 70,
      vx: -4,
      vy: 0,
      ax: 0,
      ay: 0
      },
    
      {
      src : this.flukefeyImg,
      frames: 3,
      frameIndex : 0,
      x : 800,
      y : 250+ Math.random() * 80,
      w : 70,
      h: 70,
      vx: -6,
      vy: 0,
      ax: 0,
      ay: 0
    },

    {
      src : this.aspidImg,
      frames: 4,
      frameIndex : 0,
      x : 800,
      y : 200+ Math.random() * 80,
      w : 60,
      h: 60,
      vx: -4,
      vy: 0,
      ax: 0,
      ay: 0
    },

    {
      src : this.huskImg,
      frames: 5,
      frameIndex : 0,
        x : 800,
        y : 350+ Math.random() * 50,
        w : 60,
        h: 60,
        vx: -5,
      vy: 0,
      ax: 0,
      ay: 0
      },

      {
      src : this.crystallisedHuskImg,
      frames: 6,
      frameIndex : 0,
        x : 800,
        y : 350+ Math.random() * 50,
        w : 80,
        h: 80,
        vx: -5,
      vy: 0,
      ax: 0,
      ay: 0
      },

      {
      src : this.crystalCrawlerImg,
      frames: 4,
      frameIndex : 0,
      x : 800,
      y : 350+ Math.random() * 50,
      w : 60,
      h : 65,
      vx: -4,
      vy: 0,
      ax: 0,
      ay: 0
      },
    
      {
      src : this.crystalHunterImg,
      frames: 4,
      frameIndex : 0,
      x : 800,
      y : 150+ Math.random() * 80,
      w : 70,
      h: 70,
      vx: -4,
      vy: 0,
      ax: 0,
      ay: 0
    },

      {
      src : this.balloonImg,
      frames: 3,
      frameIndex : 0,
        x : 800,
        y : 40+ Math.random() * 50,
        w : 60,
        h: 60,
        vx: -4,
      vy: 0,
      ax: 0,
      ay: 0
      },

      {
      src : this.mistakeImg,
      frames: 7,
      frameIndex : 0,
        x : 800,
        y : 380+ Math.random() * 50,
        w : 70,
        h: 60,
        vx: -4,
      vy: 0,
      ax: 0,
      ay: 0
      },

      {
      src : this.mosskinImg,
      frames: 10,
      frameIndex : 0,
        x : 800,
        y : 350+ Math.random() * 50,
        w : 60,
        h: 70,
        vx: -5,
      vy: 0,
      ax: 0,
      ay: 0
      },
    
    {
      src : this.spinyImg,
      frames: 6,
      frameIndex : 0,
        x : 800,
        y : 350+ Math.random() * 50,
        w : 60,
        h: 60,
        vx: -5,
      vy: 0,
      ax: 0,
      ay: 0
    },

    {
      src : this.vengeFlyImg,
      frames: 3,
      frameIndex : 0,
        x : 800,
        y : 50+ Math.random() * 50,
        w : 90,
      h: 70,
      vx: -4,
      vy: 0,
      ax: 0,
      ay: 0
      },

      
    {
      src : this.sentryImg,
      frames: 7,
      frameIndex : 0,
        x : 800,
        y : 350+ Math.random() * 50,
        w : 100,
      h: 120,
      vx: -6,
      vy: 0,
      ax: 0,
      ay: 0
      },
      
    {
      src : this.massiveMossImg,
      frames: 4,
      frameIndex : 0,
        x : 800,
        y : 380+ Math.random() * 50,
        w : 130,
      h: 70,
      vx: -4,
      vy: 0,
      ax: 0,
      ay: 0
      },
    
        {
      src : this.noskImg,
      frames: 6,
      frameIndex : 0,
        x : 800,
        y : 380+ Math.random() * 50,
        w : 130,
      h: 70,
      vx: -6,
      vy: 0,
      ax: 0,
      ay: 0
      },
    ]

  }

  draw() {

    const enemyType = this.enemyTypes[this.indice];
    
    this.ctx.drawImage(
      enemyType.src,
      enemyType.frameIndex * enemyType.src.width / enemyType.frames, // source image x
      0, // source image y
      enemyType.src.width / enemyType.frames, // source image width
      enemyType.src.height, // source image height
      enemyType.x,
      enemyType.y,
      enemyType.w,
      enemyType.h
    );
    
      this.animate()

  }

  animate() {

    const enemyType = this.enemyTypes[this.indice];
    this.tick++

    if (this.tick >= 20) {
      enemyType.frameIndex++
      this.tick = 0
    }

    if (enemyType.frameIndex >= enemyType.frames -1) {
      enemyType.frameIndex = 0;
    }
  }

  move() {
    const enemyType = this.enemyTypes[this.indice];
    enemyType.vy += enemyType.ay;
    enemyType.vx += enemyType.ax;
    enemyType.x += enemyType.vx;
    enemyType.y += enemyType.vy;

  }

  isVisible() {

  const enemyType = this.enemyTypes[this.indice];

  // Verifica que enemyType no sea undefined
  if (!enemyType) {
    console.error(`Imagen no encontrada para el índice: ${this.indice}`);
    return false;
  }

  // Ahora es seguro acceder a las propiedades de enemyType
  return (enemyType.x + enemyType.w) >= 0 && enemyType.x <= this.ctx.canvas.width;
}

}