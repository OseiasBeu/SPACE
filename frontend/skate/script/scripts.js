let botao1 = document.querySelector('.btn1');

function cresce(){
  // botao2.style.marginRight = '340px';
  botao2.style.marginRight = '344px';
  // botao1.style.backgroundColor = 'rgba(0,0,0,0.5)';
  botao1.style.transform = 'scale(1.1,1.1)';
  botao1.style.transition= '0.3s';
  botao1.style.boxShadow = "5px 5px 5px black";
  botao2.style.marginRight = '-344px';
}
function decrece(){
  botao2.style.marginRight = '-144px';
  botao1.style.transform = 'scale(1,1)';
  botao1.style.boxShadow = "none";
  botao1.style.transition= '0.3s';
}

let botao2 = document.querySelector('.btn2');
function cresce2(){
  botao2.style.marginRight = '144px';
  botao2.style.transform = 'scale(1.1,1.1)';
  botao2.style.boxShadow = "0px 5px 5px 5px black";
  botao2.style.backgrounImage = "url('img/lamp.jpg')";
  botao2.style.transition= '0.3s';
}

function decrece2(){
  botao2.style.marginRight = '-344px';
  botao2.style.boxShadow = "none";
  botao2.style.transform = 'scale(1,1)';
  botao2.style.transition= '0.3s';
}
