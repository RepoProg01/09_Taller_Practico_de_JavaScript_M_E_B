
const body = document.querySelector(".body");
const figuras = document.querySelector(".figuras");
const listIndex = document.querySelector(".listIndex");
const blurC = document.querySelector(".blurC");

figuras.addEventListener("click", menu);
blurC.addEventListener("click", fblur);

function menu(){
    listIndex.classList.toggle("listIndexShow");
    blurC.classList.toggle("off");
    body.classList.toggle("noMove");
}

function fblur(){
    listIndex.classList.remove("listIndexShow");
    blurC.classList.add("off");
    body.classList.remove("noMove");
}

 const seleccion = document.querySelectorAll(".seleccion");
 seleccion.forEach(element => {
    element.addEventListener("click", selectF);
 });

 function selectF(event){
    listIndex.classList.remove("listIndexShow");
    const figura = event.target.innerText.toLowerCase();
    const cid = document.getElementById(figura);
    const topOffset = cid.offsetTop - 70;
    window.scroll(0, topOffset);
    fblur();
 }


// =================================== containerFig ===================================
// ------------- altura de triangulo isosceles -------------

const winHTriSide1 = document.querySelector("#winHTriSide1");
const winHTriSide2 = document.querySelector("#winHTriSide2");
const winHTriBase = document.querySelector("#winHTriBase");
const resultHTri = document.querySelector(".resultHTri");
const btnResultHTri = document.querySelector(".btnResultHTri");

btnResultHTri.addEventListener("click", hTriangle);

function hTriangle(){
    if(winHTriSide1.value > 0 && winHTriSide2.value > 0 && winHTriBase.value > 0 && winHTriSide1.value === winHTriSide2.value){
        const lado1 = Number(winHTriSide1.value);
        const lado2 = Number(winHTriSide2.value);
        const base = Number(winHTriBase.value);

        const result = Math.sqrt(Math.pow(lado1,2) - Math.pow( (base/2), 2) );
        resultHTri.innerHTML = `Altura = ${result.toFixed(2)} cm`;
    }
    else{
        resultHTri.innerHTML = "Lados deben de ser mayores a 0 <br>lado1 y lado2 iguales";
    }
}
// ------------------------ Alturas --------------------------
// ------------- altura de triangulo escaleno -------------
const winHTriSSide1 = document.querySelector("#winHTriSSide1");
const winHTriSSide2 = document.querySelector("#winHTriSSide2");
const winHTriSBase = document.querySelector("#winHTriSBase");
const resultHTriS = document.querySelector(".resultHTriS");
const btnResultHTriS = document.querySelector(".btnResultHTriS");

btnResultHTriS.addEventListener("click", hTriangleS);

function hTriangleS(){
    if(winHTriSSide1.value > 0 && winHTriSSide2.value > 0 && winHTriSBase.value > 0){
        const lado1 = Number(winHTriSSide1.value);
        const lado2 = Number(winHTriSSide2.value);
        const base = Number(winHTriSBase.value);

        const semiPerimeter = (lado1 + lado2 + base) / 2;
        const desestruc = [lado1, lado2, base];
        const [a,b,c] = desestruc.sort((a,b) => b - a);
        const process =  (2/a) * Math.sqrt((semiPerimeter * (semiPerimeter - a) * (semiPerimeter - b) * (semiPerimeter - c)));
        const result =  process;
        resultHTriS.innerHTML = `Altura = ${result.toFixed(2)} cm`;
    }
    else{
        resultHTriS.innerHTML = "Lados deben de ser mayores a 0";
    }
}

