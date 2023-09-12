// ############## Calcular porcentaje de una cantidad ##############
const porcP1 = document.querySelector("#porcP1");
const cantP1 = document.querySelector("#cantP1");
const resultP1 = document.querySelector(".resultP1");

const cantR3 = document.querySelector(".cantR3");
const xR3 = document.querySelector(".xR3");
const porcBuscR3 = document.querySelector(".porcBuscR3");

const msgP1 = document.querySelector(".msgP1");
const prc1 = document.querySelector(".prc1");

prc1.addEventListener("click", fprc1);

function fprc1(){
    if(porcP1.value > 0 && cantP1.value > 0){
        const wprc = Number(porcP1.value);
        const wcnt = Number(cantP1.value);    
        const wres = (wprc * wcnt) / 100;
        resultP1.innerHTML = wres.toFixed(2);
        msgP1.innerHTML =`El ${wprc} % de ${wcnt} es ${wres.toFixed(2)}`;

        cantR3.innerHTML = wcnt;
        porcBuscR3.innerHTML = `${wprc} %`;
        xR3.innerHTML = wres.toFixed(2);
    }else{
        msgP1.innerHTML = "Valores deben de ser mayores a 0";
    }
}

// ############## Calcular total conociendo un porcentaje ##############
const porcP2 = document.querySelector("#porcP2");
const cantP2 = document.querySelector("#cantP2");
const resultP2 = document.querySelector(".resultP2");
const msgP2 = document.querySelector(".msgP2");
const prc2 = document.querySelector(".prc2");

prc2.addEventListener("click", fprc2);

function fprc2(){
    if(porcP2.value > 0 && cantP2.value > 0){
        const wprc = Number(porcP2.value);
        const wcnt = Number(cantP2.value);    
        const wres = (100 * wcnt) / wprc;
        resultP2.innerHTML = wres.toFixed(2);
        msgP2.innerHTML =`Si el ${wprc} % es ${wcnt} el 100 % es ${wres.toFixed(2)}` ;
    }else{
        msgP2.innerHTML = "Valores deben de ser mayores a 0";
    }
}

// ############## Calcular porcentaje del total en una cantidad ##############
const cant2P3 = document.querySelector("#cant2P3");
const cant1P3 = document.querySelector("#cant1P3");
const porcP3 = document.querySelector(".porcP3");
const msgP3 = document.querySelector(".msgP3");
const prc3 = document.querySelector(".prc3");

prc3.addEventListener("click", fprc3);

function fprc3(){
    if(cant2P3.value > 0 && cant1P3.value > 0){
        const wcnt2 = Number(cant2P3.value);
        const wcnt1 = Number(cant1P3.value);    
        const resulP3 = (wcnt1 * 100) / wctt2;

        porcP3.innerHTML = resulP3.toFixed(2);
        msgP3.innerHTML =`Si ${wcnt2} es  el 100 % ${wcnt1} sera el ${resulP3.toFixed(2)} %` ;
    }else{
        msgP3.innerHTML = "Valores deben de ser mayores a 0";
    }
}

// ############## Calcular un porcentaje a partir de otro porcentaje ##############
const porc1P4 = document.querySelector("#porc1P4");
const cant1P4 = document.querySelector("#cant1P4");
const porc2P4 = document.querySelector("#porc2P4");
const cant2P4 = document.querySelector(".cant2P4");
const msgP4 = document.querySelector(".msgP4");
const prcP4 = document.querySelector(".prc4");

prcP4.addEventListener("click", fprc4);

function fprc4(){
    if(porc1P4.value > 0 && cant1P4.value > 0 && porc2P4.value > 0){
        const wprc1 = Number(porc1P4.value);
        const wcnt1 = Number(cant1P4.value);    
        const wprc2 = Number(porc2P4.value);
        const resulP4 = (wprc2 * wcnt1) / wprc1;

        cant2P4.innerHTML = resulP4.toFixed(2);
        msgP4.innerHTML =`El ${wprc1} % es ${wcnt1} el ${wprc2} % sera ${resulP4.toFixed(2)}` ;
    }else{
        msgP4.innerHTML = "Valores deben de ser mayores a 0";
    }
}