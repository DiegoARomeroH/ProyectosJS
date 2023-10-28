const dib = document.getElementById("canva");
const ctx = dib.getContext("2d");

let direction = 1; // 1-right , 2- down, 3- left , 4-up
let pozX = 0;
let pozY = 1;

let contador = 0;


const snake = [];
snake.push({
    x: 2, y:1, xNext: 0, yNext: 0,
    pinta: function(){
        ctx.font = '25px Serif';
        ctx.fillText('👮‍♂️', this.x * 20, this.y * 20);
    } 
});

snake.push({...snake[0]});
snake.push({...snake[0]});
snake[1].x = 1;
snake[1].xNext = snake[0].x;
snake[1].yNext = snake[0].y;
snake[2].x = 0;
snake[2].xNext = snake[1].x;
snake[2].yNext = snake[1].y;

const comida = {
    x: 0,
    y: 0,
    aparece: function(){
        this.x = Math.floor(Math.random() * 30);
        this.y = Math.ceil(Math.random() * 20);
    },
    pinta: function(){
        ctx.fillText('🤷‍♀️', this.x *20, this.y *20);
    }
};

function nextMove(){
    snake.forEach((mouse, index) => {
        if(index === 0){
            mouse.x = pozX;
            mouse.y = pozY;
        } else {
            mouse.x = mouse.xNext;
            mouse.y = mouse.yNext;
            mouse.xNext = snake[index - 1].x;
            mouse.yNext = snake[index - 1].y;
        }
    })
}

comida.aparece();
setInterval(() => {
    ctx.clearRect(0, 0, 600, 400);
    snake.forEach(mouse => mouse.pinta());
    comida.pinta();
    if(snake[0].x === comida.x && snake[0].y === comida.y){
        snake.push({...snake[0]});
        comida.aparece();
    }
    nextMove();
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
      if (pozX > 30) pozX = 0;
      if (pozX < 0) pozX = 30;
      if (pozY > 20) pozY = 1;
      if (pozY < 1) pozY = 20;
}, 70)

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