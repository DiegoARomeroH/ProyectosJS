const dib = document.getElementById("canva");
const ctx = dib.getContext("2d");

let idX = 0;
let idY = 0;
let ini = 0;

function rgbRandom(){
    const letras = '123456789abcdef';
    let colorRgb = '#';
    for(let i = 0; i < 6; i++){
        colorRgb += letras.charAt(Math.floor(Math.random() * 16));
    }
    return colorRgb;
}

function hslColor(h){
    return `hsl(${ h }, 50%, 50%)`;
}

function cuadrado(x, y){
    ctx.fillStyle = hslColor(ini);
    ini += 10;
    ctx.fillRect(x, y, 20, 20);
    ctx.strokeRect(x, y, 20, 20);
}

setInterval(() => {
    cuadrado(idX, idY);
    if(idX < 370){
        idX += 20;
    } else {
        idX = 0;
        idY += 20;
    }
}, 200);