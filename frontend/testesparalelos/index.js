let imgIco = document.querySelector('img');

function girarD() {
    imgIco.style.transform = 'rotate(360deg)';
    imgIco.style.transition = '2s';
}

function girarE() {
    imgIco.style.transform = 'rotate(0deg)';
    imgIco.style.transition = '2s';
}

// function decrece() {
//     // problema.style.transform = 'scale(1,1)';
//     imgIco.style.transform = 'scale(2,2)';
//     imgIco.style.transition = '2s';
// }