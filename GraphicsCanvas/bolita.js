const dib = document.getElementById("canva");
const ctx = dib.getContext("2d");

let dirX = 1;
let dirY = 1;

let idX = 0;
let idY = 0;

let ini = 0;

function hslColor(h){
    return `hsl(${ h },70%,50%)`;
}

function bolita(x,y){
    ctx.fillStyle = hslColor(ini);
    ini += 2;
    ctx.beginPath();
    ctx.arc(x,y,20,0,Math.PI *2);
    ctx.fill();

}

setInterval(() => {
    ctx.clearRect(0, 0, 600, 400);
    bolita(idX, idY);

    if (dirX === 1 && dirY === 1) {
        idX += 20;
        idY += 30;
    } else if (dirX === 1 && dirY === -1) {
        idX += 20;
        idY -= 30;
    } else if (dirX === -1 && dirY === 1) {
        idX -= 20;
        idY += 30;
    } else {
        idX -= 20;
        idY -= 30;
    }

    if (idX > 570) {
        dirX = -1; 
    } else if (idX < 10) {
        dirX = 1; 
    }

    if (idY > 370) {
        dirY = -1; 
    } else if (idY < 10) {
        dirY = 1; 
    }
}, 25);