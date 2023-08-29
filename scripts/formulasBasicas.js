
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

    const figSelect = formulasArray.find(obj => obj.id === figura);
    if(figSelect){
        renderFigura(figSelect);
    }else{
        renderIntroduccion();
    };
    fblur();

    // listIndex.classList.remove("listIndexShow");
    // const figura = event.target.innerText.toLowerCase();
    // const cid = document.getElementById(figura);
    // const topOffset = cid.offsetTop - 70;
    // window.scroll(0, topOffset);
    // fblur();
}

function borrar(){
    divArea.innerHTML = "";
    divPerimetro.innerHTML = "";
    formulaImg.innerHTML = "";
    perimetroYArea.innerHTML = "";
    containerResponsive.innerHTML = "";
    containerFiguras.innerHTML = "";
};
// =================================== containerFig ===================================
// ================================== Render figure ==================================
const containerFiguras = document.querySelector(".containerFiguras");
const containerResponsive = document.createElement("section");
const formulaImg = document.createElement("div");
const imgFigura = document.createElement("img");
const perimetroYArea = document.createElement("div");
const divArea =document.createElement("div");
const pTitleA = document.createElement("p");
const pformulaA = document.createElement("p");
const pResultA = document.createElement("p");
const btnResultA = document.createElement("button");
const divPerimetro =document.createElement("div");
const pTitleP = document.createElement("p");
const pformulaP = document.createElement("p");
const pResultP = document.createElement("p");
const btnResultP = document.createElement("button");

const defContainer = document.createElement("section");
const defSubcontainer = document.createElement("div");
const defTitulo = document.createElement("h2");
const defImg = document.createElement("img");
const defArea = document.createElement("p");
const defPerimetro = document.createElement("p");
const defClose = document.createElement("p");



function renderIntroduccion(){
    borrar();
    containerFiguras.appendChild(defContainer);
    defContainer.classList.add("containerIntro");
    defContainer.appendChild(defSubcontainer);
    defSubcontainer.classList.add("subcontainerIntro");

    defSubcontainer.appendChild(defTitulo);
    defTitulo.classList.add("tituloIntro");
    defSubcontainer.appendChild(defImg);
    defImg.classList.add("imgIntro");
    defSubcontainer.appendChild(defArea);
    defArea.classList.add("areaIntro");
    defSubcontainer.appendChild(defPerimetro);
    defPerimetro.classList.add("perimetroIntro");
    defSubcontainer.appendChild(defClose);
    defClose.classList.add("closeIntro");

    defTitulo.innerHTML = formulasArray[0].defTitulo;
    defImg.setAttribute("src", formulasArray[0].defImg);
    defArea.innerHTML = formulasArray[0].defArea;
    defPerimetro.innerHTML = formulasArray[0].defPerimetro;
    defClose.innerHTML = formulasArray[0].defClose;
    document.documentElement.scrollTop = 0;
};

function renderFigura(objeto){
    borrar();
    containerFiguras.appendChild(containerResponsive);
    containerResponsive.classList.add("containerResponsive");
    containerResponsive.appendChild(formulaImg);
    formulaImg.classList.add("formulaImg");
    formulaImg.setAttribute("id", "triangulo");
    formulaImg.appendChild(imgFigura);
    containerResponsive.appendChild(perimetroYArea);
    perimetroYArea.classList.add("perimetroYArea");
    perimetroYArea.appendChild(divArea);
    divArea.classList.add("containerFormules")
    divArea.appendChild(pTitleA);
    divArea.appendChild(pformulaA);

    imgFigura.setAttribute("src", objeto.imgFig);
    pTitleA.classList.add("titlesFormules");
    pTitleA.innerHTML = objeto.titleArea;
    divArea.appendChild(pTitleA);
    pformulaA.classList.add("textFormule");
    pformulaA.innerHTML = objeto.formulaArea;
    divArea.appendChild(pformulaA);

    objeto.inputArea.forEach(winInput => {
        const divWin = document.createElement("div");
        divWin.classList.add("winPosition");
        const labelArea = document.createElement("label");
        labelArea.setAttribute("for", winInput.inputId);
        labelArea.innerHTML = winInput.inputLabel;
        divWin.appendChild(labelArea);
        const inputAreaWindow = document.createElement("input");
        inputAreaWindow.setAttribute("type", "number");
        inputAreaWindow.setAttribute("id", winInput.inputId);
        inputAreaWindow.classList.add("inputStyle");
        divWin.appendChild(inputAreaWindow);
        divArea.appendChild(divWin);
    })
    pResultA.classList.add(objeto.resultClA, "winStyle");
    divArea.appendChild(pResultA);
    btnResultA.classList.add(objeto.btnClA, "btnResult");
    btnResultA.innerHTML = "Resultado";
    divArea.appendChild(btnResultA);
   
    //=================================== Perimetro ===================================

    perimetroYArea.appendChild(divPerimetro);
    divPerimetro.classList.add("containerFormules");
    divPerimetro.appendChild(pTitleP);
    divPerimetro.appendChild(pformulaP);

    pTitleP.classList.add("titlesFormules");
    pTitleP.innerHTML = objeto.titlePerimetro;
    pformulaP.classList.add("textFormule");
    pformulaP.innerHTML = objeto.formulaPerimetro;

    objeto.inputPerimetro.forEach(winInput => {
        const divWinP = document.createElement("div");
        divWinP.classList.add("winPosition");
        const labelPerimetro = document.createElement("label");
        labelPerimetro.setAttribute("for", winInput.inputId);
        labelPerimetro.innerHTML = winInput.inputLabel;
        divWinP.appendChild(labelPerimetro);
        const inputPerimetroWindow = document.createElement("input");
        inputPerimetroWindow.setAttribute("type", "number");
        inputPerimetroWindow.setAttribute("id", winInput.inputId);
        inputPerimetroWindow.classList.add("inputStyle");
        divWinP.appendChild(inputPerimetroWindow);
        divPerimetro.appendChild(divWinP);
    });
    pResultP.classList.add(objeto.resultClP, "winStyle");
    divPerimetro.appendChild(pResultP);
    btnResultP.classList.add(objeto.btnClP, "btnResult");
    btnResultP.innerHTML = "Resultado";
    divPerimetro.appendChild(btnResultP);
    document.documentElement.scrollTop = 0;
};

// #################################### triangulo ####################################
// =================================== AreaTriangle ===================================
const winTriBaseA = document.querySelector("#winTriBaseA");
const winTriHeight = document.querySelector("#winTriHeight");
btnResultA.addEventListener("click", aTriangle);

function aTriangle(){
    if(winTriBaseA.value > 0 && winTriHeight.value > 0){
        const base = Number(winTriBaseA.value);
        const height = Number(winTriHeight.value);
        const result = (base * height) / 2;
        pResultA.innerHTML = `Area = ${result.toFixed(2)} cm2`;
    }
    else{
        pResultA.innerHTML = "Lados deben de ser mayores a 0";
    }
};
// ================================ PerimeterTriangle ================================
const winTriSide1 = document.querySelector("#winTriSide1");
const winTriSide2 = document.querySelector("#winTriSide2");
const winTriBase = document.querySelector("#winTriBase");
btnResultP.addEventListener("click", pTriangle);

function pTriangle(){
    if(winTriSide1.value > 0 && winTriSide2.value > 0 && winTriBase.value > 0 ){
        const lado1 = Number(winTriSide1.value);
        const lado2 = Number(winTriSide2.value);
        const base = Number(winTriBase.value);
        const result = lado1 + lado2 + base;
        pResultP.innerHTML = `Perimetro = ${result.toFixed(2)} cm`;
    }
    else{
        pResultP.innerHTML = "Lados deben de ser mayores a 0";
    }
}

// #################################### cuadrado ####################################
// =================================== AreaSquare ===================================
const winSqrArea = document.querySelector("#winSqrArea");
btnResultA.addEventListener("click", aSquare);

function aSquare(){
    if(winSqrArea.value > 0){
        const lado = Number(winSqrArea.value);
        const result = lado * lado;
        pResultA.innerHTML = `Area = ${result.toFixed(2)} cm2`;
    }
    else{
        pResultA.innerHTML = "Lados deben de ser mayores a 0";
    }
}
// =================================== PerimeterSquare ===================================
const winSqrPerimeter = document.querySelector("#winSqrPerimeter");
btnResultP.addEventListener("click", pSquare);

function pSquare(){
    if(winSqrPerimeter.value > 0){
        const lado = Number(winSqrPerimeter.value);
        const result = lado * 4;
        pResultP.innerHTML = `Perimetro = ${result.toFixed(2)} cm`;
    }
    else{
        pResultP.innerHTML = "Lados deben de ser mayores a 0";
    }
}

// #################################### Rectangulo ####################################
// ----------------- AreaRectangulo -----------------
const winRecABase = document.querySelector("#winRecABase");
const winRecAAltura = document.querySelector("#winRecAAltura");
btnResultA.addEventListener("click", aRectangulo);

function aRectangulo(){
    if(winRecABase.value > 0 && winRecAAltura.value > 0){
        const base = Number(winRecABase.value);
        const altura = Number(winRecAAltura.value);
        const result = base * altura;
        pResultA.innerHTML = `Area = ${result.toFixed(2)} cm2`;
    }
    else{
        pResultA.innerHTML = "Lados deben de ser mayores a 0";
    }
}
// ----------------- PerimeterRectangulo -----------------
const winRecPBase = document.querySelector("#winRecPBase");
const winRecPLado = document.querySelector("#winRecPLado");
btnResultP.addEventListener("click", pRectangulo);

function pRectangulo(){
    if(winRecPBase.value > 0 && winRecPLado.value > 0) {
        const base = Number(winRecPBase.value);
        const lado = Number(winRecPLado.value);
        const result = (base * 2) + (lado * 2);
        pResultP.innerHTML = `Perimetro = ${result.toFixed(2)} cm`;
    }
    else{
        pResultP.innerHTML = "Lados deben de ser mayores a 0";
    }
}

// #################################### Paralelogramo ####################################
// ----------------- AreaParalelogramo -----------------
const winParABase = document.querySelector("#winParABase");
const winParAltura = document.querySelector("#winParAltura");
btnResultA.addEventListener("click", aParalelogramo);

function aParalelogramo(){
    if(winParABase.value > 0 && winParAltura.value > 0){
        const base = Number(winParABase.value);
        const altura = Number(winParAltura.value);
        const result = base * altura;
        pResultA.innerHTML = `Area = ${result.toFixed(2)} cm2`;
    }
    else{
        pResultA.innerHTML = "Lados deben de ser mayores a 0";
    }
}
// ----------------- PerimeterParalelogramo -----------------
const winParPBase = document.querySelector("#winParPBase");
const winParPAltura = document.querySelector("#winParPAltura");
btnResultP.addEventListener("click", pParalelogramo);

function pParalelogramo(){
    if(winParPBase.value > 0 && winParPAltura.value > 0) {
        const base = Number(winParPBase.value);
        const lado = Number(winParPAltura.value);
        const result = 2 * (base + lado);
        pResultP.innerHTML = `Perimetro = ${result.toFixed(2)} cm`;
    }
    else{
        pResultP.innerHTML = "Lados deben de ser mayores a 0";
    }
}

// #################################### Trapecio ####################################
// ----------------- AreaTrapecio -----------------
const winTrapAB = document.querySelector("#winTrapAB");
const winTrapAb = document.querySelector("#winTrapAb");
const winTrapAa = document.querySelector("#winTrapAa");
btnResultA.addEventListener("click", aTrapecio);

function aTrapecio(){
    if(winTrapAB.value > 0 && winTrapAb.value > 0 && winTrapAa.value > 0){
        const baseM = Number(winTrapAB.value);
        const basem = Number(winTrapAb.value);
        const altura = Number(winTrapAa.value);
        const result = ((baseM + basem) /2) * altura;
        pResultA.innerHTML = `Area = ${result.toFixed(2)} cm2`;
    }
    else{
        pResultA.innerHTML = "Lados deben de ser mayores a 0";
    }
}
// ----------------- PerimeterTrapecio -----------------
const winL1PTrap = document.querySelector("#winL1PTrap");
const winL2PTrap = document.querySelector("#winL2PTrap");
const winL3PTrap = document.querySelector("#winL3PTrap");
const winL4PTrap = document.querySelector("#winL4PTrap");
btnResultP.addEventListener("click", pTrapecio);

function pTrapecio(){
    if(winL1PTrap.value > 0 && winL2PTrap.value > 0 && winL3PTrap.value > 0 && winL4PTrap.value > 0) {
        const l1 = Number(winL1PTrap.value);
        const l2 = Number(winL2PTrap.value);
        const l3 = Number(winL3PTrap.value);
        const l4 = Number(winL4PTrap.value);
        const result = l1 + l2 + l3 + l4;
        pResultP.innerHTML = `Perimetro = ${result.toFixed(2)} cm`;
    }
    else{
        pResultP.innerHTML = "Lados deben de ser mayores a 0";
    }
}

// #################################### rombo ####################################
// ----------------- AreaRombo -----------------
const winD1A = document.querySelector("#winD1A");
const winD2A = document.querySelector("#winD2A");
btnResultA.addEventListener("click", arombo);

function arombo(){
    if(winD1A.value > 0 && winD2A.value > 0){
        const d1 = Number(winD1A.value);
        const d2 = Number(winD2A.value);
        const result = (d1 * d2) / 2;
        pResultA.innerHTML = `Area = ${result.toFixed(2)} cm2`;
    }
    else{
        pResultA.innerHTML = "Lados deben de ser mayores a 0";
    }
}
// ----------------- PerimeterRombo -----------------
const winPRomL1 = document.querySelector("#winPRomL1");
const winPRomL2 = document.querySelector("#winPRomL2");
const winPRomL3 = document.querySelector("#winPRomL3");
const winPRomL4 = document.querySelector("#winPRomL4");
btnResultP.addEventListener("click", pRombo);

function pRombo(){
    if(winPRomL1.value > 0 && winPRomL2.value > 0 && winPRomL3.value > 0 && winPRomL4.value > 0) {
        const l1 = Number(winPRomL1.value);
        const l2 = Number(winPRomL2.value);
        const l3 = Number(winPRomL3.value);
        const l4 = Number(winPRomL4.value);
        const result = l1 + l2 + l3 + l4;
        pResultP.innerHTML = `Perimetro = ${result.toFixed(2)} cm`;
    }
    else{
        pResultP.innerHTML = "Lados deben de ser mayores a 0";
    }
}

// #################################### Pentagono ####################################
// ----------------- AreaPentagono -----------------
const winAPPent = document.querySelector("#winAPPent");
const winAApotPent = document.querySelector("#winAApotPent");
btnResultA.addEventListener("click", aPentagono);

function aPentagono(){
    if(winAPPent.value > 0 && winAApotPent.value > 0){
        const perim = Number(winAPPent.value);
        const apotem = Number(winAApotPent.value);
        const result = (perim * apotem) / 2;
        pResultA.innerHTML = `Area = ${result.toFixed(2)} cm2`;
    }
    else{
        pResultA.innerHTML = "Lados deben de ser mayores a 0";
    }
}
// ----------------- PerimeterPentagono -----------------
const winPPenL = document.querySelector("#winPPenL");
btnResultP.addEventListener("click", pPentagono);

function pPentagono(){
    if(winPPenL.value > 0) {
        const lado = Number(winPPenL.value);
        const result = 5 * lado;
        pResultP.innerHTML = `Perimetro = ${result.toFixed(2)} cm`;
    }
    else{
        pResultP.innerHTML = "Lados deben de ser mayores a 0";
    }
}

// #################################### Hexagono ####################################
// ----------------- AreaHexagono -----------------
const winAPHex = document.querySelector("#winAPHex");
const winAApotHex = document.querySelector("#winAApotHex");
btnResultA.addEventListener("click", aHexagono);

function aHexagono(){
    if(winAPHex.value > 0 && winAApotHex.value > 0){
        const perim = Number(winAPHex.value);
        const apotem = Number(winAApotHex.value);
        const result = (perim * apotem) / 2;
        pResultA.innerHTML = `Area = ${result.toFixed(2)} cm2`;
    }
    else{
        pResultA.innerHTML = "Lados deben de ser mayores a 0";
    }
}
// ----------------- PerimeterHexagono -----------------
const winPHexL = document.querySelector("#winPHexL");
btnResultP.addEventListener("click", pHexagono);

function pHexagono(){
    if(winPHexL.value > 0) {
        const lado = Number(winPHexL.value);
        const result = 6 * lado;
        pResultP.innerHTML = `Perimetro = ${result.toFixed(2)} cm`;
    }
    else{
        pResultP.innerHTML = "Lados deben de ser mayores a 0";
    }
}
// #################################### Circunferencia ####################################
// ----------------- AreaCirculo -----------------
const winCircArea = document.querySelector("#winCircArea");
btnResultA.addEventListener("click", aCirculo);

function aCirculo(){
    if(winCircArea.value > 0){
        const radio = Number(winCircArea.value);
        const PI = Math.PI.toFixed(2)
        const result = Math.pow(radio, 2) * PI;
        pResultA.innerHTML = `Area = ${result.toFixed(2)} cm2`;
    }
    else{
        pResultA.innerHTML = "Radio debe de ser mayor a 0";
    }
}

// ----------------- Circunferencia -----------------
const winCircunferencia = document.querySelector("#winCircunferencia");
btnResultP.addEventListener("click", circunferencia);

function circunferencia(){
    if(winCircunferencia.value > 0){
        const radio = Number(winCircunferencia.value);
        const PI = Math.PI.toFixed(2);
        const result = PI * (radio * 2);
        pResultP.innerHTML = `Circunferencia = ${result.toFixed(2)} cm`;
    }
    else{
        pResultP.innerHTML = "Radio debe ser mayor a 0";
    }
}
renderIntroduccion();


// ------------- altura de triangulo isosceles -------------

// const winHTriSide1 = document.querySelector("#winHTriSide1");
// const winHTriSide2 = document.querySelector("#winHTriSide2");
// const winHTriBase = document.querySelector("#winHTriBase");
// const resultHTri = document.querySelector(".resultHTri");
// const btnResultHTri = document.querySelector(".btnResultHTri");

// btnResultHTri.addEventListener("click", hTriangle);

// function hTriangle(){
//     if(winHTriSide1.value > 0 && winHTriSide2.value > 0 && winHTriBase.value > 0 && winHTriSide1.value === winHTriSide2.value){
//         const lado1 = Number(winHTriSide1.value);
//         const lado2 = Number(winHTriSide2.value);
//         const base = Number(winHTriBase.value);

//         const result = Math.sqrt(Math.pow(lado1,2) - Math.pow( (base/2), 2) );
//         resultHTri.innerHTML = `Altura = ${result.toFixed(2)} cm`;
//     }
//     else{
//         resultHTri.innerHTML = "Lados deben de ser mayores a 0 <br>lado1 y lado2 iguales";
//     }
// }
// ------------------------ Alturas --------------------------
// ------------- altura de triangulo escaleno -------------
// const winHTriSSide1 = document.querySelector("#winHTriSSide1");
// const winHTriSSide2 = document.querySelector("#winHTriSSide2");
// const winHTriSBase = document.querySelector("#winHTriSBase");
// const resultHTriS = document.querySelector(".resultHTriS");
// const btnResultHTriS = document.querySelector(".btnResultHTriS");

// btnResultHTriS.addEventListener("click", hTriangleS);

// function hTriangleS(){
//     if(winHTriSSide1.value > 0 && winHTriSSide2.value > 0 && winHTriSBase.value > 0){
//         const lado1 = Number(winHTriSSide1.value);
//         const lado2 = Number(winHTriSSide2.value);
//         const base = Number(winHTriSBase.value);

//         const semiPerimeter = (lado1 + lado2 + base) / 2;
//         const desestruc = [lado1, lado2, base];
//         const [a,b,c] = desestruc.sort((a,b) => b - a);
//         const process =  (2/a) * Math.sqrt((semiPerimeter * (semiPerimeter - a) * (semiPerimeter - b) * (semiPerimeter - c)));
//         const result =  process;
//         resultHTriS.innerHTML = `Altura = ${result.toFixed(2)} cm`;
//     }
//     else{
//         resultHTriS.innerHTML = "Lados deben de ser mayores a 0";
//     }
// }



