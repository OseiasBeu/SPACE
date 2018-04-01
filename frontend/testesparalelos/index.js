let imgIco = document.querySelector('img');

function girarD() {

    imgIco.style.transform = 'rotate(360deg)';
    imgIco.style.transition = '2s';
    dec;
}


function girarE() {
    // imgIco.style.transform = 'scale(0.5,0.5)';
    imgIco.style.transform = 'rotate(0deg)';
    imgIco.style.transition = '2s';
    dec;
}

let dec = {
    method: function decrece() {
        return imgIco.style.transform = 'scale(0.5,0.5)';
    }

}