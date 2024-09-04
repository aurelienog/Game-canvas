class Enemy {

  constructor(ctx, indice) {
    this.ctx = ctx;
    this.indice = indice;

    this.tick = 0;

    this.mossFlyImg = new Image()
    this.mossFlyImg.src = ["assets/src/images/Mossfly.png",]

    this.aspidImg = new Image()
    this.aspidImg.src = ["assets/src/images/Aspid.png",]

    this.vengeFlyImg = new Image()
    this.vengeFlyImg.src = ["assets/src/images/Vengefly.png",]

    this.huskImg = new Image()
    this.huskImg.src = ["assets/src/images/Husk.png",]

    this.typeEnemy = [

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
      src : this.aspidImg,
      frames: 4,
      frameIndex : 0,
      x : 800,
      y : 150+ Math.random() * 80,
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
      src : this.vengeFlyImg,
      frames: 3,
      frameIndex : 0,
        x : 800,
        y : 350+ Math.random() * 50,
        w : 90,
      h: 70,
      vx: -4,
      vy: 0,
      ax: 0,
      ay: 0
      }
    ]

  }

  draw() {

    const imgObj = this.typeEnemy[this.indice];
    
    this.ctx.drawImage(
      imgObj.src,
      imgObj.frameIndex * imgObj.src.width / imgObj.frames, // source image x
      0, // source image y
      imgObj.src.width / imgObj.frames, // source image width
      imgObj.src.height, // source image height
      imgObj.x,
      imgObj.y,
      imgObj.w,
      imgObj.h
    );
    
      this.animate()

  }

  animate() {

    const enemyObj = this.typeEnemy[this.indice];
    this.tick++

    if (this.tick >= 20) {
      enemyObj.frameIndex++
      this.tick = 0
    }

    if (enemyObj.frameIndex >= enemyObj.frames -1) {
      enemyObj.frameIndex = 0;
    }
  }

  move() {
    const enemyObj = this.typeEnemy[this.indice];
    enemyObj.vy += enemyObj.ay;
    enemyObj.vx += enemyObj.ax;
    enemyObj.x += enemyObj.vx;
    enemyObj.y += enemyObj.vy;

  }

  isVisible() {

  const enemyObj = this.typeEnemy[this.indice];

  // Verifica que imgObj no sea undefined
  if (!enemyObj) {
    console.error(`Imagen no encontrada para el índice: ${this.indice}`);
    return false;
  }

  // Ahora es seguro acceder a las propiedades de imgObj
  return (enemyObj.x + enemyObj.w) >= 0 && enemyObj.x <= this.ctx.canvas.width;
}

}