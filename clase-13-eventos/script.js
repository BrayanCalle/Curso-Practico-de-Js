const h1 = document.querySelector('h1');
const calculo1 = document.querySelector('#calculo1');
const calculo2 = document.querySelector('#calculo2');
const btnCalcular = document.querySelector('#btn-calcular');
const pResult = document.querySelector('#result');

function bntOnClick(){
    const total = parseInt(calculo1.value) + parseInt(calculo2.value);
    pResult.innerText = total;
}




