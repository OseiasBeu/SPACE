let imgIco = document.querySelector('#imgIC');
let missao = document.querySelector('.missaoCapa');
let valores = document.querySelector('.valoresCapa');
let visao = document.querySelector('.visaoCapa');

function girarMissao() {
    imgIco.style.transform = 'rotate(120deg)';
    imgIco.style.transition = '2s';
    missao.style.color = 'whitesmoke';
    missao.style.border = '1px solid rgb(68, 66, 66);'
    missao.style.transition = '2s';
    visao.style.color = 'rgba(0, 0, 0, 0)';
    valores.style.color = 'rgba(0, 0, 0, 0)';
}

function girarVisao() {
    imgIco.style.transform = 'rotate(350deg)';
    imgIco.style.transition = '2s';
    visao.style.color = 'whitesmoke';
    visao.style.border = '1px solid rgb(68, 66, 66);'
    visao.style.transition = '2s';
    valores.style.color = 'rgba(0, 0, 0, 0)';
    missao.style.color = 'rgba(0, 0, 0, 0)';
}

function girarValores() {
    imgIco.style.transform = 'rotate(-350deg)';
    imgIco.style.transition = '2s';
    valores.style.color = 'whitesmoke';
    valores.style.transition = '2s';
    valores.style.border = '1px solid rgb(68, 66, 66);'
    missao.style.color = 'rgba(0, 0, 0, 0)';
    visao.style.color = 'rgba(0, 0, 0, 0)';
}