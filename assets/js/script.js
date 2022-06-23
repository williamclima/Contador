const CONTADOR = document.getElementById("currentNumber");
const BTN_DECREMENTAR = document.getElementById("subtrai");
const BTN_ZERAR = document.getElementById("zerar");
const BTN_INCREMENTAR = document.getElementById("adiciona");

let contador = 0;
CONTADOR.innerHTML = contador;

BTN_DECREMENTAR.addEventListener ("click", decrementar);
BTN_INCREMENTAR.addEventListener ("click", incrementar);
BTN_ZERAR.addEventListener ("click", zerar);

function decrementar(){
  CONTADOR.innerHTML = --contador;
}

function incrementar(){
  CONTADOR.innerHTML = ++contador;
}

function zerar(){
  CONTADOR.innerHTML = contador = 0;
}