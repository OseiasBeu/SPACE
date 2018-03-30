let problema = document.querySelector("#problema");
let blabla = document.querySelector(".planoDeFundo");


function saltarDaTelaP() {
    problema.style.transform = 'scale(1.3,1.3)';
    problema.style.transition = '2s';
    problema.style.border = '1px solid rgb(68, 66, 66);'
        // problema.style.zIndex = '1';

}

function voltarPraTelaP() {
    problema.style.transform = 'scale(1,1)';
    problema.style.transition = '2s';
    problema.style.border = '1px solid rgb(68, 66, 66);'
}

let solucao = document.querySelector("#solucao");

function saltarDaTelaS() {
    solucao.style.transform = 'scale(1.3,1.3)';
    solucao.style.transition = '2s';
    solucao.style.border = '1px solid rgb(68, 66, 66);'
        // solucao.style.zIndex = '1';
}

function voltarPraTelaS() {
    solucao.style.transform = 'scale(1,1)';
    solucao.style.transition = '2s';
    solucao.style.border = '1px solid rgb(68, 66, 66);'
}