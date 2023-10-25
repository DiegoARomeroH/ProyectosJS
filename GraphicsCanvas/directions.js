const dib = document.getElementById("canva");
const ctx = dib.getContext("2d");
let direction = 1; // 1-right , 2- down, 3- left , 4-up
let pozX = 0;
let pozY = 1;

function ghost(x, y) {
  ctx.font = '40px serif';
  ctx.fillText('👮‍♂️', x * 30, y * 30);
}

const pollitos = [];
for (let i = 0; i < 20; i++) {
  const pollito = {
    x: Math.floor(Math.random() * 20),
    y: 1 + Math.floor(Math.random() * 13),
    pinta: function () {
      if (!this.comido) {
        ctx.font = '40px serif';
        ctx.fillText('👨🏿‍🧑🏿‍👧🏿‍👧🏿', this.x * 30, this.y * 30);
      }
    },
    comido: false
  }
  pollitos.push(pollito);
}

function checkCollisions() {
  pollitos.forEach(pollito => {
    if (pollito.x === pozX && pollito.y === pozY) {
      pollito.comido = true;
    }
  });
}

setInterval(() => {
  ctx.clearRect(0, 0, 600, 400);
  pollitos.forEach(pollito => pollito.pinta());
  ghost(pozX, pozY);
  checkCollisions(); // Verificar colisiones antes de pintar de nuevo
  pollitos.forEach(pollito => {
    if (!pollito.comido) {
      pollito.pinta();
    }
  });
  switch (direction) {
    case 1:
      pozX++;
      break;
    case 2:
      pozY++;
      break;
    case 3:
      pozX--;
      break;
    case 4:
      pozY--;
      break;
  }
  if (pozX > 20) pozX = 0;
  if (pozX < 0) pozX = 20;
  if (pozY > 13) pozY = 1;
  if (pozY < 1) pozY = 13;
}, 70);

document.querySelector('body')
  .addEventListener('keydown', (e) => {
    e.preventDefault();
    console.log(e.key);
    switch (e.key) {
      case 'ArrowRight':
        direction = 1;
        break;
      case 'ArrowDown':
        direction = 2;
        break;
      case 'ArrowLeft':
        direction = 3;
        break;
      case 'ArrowUp':
        direction = 4;
        break;
    }
  })