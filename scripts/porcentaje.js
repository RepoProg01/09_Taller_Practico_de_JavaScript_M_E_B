const porcP1 = document.querySelector("#porcP1");
const cantP1 = document.querySelector("#cantP1");
const resultP1 = document.querySelector(".resultP1");
const msgP1 = document.querySelector(".msgP1");
const prc1 = document.querySelector(".prc1");

prc1.addEventListener("click", fprc1);

function fprc1(){

    if(porcP1.value > 0 && cantP1.value > 0){
        const wprc = Number(porcP1.value);
        const wcnt = Number(cantP1.value);
        const wres = (wprc * wcnt) / 100;
        resultP1.innerHTML = wres.toFixed(2);
    }else{
        msgP1.innerHTML = "Valores deben de ser mayores a 0";
    }
}