let imgIco = document.querySelector('.logoTipo');
let slogan = document.querySelector('.slogan');

function girarD() {
    imgIco.style.transform = 'rotate(360deg)';
    imgIco.style.transition = '2s';
    // imgIco.style.transform = 'rotate(-360deg)';
}

function dim() {
    imgIco.style.transform = 'scale(0.7,0.7)';
    imgIco.style.transition = '1.2s';
    slogan.style.transform = 'scale(1.2,1.2)';
    slogan.style.transition = '1.2s';
}

function aum() {
    imgIco.style.transform = 'scale(1,1)';
    imgIco.style.transition = '1.2s';
    slogan.style.transform = 'scale(1,1)';
    slogan.style.transition = '1.2s';
}



// function girarE() {
//     imgIco.style.transform = 'rotate(0deg)';
//     imgIco.style.transition = '2s';
// }