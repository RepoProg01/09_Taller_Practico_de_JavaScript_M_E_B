
const body = document.querySelector(".body");
const figuras = document.querySelector(".figuras");
const listIndex = document.querySelector(".listIndex");
const blurC = document.querySelector(".blurC");

figuras.addEventListener("click", menu);
blurC.addEventListener("click", fblur);

function menu(){

    listIndex.scrollTop = 0;
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
    medidaA = null;
    medidaP = null;
    inputRadioAC.checked = false;
    inputRadioAM.checked = false;
    inputRadioPC.checked = false;
    inputRadioPM.checked = false;
    divArea.innerHTML = "";
    divPerimetro.innerHTML = "";
    sectionAmiddle.innerHTML = "";
    sectionPmiddle.innerHTML = "";
    pResultA.innerHTML = "";
    pResultP.innerHTML = "";
    pResultA.classList.remove(pResultAReg);
    btnResultA.classList.remove(btnResultAReg);
    pResultP.classList.remove(pResultPReg);
    btnResultP.classList.remove(btnResultPReg);
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
const sectionAtop = document.createElement("section");
const sectionAmiddle = document.createElement("section");
const sectionAbottom = document.createElement("section");
const divRadioA = document.createElement("div");
const divRadioP = document.createElement("div");
const inputRadioAC = document.createElement("input");
const inputRadioAM = document.createElement("input");
const inputLabelAC = document.createElement("label");
const inputLabelAM = document.createElement("label");
const inputRadioPC = document.createElement("input");
const inputRadioPM = document.createElement("input");
const inputLabelPC = document.createElement("label");
const inputLabelPM = document.createElement("label");
const pResultA = document.createElement("p");
const btnResultA = document.createElement("button");
const divPerimetro =document.createElement("div");
const sectionPtop = document.createElement("section");
const sectionPmiddle = document.createElement("section");
const sectionPbottom = document.createElement("section");
const pTitleP = document.createElement("p");
const pformulaP = document.createElement("p");
const pResultP = document.createElement("p");
const btnResultP = document.createElement("button");

const defContainer = document.createElement("section");

const sectionDtop = document.createElement("div");
const sectionDmiddle = document.createElement("div");
const sectionDbottom = document.createElement("div");

const defTitulo = document.createElement("h2");
const defImg = document.createElement("img");

const defAreaTitulo = document.createElement("p");
const defArea = document.createElement("p");
const defPerimetroTitulo = document.createElement("p");
const defPerimetro = document.createElement("p");

const defNotaTitulo = document.createElement("p");
const defNota = document.createElement("p");
const defGuiaTitulo = document.createElement("p");
const defGuia = document.createElement("p");

let medidaA;
let medidaP;
let btnResultAReg;
let btnResultPReg;
let pResultAReg;
let pResultPReg;
let rutaFA;
let rutaFP;

function medSeleccion() {
    if(inputRadioAC.checked) {
        medidaA = "cm2";
    }else if(inputRadioAM.checked) {
        medidaA = "m2";
    };
    if(inputRadioPC.checked) {
        medidaP = "cm";
    }else if(inputRadioPM.checked) {
        medidaP = "m";
    };
};
function renderIntroduccion(){
    borrar();
    containerFiguras.appendChild(defContainer);
    defContainer.classList.add("containerIntro");

    defTitulo.classList.add("tituloIntro");
    defTitulo.innerHTML = formulasArray[0].defTitulo;
    defImg.classList.add("imgIntro");
    defImg.setAttribute("src", formulasArray[0].defImg);
    sectionDtop.classList.add("sectionDtop");
    sectionDtop.append(defTitulo, defImg);

    defAreaTitulo.classList.add("defAreaTitulo");
    defAreaTitulo.innerHTML = formulasArray[0].defAreaTitulo;
    defArea.classList.add("defArea");
    defArea.innerHTML = formulasArray[0].defArea;
    defPerimetroTitulo.classList.add("defPerimetroTitulo");
    defPerimetroTitulo.innerHTML = formulasArray[0].defPerimetroTitulo;
    defPerimetro.classList.add("defPerimetro");
    defPerimetro.innerHTML = formulasArray[0].defPerimetro;
    sectionDmiddle.classList.add("sectionDmiddle");
    sectionDmiddle.append(defAreaTitulo, defArea, defPerimetroTitulo, defPerimetro);

    defNotaTitulo.classList.add("defNotaTitulo");
    defNotaTitulo.innerHTML = formulasArray[0].defNotaTitulo;
    defNota.classList.add("defNota");
    defNota.innerHTML = formulasArray[0].defNota;
    defGuiaTitulo.classList.add("defGuiaTitulo");
    defGuiaTitulo.innerHTML = formulasArray[0].defGuiaTitulo;
    defGuia.classList.add("defGuia");
    defGuia.innerHTML = formulasArray[0].defGuia;
    sectionDbottom.classList.add("sectionDbottom");
    sectionDbottom.append(defNotaTitulo, defNota, defGuiaTitulo, defGuia);

    defContainer.append(sectionDtop, sectionDmiddle, sectionDbottom);
    document.documentElement.scrollTop = 0;
};
function renderFigura(objeto){
    borrar();
    containerFiguras.appendChild(containerResponsive);
    containerResponsive.classList.add("containerResponsive");
    containerResponsive.appendChild(formulaImg);
    formulaImg.classList.add("formulaImg");
    formulaImg.appendChild(imgFigura);
    imgFigura.setAttribute("src", objeto.imgFig);
    containerResponsive.appendChild(perimetroYArea);
    perimetroYArea.classList.add("perimetroYArea");
    perimetroYArea.appendChild(divArea);
    divArea.classList.add("containerFormules")
    pTitleA.classList.add("titlesFormules");
    pTitleA.innerHTML = objeto.titleArea;
    pformulaA.classList.add("textFormule");
    pformulaA.innerHTML = objeto.formulaArea;
    sectionAtop.classList.add("sectionAtop");
    sectionAtop.append(pTitleA, pformulaA);
    divRadioA.classList.add("divRadioA");
    inputRadioAC.setAttribute("type", "radio");
    inputRadioAC.setAttribute("name", "radA");
    inputRadioAC.setAttribute("id", "radAC");
    inputLabelAC.setAttribute("for", "radAC");
    inputLabelAC.innerHTML = "centimetros";
    inputRadioAM.setAttribute("type", "radio");
    inputRadioAM.setAttribute("name", "radA");
    inputRadioAM.setAttribute("id", "radAM");
    inputLabelAM.setAttribute("for", "radAM");
    inputLabelAM.innerHTML = "metros";
    divRadioA.append(inputRadioAC, inputLabelAC, inputRadioAM, inputLabelAM);
    sectionAmiddle.classList.add("sectionAmiddle");
    sectionAmiddle.appendChild(divRadioA);

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
        sectionAmiddle.appendChild(divWin);
    })
    pResultAReg = objeto.resultClA
    pResultA.classList.add("winStyle", pResultAReg);
    btnResultAReg = objeto.btnClA;
    btnResultA.classList.add("btnResult", btnResultAReg);
    btnResultA.innerHTML = "Resultado";
    sectionAbottom.classList.add("sectionAbottom");
    sectionAbottom.append(pResultA, btnResultA);
    divArea.append(sectionAtop, sectionAmiddle, sectionAbottom);
    btnResultA.removeEventListener("click", rutaFA);
    rutaFA = (eval(objeto.funcionArea));
    btnResultA.addEventListener("click", rutaFA);

    //=================================== Perimetro ===================================
    perimetroYArea.appendChild(divPerimetro);
    divPerimetro.classList.add("containerFormules");
    pTitleP.classList.add("titlesFormules");
    pTitleP.innerHTML = objeto.titlePerimetro;
    pformulaP.classList.add("textFormule");
    pformulaP.innerHTML = objeto.formulaPerimetro;
    sectionPtop.classList.add("sectionPtop");
    sectionPtop.append(pTitleP, pformulaP);
    divRadioP.classList.add("divRadioP");
    inputRadioPC.setAttribute("type", "radio");
    inputRadioPC.setAttribute("name", "radP");
    inputRadioPC.setAttribute("id", "radPC");
    inputLabelPC.setAttribute("for", "radPC");
    inputLabelPC.innerHTML = "centimetros";
    inputRadioPM.setAttribute("type", "radio");
    inputRadioPM.setAttribute("name", "radP");
    inputRadioPM.setAttribute("id", "radPM");
    inputLabelPM.setAttribute("for", "radPM");
    inputLabelPM.innerHTML = "metros";
    divRadioP.append(inputRadioPC, inputLabelPC, inputRadioPM, inputLabelPM);
    sectionPmiddle.classList.add("sectionPmiddle");
    sectionPmiddle.appendChild(divRadioP);

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
        sectionPmiddle.appendChild(divWinP);
    });
    pResultPReg = objeto.resultClP;
    pResultP.classList.add("winStyle", pResultPReg);
    btnResultPReg = objeto.btnClP;
    btnResultP.classList.add("btnResult", btnResultPReg);
    btnResultP.innerHTML = "Resultado";
    sectionPbottom.classList.add("sectionPbottom");
    sectionPbottom.append(pResultP, btnResultP);
    divPerimetro.append(sectionPtop, sectionPmiddle, sectionPbottom);
    btnResultP.removeEventListener("click", rutaFP);
    rutaFP = (eval(objeto.funcionPerimetro));
    btnResultP.addEventListener("click", rutaFP);
    document.documentElement.scrollTop = 0;
};
// #################################### triangulo ####################################
// =================================== AreaTriangulo ===================================
function aTriangle(){
    const winTriBaseA = document.querySelector("#winTriBaseA");
    const winTriHeight = document.querySelector("#winTriHeight");
    medSeleccion();
    if(winTriBaseA.value > 0 && winTriHeight.value > 0){
        if(inputRadioAC.checked || inputRadioAM.checked){
            const base = Number(winTriBaseA.value);
            const height = Number(winTriHeight.value);
            const result = (base * height) / 2;
            pResultA.innerHTML = `Area = ${result.toFixed(2)} ${medidaA}`;
        }else{
            pResultA.innerHTML = "Elegir centimetros o metros";
        }
    }else{
        pResultA.innerHTML = "Lados deben de ser mayores a 0";
    }
};
// ================================ PerimeterTriangle ================================
function pTriangle(){
    const winTriSide1 = document.querySelector("#winTriSide1");
    const winTriSide2 = document.querySelector("#winTriSide2");
    const winTriBase = document.querySelector("#winTriBase");
    medSeleccion();
    if(winTriSide1.value > 0 && winTriSide2.value > 0 && winTriBase.value > 0 ){
        if(inputRadioPC.checked || inputRadioPM.checked){
            const lado1 = Number(winTriSide1.value);
            const lado2 = Number(winTriSide2.value);
            const base = Number(winTriBase.value);
            const result = lado1 + lado2 + base;
            pResultP.innerHTML = `Perimetro = ${result.toFixed(2)} ${medidaP}`;
        }else{
            pResultP.innerHTML = "Elegir centimetros o metros";
        }
    }else{
        pResultP.innerHTML = "Lados deben de ser mayores a 0";
    }
}
// #################################### cuadrado ####################################
// =================================== AreaSquare ===================================
function aSquare(){
    const winSqrArea = document.querySelector("#winSqrArea");
    medSeleccion();
    if(winSqrArea.value > 0){
        if(inputRadioAC.checked || inputRadioAM.checked){
            const lado = Number(winSqrArea.value);
            const result = lado * lado;
            pResultA.innerHTML = `Area = ${result.toFixed(2)} ${medidaA}`;
        }else{
            pResultA.innerHTML = "Elegir centimetros o metros";
        }
    }else{
        pResultA.innerHTML = "Lados deben de ser mayores a 0";
    }
}
// =================================== PerimeterSquare ===================================
function pSquare(){
    const winSqrPerimeter = document.querySelector("#winSqrPerimeter");
    medSeleccion();
    if(winSqrPerimeter.value > 0){
        if(inputRadioPC.checked || inputRadioPM.checked){
            const lado = Number(winSqrPerimeter.value);
            const result = lado * 4;
            pResultP.innerHTML = `Perimetro = ${result.toFixed(2)} ${medidaP}`;
        }else{
            pResultP.innerHTML = "Elegir centimetros o metros";
        }
    }else{
        pResultP.innerHTML = "Lados deben de ser mayores a 0";
    }
}
// #################################### Rectangulo ####################################
// ----------------- AreaRectangulo -----------------
function aRectangulo(){ 
    const winRecABase = document.querySelector("#winRecABase");
    const winRecAAltura = document.querySelector("#winRecAAltura");
    medSeleccion();
    if(winRecABase.value > 0 && winRecAAltura.value > 0){
        if(inputRadioAC.checked || inputRadioAM.checked){
            const base = Number(winRecABase.value);
            const altura = Number(winRecAAltura.value);
            const result = base * altura;
            pResultA.innerHTML = `Area = ${result.toFixed(2)} ${medidaA}`;
        }else{
            pResultA.innerHTML = "Elegir centimetros o metros";
        }
    }else{
        pResultA.innerHTML = "Lados deben de ser mayores a 0";
    }
}
// ----------------- PerimeterRectangulo -----------------
function pRectangulo(){
    const winRecPBase = document.querySelector("#winRecPBase");
    const winRecPLado = document.querySelector("#winRecPLado");
    medSeleccion();
    if(winRecPBase.value > 0 && winRecPLado.value > 0) {
        if(inputRadioPC.checked || inputRadioPM.checked){
            const base = Number(winRecPBase.value);
            const lado = Number(winRecPLado.value);
            const result = (base * 2) + (lado * 2);
            pResultP.innerHTML = `Perimetro = ${result.toFixed(2)} ${medidaP}`;
        }else{
            pResultP.innerHTML = "Elegir centimetros o metros";
        }
    }else{
        pResultP.innerHTML = "Lados deben de ser mayores a 0";
    }
}
// #################################### Paralelogramo ####################################
// ----------------- AreaParalelogramo -----------------
function aParalelogramo(){
    const winParABase = document.querySelector("#winParABase");
    const winParAltura = document.querySelector("#winParAltura");
    medSeleccion();
    if(winParABase.value > 0 && winParAltura.value > 0){
        if(inputRadioAC.checked || inputRadioAM.checked){
            const base = Number(winParABase.value);
            const altura = Number(winParAltura.value);
            const result = base * altura;
            pResultA.innerHTML = `Area = ${result.toFixed(2)} ${medidaA}`;
        }else{
            pResultA.innerHTML = "Elegir centimetros o metros";
        }
    }else{
        pResultA.innerHTML = "Lados deben de ser mayores a 0";
    }
}
// ----------------- PerimeterParalelogramo -----------------
function pParalelogramo(){
    const winParPBase = document.querySelector("#winParPBase");
    const winParPAltura = document.querySelector("#winParPAltura");
    medSeleccion();
    if(winParPBase.value > 0 && winParPAltura.value > 0) {
        if(inputRadioPC.checked || inputRadioPM.checked){
            const base = Number(winParPBase.value);
            const lado = Number(winParPAltura.value);
            const result = 2 * (base + lado);
            pResultP.innerHTML = `Perimetro = ${result.toFixed(2)} ${medidaP}`;
        }else{
            pResultP.innerHTML = "Elegir centimetros o metros";
        }
    }else{
        pResultP.innerHTML = "Lados deben de ser mayores a 0";
    }
}
// #################################### Trapecio ####################################
// ----------------- AreaTrapecio -----------------
function aTrapecio(){
    const winTrapAB = document.querySelector("#winTrapAB");
    const winTrapAb = document.querySelector("#winTrapAb");
    const winTrapAa = document.querySelector("#winTrapAa");
    medSeleccion();
    if(winTrapAB.value > 0 && winTrapAb.value > 0 && winTrapAa.value > 0){
        if(inputRadioAC.checked || inputRadioAM.checked){
            const baseM = Number(winTrapAB.value);
            const basem = Number(winTrapAb.value);
            const altura = Number(winTrapAa.value);
            const result = ((baseM + basem) /2) * altura;
            pResultA.innerHTML = `Area = ${result.toFixed(2)} ${medidaA}`;
        }else{
            pResultA.innerHTML = "Elegir centimetros o metros";
        }
    }else{
        pResultA.innerHTML = "Lados deben de ser mayores a 0";
    }
}
// ----------------- PerimeterTrapecio -----------------
function pTrapecio(){
    const winL1PTrap = document.querySelector("#winL1PTrap");
    const winL2PTrap = document.querySelector("#winL2PTrap");
    const winL3PTrap = document.querySelector("#winL3PTrap");
    const winL4PTrap = document.querySelector("#winL4PTrap");
    medSeleccion();
    if(winL1PTrap.value > 0 && winL2PTrap.value > 0 && winL3PTrap.value > 0 && winL4PTrap.value > 0) {
        if(inputRadioPC.checked || inputRadioPM.checked){
            const l1 = Number(winL1PTrap.value);
            const l2 = Number(winL2PTrap.value);
            const l3 = Number(winL3PTrap.value);
            const l4 = Number(winL4PTrap.value);
            const result = l1 + l2 + l3 + l4;
            pResultP.innerHTML = `Perimetro = ${result.toFixed(2)} ${medidaP}`;
        }else{
            pResultP.innerHTML = "Elegir centimetros o metros";
        }
    }else{
        pResultP.innerHTML = "Lados deben de ser mayores a 0";
    }
}
// #################################### rombo ####################################
// ----------------- AreaRombo -----------------
function aRombo(){
    const winD1A = document.querySelector("#winD1A");
    const winD2A = document.querySelector("#winD2A");
    medSeleccion();
    if(winD1A.value > 0 && winD2A.value > 0){
        if(inputRadioAC.checked || inputRadioAM.checked){
            const d1 = Number(winD1A.value);
            const d2 = Number(winD2A.value);
            const result = (d1 * d2) / 2;
            pResultA.innerHTML = `Area = ${result.toFixed(2)} ${medidaA}`;
        }else{
            pResultA.innerHTML = "Elegir centimetros o metros";
        }
    }else{
        pResultA.innerHTML = "Lados deben de ser mayores a 0";
    }
}
// ----------------- PerimeterRombo -----------------
function pRombo(){
    const winPRomL1 = document.querySelector("#winPRomL1");
    const winPRomL2 = document.querySelector("#winPRomL2");
    const winPRomL3 = document.querySelector("#winPRomL3");
    const winPRomL4 = document.querySelector("#winPRomL4");
    medSeleccion();
    if(winPRomL1.value > 0 && winPRomL2.value > 0 && winPRomL3.value > 0 && winPRomL4.value > 0) {
        if(inputRadioPC.checked || inputRadioPM.checked){
            const l1 = Number(winPRomL1.value);
            const l2 = Number(winPRomL2.value);
            const l3 = Number(winPRomL3.value);
            const l4 = Number(winPRomL4.value);
            const result = l1 + l2 + l3 + l4;
            pResultP.innerHTML = `Perimetro = ${result.toFixed(2)} ${medidaP}`;
        }else{
            pResultP.innerHTML = "Elegir centimetros o metros";
        }
    }else{
        pResultP.innerHTML = "Lados deben de ser mayores a 0";
    }
}
// #################################### Pentagono ####################################
// ----------------- AreaPentagono -----------------
function aPentagono(){
    const winAPPent = document.querySelector("#winAPPent");
    const winAApotPent = document.querySelector("#winAApotPent");
    medSeleccion();
    if(winAPPent.value > 0 && winAApotPent.value > 0){
        if(inputRadioAC.checked || inputRadioAM.checked){
            const perim = Number(winAPPent.value);
            const apotem = Number(winAApotPent.value);
            const result = (perim * apotem) / 2;
            pResultA.innerHTML = `Area = ${result.toFixed(2)} ${medidaA}`;
        }else{
            pResultA.innerHTML = "Elegir centimetros o metros";
        }
    }else{
        pResultA.innerHTML = "Lados deben de ser mayores a 0";
    }
}
// ----------------- PerimeterPentagono -----------------
function pPentagono(){
    const winPPenL = document.querySelector("#winPPenL");
    medSeleccion();
    if(winPPenL.value > 0) {
        if(inputRadioPC.checked || inputRadioPM.checked){
            const lado = Number(winPPenL.value);
            const result = 5 * lado;
            pResultP.innerHTML = `Perimetro = ${result.toFixed(2)} ${medidaP}`;
        }else{
            pResultP.innerHTML = "Elegir centimetros o metros";
        }
    }else{
        pResultP.innerHTML = "Lados deben de ser mayores a 0";
    }
}
// #################################### Hexagono ####################################
// ----------------- AreaHexagono -----------------
function aHexagono(){
    const winAPHex = document.querySelector("#winAPHex");
    const winAApotHex = document.querySelector("#winAApotHex");
    medSeleccion();
    if(winAPHex.value > 0 && winAApotHex.value > 0){
        if(inputRadioAC.checked || inputRadioAM.checked){
            const perim = Number(winAPHex.value);
            const apotem = Number(winAApotHex.value);
            const result = (perim * apotem) / 2;
            pResultA.innerHTML = `Area = ${result.toFixed(2)} ${medidaA}`;
        }else{
            pResultA.innerHTML = "Elegir centimetros o metros";
        }
    }else{
        pResultA.innerHTML = "Lados deben de ser mayores a 0";
    }
}
// ----------------- PerimeterHexagono -----------------
function pHexagono(){
    const winPHexL = document.querySelector("#winPHexL");
    medSeleccion();
    if(winPHexL.value > 0) {
        if(inputRadioPC.checked || inputRadioPM.checked){
            const lado = Number(winPHexL.value);
            const result = 6 * lado;
            pResultP.innerHTML = `Perimetro = ${result.toFixed(2)} ${medidaP}`;
        }else{
            pResultP.innerHTML = "Elegir centimetros o metros";
        }
    }else{
        pResultP.innerHTML = "Lados deben de ser mayores a 0";
    }
}
// #################################### Circunferencia ####################################
// ----------------- AreaCirculo -----------------
function aCirculo(){
    const winCircArea = document.querySelector("#winCircArea");
    medSeleccion();
    if(winCircArea.value > 0){
        if(inputRadioAC.checked || inputRadioAM.checked){
            const radio = Number(winCircArea.value);
            const PI = Math.PI.toFixed(2)
            const result = Math.pow(radio, 2) * PI;
            pResultA.innerHTML = `Area = ${result.toFixed(2)} ${medidaA}`;
        }else{
            pResultA.innerHTML = "Elegir centimetros o metros";
        }
    }else{
        pResultA.innerHTML = "Radio debe de ser mayor a 0";
    }
}
// ----------------- Circunferencia -----------------
function circunferencia(){
    const winCircunferencia = document.querySelector("#winCircunferencia");
    medSeleccion();
    if(winCircunferencia.value > 0){
        if(inputRadioPC.checked || inputRadioPM.checked){
            const radio = Number(winCircunferencia.value);
            const PI = Math.PI.toFixed(2);
            const result = PI * (radio * 2);
            pResultP.innerHTML = `Perimetro = ${result.toFixed(2)} ${medidaP}`;
        }else{
            pResultP.innerHTML = "Elegir centimetros o metros";
        }
    }else{
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



