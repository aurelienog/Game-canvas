const canvas = document.getElementById('game');
const ctx = canvas.getContext("2d")

const game = new Game(ctx);

const startBtn = document.getElementById('start-button');
startBtn.onclick = () => {
  canvas.style.display = 'block';
  game.start();
}

