const body = document.querySelector('body');
const h2 = document.querySelector('h2');
const btnColor = document.querySelector('#btnColor');

function setColor(){
    const digitos = '0123456789ABCDEF';
    let colorRBG = '#';
    for(let i = 0; i < 6; i++){
        const index = Math.floor(Math.random() * 16);
        colorRBG += digitos.charAt(index);
    }
    h2.innerHTML = colorRBG;
    body.style.background = colorRBG;
}

setColor();
btnColor.addEventListener('click', setColor);