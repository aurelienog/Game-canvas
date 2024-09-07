const canvas = document.getElementById('game');
const ctx = canvas.getContext("2d");
const h2 = document.getElementById('blink')


const game = new Game(ctx);

document.onkeydown = () => {
  h2.style.display = 'none';
  
  canvas.style.display = 'block';
  
  game.start();
}

