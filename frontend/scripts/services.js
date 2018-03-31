let problema = document.querySelector("#problema");

function saltarDaTelaP() {
    problema.style.transform = 'scale(1.3,1.3)';
    problema.style.transition = '0.2s';
    problema.style.border = '1px solid rgb(68, 66, 66)';
    problema.style.backgroundImage = "url('img/problemaL.png')";
    problema.style.backgroundRepeat = "no-repeat";

}

function voltarPraTelaP() {
    problema.style.transform = 'scale(1,1)';
    problema.style.transition = '0.2s';
    problema.style.border = '1px solid rgb(68, 66, 66)';
    problema.style.backgroundImage = "url('img/problemaD.png')";
    problema.style.backgroundRepeat = "no-repeat";
}

let solucao = document.querySelector("#solucao");

function saltarDaTelaS() {
    solucao.style.transform = 'scale(1.3,1.3)';
    solucao.style.transition = '0.2s';
    solucao.style.border = '1px solid rgb(68, 66, 66)';
    solucao.style.backgroundImage = "url('img/lampL.png')";
    solucao.style.backgroundRepeat = "no-repeat";
}

function voltarPraTelaS() {
    solucao.style.transform = 'scale(1,1)';
    solucao.style.transition = '0.2s';
    solucao.style.border = '1px solid rgb(68, 66, 66)';
    solucao.style.backgroundImage = "url('img/lampD.png')";
    solucao.style.backgroundRepeat = "no-repeat";
}