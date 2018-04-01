let imgIco = document.querySelector('.logoTipo');
let slogan = document.querySelector('.slogan');

function aum() {
    imgIco.style.transform = 'scale(0.7,0.7)';
    imgIco.style.transition = '0.8s';
    slogan.style.transform = 'scale(1.2,1.2)';
    slogan.style.transition = '0.8s';
}

function dim() {
    imgIco.style.transform = 'scale(1,1)';
    imgIco.style.transition = '0.8s';
    slogan.style.transform = 'scale(1,1)';
    slogan.style.transition = '0.8s';
}