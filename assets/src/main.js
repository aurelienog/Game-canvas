const canvas = document.getElementById('game');
const ctx = canvas.getContext("2d");
const h2 = document.getElementById('blink')


document.onclick = () => {
  const audio = document.createElement("audio");
  audio.preload = "auto";
  audio.src = ("assets/src/music/mainMusic.mp3");
  audio.volume = 0.1;
  audio.play();
  document.body.appendChild(audio);
}

const game = new Game(ctx);

document.onkeydown = () => {
  h2.style.display = 'none';
  
  canvas.style.display = 'block';
  
  game.start();
}


