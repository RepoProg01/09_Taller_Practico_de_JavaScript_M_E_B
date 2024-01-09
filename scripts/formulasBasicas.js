
const body = document.querySelector(".body");
const figuras = document.querySelector(".figuras");
const listIndex = document.querySelector(".listIndex");
const blurC = document.querySelector(".blurC");

figuras.addEventListener("click", figurasFnc);
blurC.addEventListener("click", blurFnc);

const seleccion = document.querySelectorAll(".seleccion");
seleccion.forEach(element => {
    element.addEventListener("click", selecFnc);
});

function figurasFnc(){
    listIndex.scrollTop = 0;
    listIndex.classList.toggle("listIndexShow");
    blurC.classList.toggle("off");
    body.classList.toggle("noMove");
}
//----Funcion opacar background----------------------------------------------------------
function blurFnc(){
    listIndex.classList.remove("listIndexShow");
    blurC.classList.add("off");
    body.classList.remove("noMove");
}
//----Funcion de seleccion en menu-------------------------------------------------------
function selecFnc(event){
    listIndex.classList.remove("listIndexShow");
    const figura = event.target.innerText.toLowerCase();

    const figSelect = formulasArray.find(obj => obj.id === figura);
    if(figSelect){
        renderFigura(figSelect);
    }else{
        renderIntroduccion();
    };
    blurFnc();

    // listIndex.classList.remove("listIndexShow");
    // const figura = event.target.innerText.toLowerCase();
    // const cid = document.getElementById(figura);
    // const topOffset = cid.offsetTop - 70;
    // window.scroll(0, topOffset);
    // blurFnc();
}
//----Funciones de borrado, activacion y desactivacion de bentanas y radios--------------
function borrar(){
    // ---- Limpieza de valor de medida ----
    medidaA = "";
    medidaP = "";
    // ----  ----
    sectionAmiddle.innerHTML = "";
    sectionPmiddle.innerHTML = "";
    // ---- Limpieza de Ventanas de mensajes y borrado de clase ----
    pResultA.innerHTML = "";
    pResultA.classList.remove(pResultAReg);
    pResultP.innerHTML = "";
    pResultP.classList.remove(pResultPReg);
    // ---- Borrado de clases y abilitar botones ----
    btnResultA.classList.remove(btnResultAReg);
    btnResultP.classList.remove(btnResultPReg);
    btnClearA.classList.remove(btnClearAReg);
    btnClearP.classList.remove(btnClearPReg);
    btnResultA.disabled = false;
    btnResultA.classList.remove("btnInactive");
    btnResultP.disabled = false;
    btnResultP.classList.remove("btnInactive");
    // ----  ----
    containerFiguras.innerHTML = "";
    divPerimetro.innerHTML = "";
    divArea.innerHTML = "";
    // ---- Deseleccionar radios ----
    inputRadioAC.checked = false;
    inputRadioAM.checked = false;
    inputRadioPC.checked = false;
    inputRadioPM.checked = false;
    // ---- Abilitar radios ----
    inputRadioAC.disabled = false;
    inputRadioAM.disabled = false;
    inputRadioPC.disabled = false;
    inputRadioPM.disabled = false;
};
//--- funciones para deshabilitar ventanas y botones de Area y Perimetro-----------------
function disableAOptions(){
    winAW1.disabled = true;
    winAW2.disabled = true;

    btnResultA.disabled = true;
    btnResultA.classList.remove("btnResult");
    btnResultA.classList.add("btnInactive");
}
function disablePOptions(){
    winPW1.disabled = true;
    winPW2.disabled = true;
    winPW3.disabled = true;

    btnResultP.disabled = true;
    btnResultP.classList.remove("btnResult");
    btnResultP.classList.add("btnInactive");
}
//--- funciones para limpiar y habilitar radios ventanas y botones ----------------------
function clearAFig(){
    if(idFig == "triangulo" || idFig == "rectangulo" || idFig == "paralelogramo" || idFig == "rombo" || idFig == "pentagono" || idFig == "hexagono"){
        winAW1.disabled = false;
        winAW2.disabled = false;
        winAW1.value = "";
        winAW2.value = "";
        winAW1.classList.remove("resultColor");
        winAW2.classList.remove("resultColor");
    }else if(idFig == "cuadrado"){
        winAW1.disabled = false;
        winAW1.value = "";
        winAW1.classList.remove("resultColor");
    }else if(idFig == "trapecio"){
        winAW1.disabled = false;
        winAW2.disabled = false;
        winAW3.disabled = false;
        winAW1.value = "";
        winAW2.value = "";
        winAW3.value = "";
        winAW1.classList.remove("resultColor");
        winAW2.classList.remove("resultColor");
        winAW3.classList.remove("resultColor");
    }else if(idFig == "circulo"){
        winAW1.disabled = false;
        winAW1.value = "";
        winAW1.classList.remove("resultColor");
    };
    medDisableUncheckedA();
    abilitarIntercambiarA();
    pResultA.innerHTML = ""; 
};
function clearPFig(){
    if(idFig == "triangulo" ){
        winPW1.disabled = false;
        winPW2.disabled = false;
        winPW3.disabled = false;
        winPW1.value = "";
        winPW2.value = "";
        winPW3.value = "";
        winPW1.classList.remove("resultColor");
        winPW2.classList.remove("resultColor");
        winPW3.classList.remove("resultColor");
    }else if(idFig == "cuadrado" || idFig == "pentagono" || idFig == "hexagono" || idFig == "circulo" || idFig == "rombo"){
        winPW1.disabled = false;
        winPW1.value = "";
        winPW1.classList.remove("resultColor");
    }else if(idFig == "rectangulo" || idFig == "paralelogramo"){
        winPW1.disabled = false;
        winPW2.disabled = false;
        winPW1.value = "";
        winPW2.value = "";
        winPW1.classList.remove("resultColor");
        winPW2.classList.remove("resultColor");
    }else if(idFig == "trapecio"){
        winPW1.disabled = false;
        winPW2.disabled = false;
        winPW3.disabled = false;
        winPW4.disabled = false;
        winPW1.value = "";
        winPW2.value = "";
        winPW3.value = "";
        winPW4.value = "";
        winPW1.classList.remove("resultColor");
        winPW2.classList.remove("resultColor");
        winPW3.classList.remove("resultColor");
        winPW4.classList.remove("resultColor");
    };
    medDisableUncheckedP();
    abilitarIntercambiarP();
    pResultP.innerHTML = ""; 
};
function medDisableUncheckedA(){
    // ---- Abilitar radios ----
    inputRadioAC.disabled = false;
    inputRadioAM.disabled = false;
    // ---- Limpiar radios ----
    inputRadioAC.checked = false;
    inputRadioAM.checked = false;
};
function medDisableUncheckedP(){
    // ---- Abilitar radios ----
    inputRadioPC.disabled = false;
    inputRadioPM.disabled = false;
    // ---- Limpiar radios ----
    inputRadioPC.checked = false;
    inputRadioPM.checked = false;
};
function abilitarIntercambiarA(){
    btnResultA.disabled = false;
    btnResultA.classList.remove("btnInactive");
    btnResultA.classList.add("btnResult");
};
function abilitarIntercambiarP(){
    btnResultP.disabled = false;
    btnResultP.classList.remove("btnInactive");
    btnResultP.classList.add("btnResult");
}
//----Funcion asignaciones y renderizado-------------------------------------------------
function asignacionesWindowsRadios(){
    if(idFig == "triangulo"){
        winAW1 = document.querySelector("#winTriBaseA");
        winAW2 = document.querySelector("#winTriHeight");

        winPW1 = document.querySelector("#winTriSide1");
        winPW2 = document.querySelector("#winTriSide2");
        winPW3 = document.querySelector("#winTriBase");
    }else if(idFig == "cuadrado"){
        winAW1 = document.querySelector("#winSqrArea");

        winPW1 = document.querySelector("#winSqrPerimeter");
    }else if(idFig == "rectangulo"){
        winAW1 = document.querySelector("#winRecABase");
        winAW2 = document.querySelector("#winRecAAltura");

        winPW1 = document.querySelector("#winRecPBase");
        winPW2 = document.querySelector("#winRecPLado");
    }else if(idFig == "paralelogramo"){
        winAW1 = document.querySelector("#winParABase");
        winAW2 = document.querySelector("#winParAltura");

        winPW1 = document.querySelector("#winParPBase");
        winPW2 = document.querySelector("#winParPAltura");
    }else if(idFig == "trapecio"){
        winAW1 = document.querySelector("#winTrapAB");
        winAW2 = document.querySelector("#winTrapAb");
        winAW3 = document.querySelector("#winTrapAa");

        winPW1 = document.querySelector("#winL1PTrap");
        winPW2 = document.querySelector("#winL2PTrap");
        winPW3 = document.querySelector("#winL3PTrap");
        winPW4 = document.querySelector("#winL4PTrap");
    }else if(idFig == "rombo"){
        winAW1 = document.querySelector("#winD1A");
        winAW2 = document.querySelector("#winD2A");

        winPW1 = document.querySelector("#winPRomL1");
    }else if(idFig == "pentagono"){
        winAW1 = document.querySelector("#winAPPent");
        winAW2 = document.querySelector("#winAApotPent");

        winPW1 = document.querySelector("#winPPenL");
    }else if(idFig == "hexagono"){
        winAW1 = document.querySelector("#winAPHex");
        winAW2 = document.querySelector("#winAApotHex");

        winPW1 = document.querySelector("#winPHexL");
    }else if(idFig == "circulo"){
        winAW1 = document.querySelector("#winCircArea");

        winPW1 = document.querySelector("#winCircunferencia");
    }
};
//----Funciones seleccion y vaciado medida-----------------------------------------------
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
function medEnableDisableA(){
    if(inputRadioAC.checked){
        inputRadioAM.disabled = true;
    }else if(inputRadioAM.checked){
        inputRadioAC.disabled = true;
    };
};
function medEnableDisableP(){
    if(inputRadioPC.checked){
        inputRadioPM.disabled = true;
    }else if(inputRadioPM.checked){
        inputRadioPC.disabled = true;
    };
};
//----Funciones renderizado--------------------------------------------------------------
function renderIntroduccion(){
    borrar();
    containerFiguras.appendChild(containerIntro);

    containerIntro.classList.add("containerIntro");

    defTitulo.classList.add("tituloIntro");
    defTitulo.innerHTML = formulasArray[0].defTitulo;
    defImg.classList.add("imgIntro");
    defImg.setAttribute("src", formulasArray[0].defImg);
    sectionDtop.classList.add("sectionDtop", "secD");
    sectionDtop.append(defTitulo, defImg);

    defAreaTitulo.classList.add("defAreaTitulo", "defT");
    defAreaTitulo.innerHTML = formulasArray[0].defAreaTitulo;
    defArea.classList.add("defArea", "defC");
    defArea.innerHTML = formulasArray[0].defArea;
    defPerimetroTitulo.classList.add("defPerimetroTitulo", "defT");
    defPerimetroTitulo.innerHTML = formulasArray[0].defPerimetroTitulo;
    defPerimetro.classList.add("defPerimetro", "defC");
    defPerimetro.innerHTML = formulasArray[0].defPerimetro;
    sectionDmiddle.classList.add("sectionDmiddle", "secD");
    sectionDmiddle.append(defAreaTitulo, defArea, defPerimetroTitulo, defPerimetro);

    defNotaTitulo.classList.add("defNotaTitulo", "defT");
    defNotaTitulo.innerHTML = formulasArray[0].defNotaTitulo;
    defNota.classList.add("defNota", "defC");
    defNota.innerHTML = formulasArray[0].defNota;
    defGuiaTitulo.classList.add("defGuiaTitulo", "defT");
    defGuiaTitulo.innerHTML = formulasArray[0].defGuiaTitulo;
    defGuia.classList.add("defGuia", "defC");
    defGuia.innerHTML = formulasArray[0].defGuia;
    sectionDbottom.classList.add("sectionDbottom", "secD");
    sectionDbottom.append(defNotaTitulo, defNota, defGuiaTitulo, defGuia);

    containerIntro.append(sectionDtop, sectionDmiddle, sectionDbottom);
    document.documentElement.scrollTop = 0;
};
function renderFigura(objeto){
    borrar();
    idFig = objeto.id;

    containerFiguras.appendChild(containerResponsive);
    containerResponsive.classList.add("containerResponsive");

    containerResponsive.appendChild(formulaImg);
    formulaImg.classList.add("formulaImg");
    
    formulaImg.appendChild(titleFig);
    titleFig.classList.add("titleFig");
    titleFig.innerHTML = objeto.titleFig;

    formulaImg.appendChild(imgFigura);
    imgFigura.setAttribute("src", objeto.imgFig);

    containerResponsive.appendChild(perimetroYAreaDiv);
    perimetroYAreaDiv.classList.add("perimetroYArea");
    perimetroYAreaDiv.appendChild(divArea);
    divArea.classList.add("containerFormules");

    pTitleA.classList.add("titlesFormules");
    pTitleA.innerHTML = objeto.titleArea;
    pformulaA.classList.add("textFormule");
    pformulaA.innerHTML = "Calculadora";
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
    });

    btnClearAReg = objeto.btn2ClA;
    btnClearA.classList.add("btnClear", btnClearAReg);
    btnClearA.innerHTML = "Borrar";

    btnResultAReg = objeto.btnClA;
    btnResultA.classList.add("btnResult", btnResultAReg);
    btnResultA.innerHTML = "Resultado";

    btnClearA.removeEventListener("click", rutaFAClear);
    rutaFAClear = (eval(objeto.clearWindowA));
    btnClearA.addEventListener("click", rutaFAClear);
    
    btnResultA.removeEventListener("click", rutaFA);
    rutaFA = (eval(objeto.funcionArea));
    btnResultA.addEventListener("click", rutaFA);

    pResultAReg = objeto.resultClA
    pResultA.classList.add("winStyle", pResultAReg);
    btnResultAReg = objeto.btnClA;
    btnResultA.classList.add("btnResult", btnResultAReg);
    btnResultA.innerHTML = "Resultado";

    sectionAbottom.classList.add("sectionAbottom");
    sectionAbottom.append(pResultA, btnClearA, btnResultA);
    divArea.append(sectionAtop, sectionAmiddle, sectionAbottom);

    //=================================== Perimetro ===================================
    perimetroYAreaDiv.appendChild(divPerimetro);

    divPerimetro.classList.add("containerFormules");

    pTitleP.classList.add("titlesFormules");
    pTitleP.innerHTML = objeto.titlePerimetro;
    pformulaP.classList.add("textFormule");
    pformulaP.innerHTML = "Calculadora";
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

    btnClearPReg = objeto.btn2ClP;
    btnClearP.classList.add("btnClear", btnClearPReg);
    btnClearP.innerHTML = "Borrar";

    btnResultPReg = objeto.btnClP;
    btnResultP.classList.add("btnResult", btnResultPReg);
    btnResultP.innerHTML = "Resultado";

    btnClearP.removeEventListener("click", rutaFPClear);
    rutaFPClear = (eval(objeto.clearWindowP));
    btnClearP.addEventListener("click", rutaFPClear);
    
    btnResultP.removeEventListener("click", rutaFP);
    rutaFP = (eval(objeto.funcionPerimetro));
    btnResultP.addEventListener("click", rutaFP);

    pResultPReg = objeto.resultClP;
    pResultP.classList.add("winStyle", pResultPReg);
   
    sectionPbottom.classList.add("sectionPbottom");
    sectionPbottom.append(pResultP, btnClearP, btnResultP);
    divPerimetro.append(sectionPtop, sectionPmiddle, sectionPbottom);

    asignacionesWindowsRadios();
    document.documentElement.scrollTop = 0;
};
//----Operaciones -----------------------------------------------------------------------
// ################################### triangulo ########################################
// ================================= AreaTriangulo ======================================
function aTriangle(){
    if(winAW1.value > 0 && winAW2.value > 0){
        if(inputRadioAC.checked || inputRadioAM.checked){
            medSeleccion();
            const base = Number(winAW1.value);
            const height = Number(winAW2.value);
            const result = (base * height) / 2;
            medEnableDisableA();
            disableAOptions(); 
            winAW1.classList.add("resultColor");
            winAW2.classList.add("resultColor");
            pResultA.innerHTML = `Area = ${result.toFixed(2)} ${medidaA}`;
        }else{
            pResultA.innerHTML = "Elegir centimetros o metros";
        }
    }else{
        pResultA.innerHTML = "Lados deben de ser mayores a 0";
    };
};
// =============================== PerimeterTriangle ====================================
function pTriangle(){
    if(winPW1.value > 0 && winPW2.value > 0 && winPW3.value > 0 ){
        if(inputRadioPC.checked || inputRadioPM.checked){
            medSeleccion();
            const lado1 = Number(winPW1.value);
            const lado2 = Number(winPW2.value);
            const base = Number(winPW3.value);
            const result = lado1 + lado2 + base;
            medEnableDisableP();
            disablePOptions();
            winPW1.classList.add("resultColor");
            winPW2.classList.add("resultColor");
            winPW3.classList.add("resultColor");
            pResultP.innerHTML = `Perimetro = ${result.toFixed(2)} ${medidaP}`;
        }else{
            pResultP.innerHTML = "Elegir centimetros o metros";
        }
    }else{
        pResultP.innerHTML = "Lados deben de ser mayores a 0";
    }
}
// #################################### cuadrado ########################################
// =================================== AreaSquare =======================================
function aSquare(){
    if(winAW1.value > 0){
        if(inputRadioAC.checked || inputRadioAM.checked){
            medSeleccion();
            const lado = Number(winAW1.value);
            const result = lado * lado;
            medEnableDisableA();
            disableAOptions(); 
            winAW1.classList.add("resultColor");
            pResultA.innerHTML = `Area = ${result.toFixed(2)} ${medidaA}`;
        }else{
            pResultA.innerHTML = "Elegir centimetros o metros";
        }
    }else{
        pResultA.innerHTML = "Lados deben de ser mayores a 0";
    }
}
// ================================= PerimeterSquare ====================================
function pSquare(){
    if(winPW1.value > 0){
        if(inputRadioPC.checked || inputRadioPM.checked){
            medSeleccion();
            const lado = Number(winPW1.value);
            const result = lado * 4;
            medEnableDisableP();
            disablePOptions();
            winPW1.classList.add("resultColor");
            pResultP.innerHTML = `Perimetro = ${result.toFixed(2)} ${medidaP}`;
        }else{
            pResultP.innerHTML = "Elegir centimetros o metros";
        }
    }else{
        pResultP.innerHTML = "Lados deben de ser mayores a 0";
    }
}
// ################################## Rectangulo ########################################
// ================================ AreaRectangulo ======================================
function aRectangulo(){ 
    if(winAW1.value > 0 && winAW2.value > 0){
        if(inputRadioAC.checked || inputRadioAM.checked){
            medSeleccion();
            const base = Number(winAW1.value);
            const altura = Number(winAW2.value);
            const result = base * altura;
            medEnableDisableA();
            disableAOptions(); 
            winAW1.classList.add("resultColor");
            winAW2.classList.add("resultColor");
            pResultA.innerHTML = `Area = ${result.toFixed(2)} ${medidaA}`;
        }else{
            pResultA.innerHTML = "Elegir centimetros o metros";
        }
    }else{
        pResultA.innerHTML = "Lados deben de ser mayores a 0";
    }
}
// ============================== PerimeterRectangulo ===================================
function pRectangulo(){
    if(winPW1.value > 0 && winPW2.value > 0) {
        if(inputRadioPC.checked || inputRadioPM.checked){
            medSeleccion();
            const base = Number(winPW1.value);
            const lado = Number(winPW2.value);
            const result = (base * 2) + (lado * 2);
            medEnableDisableP();
            disablePOptions();
            winPW1.classList.add("resultColor");
            winPW2.classList.add("resultColor");
            pResultP.innerHTML = `Perimetro = ${result.toFixed(2)} ${medidaP}`;
        }else{
            pResultP.innerHTML = "Elegir centimetros o metros";
        }
    }else{
        pResultP.innerHTML = "Lados deben de ser mayores a 0";
    }
}
// ################################# Paralelogramo ######################################
// =============================== AreaParalelogramo ====================================
function aParalelogramo(){
    if(winAW1.value > 0 && winAW2.value > 0){
        if(inputRadioAC.checked || inputRadioAM.checked){
            medSeleccion();
            const base = Number(winAW1.value);
            const altura = Number(winAW2.value);
            const result = base * altura;
            medEnableDisableA();
            disableAOptions(); 
            winAW1.classList.add("resultColor");
            winAW2.classList.add("resultColor");
            pResultA.innerHTML = `Area = ${result.toFixed(2)} ${medidaA}`;
        }else{
            pResultA.innerHTML = "Elegir centimetros o metros";
        }
    }else{
        pResultA.innerHTML = "Lados deben de ser mayores a 0";
    }
}
// ============================= PerimeterParalelogramo =================================
function pParalelogramo(){
    if(winPW1.value > 0 && winPW2.value > 0) {
        if(inputRadioPC.checked || inputRadioPM.checked){
            medSeleccion();
            const base = Number(winPW1.value);
            const lado = Number(winPW2.value);
            const result = 2 * (base + lado);
            medEnableDisableP();
            disablePOptions();
            winPW1.classList.add("resultColor");
            winPW2.classList.add("resultColor");
            pResultP.innerHTML = `Perimetro = ${result.toFixed(2)} ${medidaP}`;
        }else{
            pResultP.innerHTML = "Elegir centimetros o metros";
        }
    }else{
        pResultP.innerHTML = "Lados deben de ser mayores a 0";
    }
}
// #################################### Trapecio ########################################
// ================================== AreaTrapecio ======================================
function aTrapecio(){
    if(winAW1.value > 0 && winAW2.value > 0 && winAW3.value > 0){
        if(inputRadioAC.checked || inputRadioAM.checked){
            medSeleccion();
            const baseM = Number(winAW1.value);
            const basem = Number(winAW2.value);
            const altura = Number(winAW3.value);
            const result = ((baseM + basem) /2) * altura;
            medEnableDisableA();
            disableAOptions(); 
            winAW1.classList.add("resultColor");
            winAW2.classList.add("resultColor");
            winAW3.classList.add("resultColor");
            pResultA.innerHTML = `Area = ${result.toFixed(2)} ${medidaA}`;
        }else{
            pResultA.innerHTML = "Elegir centimetros o metros";
        }
    }else{
        pResultA.innerHTML = "Lados deben de ser mayores a 0";
    }
}
// ================================ PerimeterTrapecio ===================================
function pTrapecio(){
    if(winPW1.value > 0 && winPW2.value > 0 && winPW3.value > 0 && winPW4.value > 0) {
        if(inputRadioPC.checked || inputRadioPM.checked){
            medSeleccion();
            const l1 = Number(winPW1.value);
            const l2 = Number(winPW2.value);
            const l3 = Number(winPW3.value);
            const l4 = Number(winPW4.value);
            const result = l1 + l2 + l3 + l4;
            medEnableDisableP();
            disablePOptions();
            winPW1.classList.add("resultColor");
            winPW2.classList.add("resultColor");
            winPW3.classList.add("resultColor");
            winPW4.classList.add("resultColor");
            pResultP.innerHTML = `Perimetro = ${result.toFixed(2)} ${medidaP}`;
        }else{
            pResultP.innerHTML = "Elegir centimetros o metros";
        }
    }else{
        pResultP.innerHTML = "Lados deben de ser mayores a 0";
    }
}
// ##################################### rombo ##########################################
// ==================================== AreaRombo =======================================
function aRombo(){
    if(winAW1.value > 0 && winAW2.value > 0){
        if(inputRadioAC.checked || inputRadioAM.checked){
            medSeleccion();
            const d1 = Number(winAW1.value);
            const d2 = Number(winAW2.value);
            const result = (d1 * d2) / 2;
            medEnableDisableA();
            disableAOptions(); 
            winAW1.classList.add("resultColor");
            winAW2.classList.add("resultColor");
            pResultA.innerHTML = `Area = ${result.toFixed(2)} ${medidaA}`;
        }else{
            pResultA.innerHTML = "Elegir centimetros o metros";
        }
    }else{
        pResultA.innerHTML = "Lados deben de ser mayores a 0";
    }
}
// ================================== PerimeterRombo ====================================
function pRombo(){
    if(winPW1.value > 0) {
        if(inputRadioPC.checked || inputRadioPM.checked){
            medSeleccion();
            const l1 = Number(winPW1.value);
            const result = 4 * l1;
            medEnableDisableP();
            disablePOptions();
            winPW1.classList.add("resultColor");
            pResultP.innerHTML = `Perimetro = ${result.toFixed(2)} ${medidaP}`;
        }else{
            pResultP.innerHTML = "Elegir centimetros o metros";
        }
    }else{
        pResultP.innerHTML = "Lados deben de ser mayores a 0";
    }
}
// ################################### Pentagono ########################################
// ================================= AreaPentagono ======================================
function aPentagono(){
    if(winAW1.value > 0 && winAW2.value > 0){
        if(inputRadioAC.checked || inputRadioAM.checked){
            medSeleccion();
            const perim = Number(winAW1.value);
            const apotem = Number(winAW2.value);
            const result = (perim * apotem) / 2;
            medEnableDisableA();
            disableAOptions(); 
            winAW1.classList.add("resultColor");
            winAW2.classList.add("resultColor");
            pResultA.innerHTML = `Area = ${result.toFixed(2)} ${medidaA}`;
        }else{
            pResultA.innerHTML = "Elegir centimetros o metros";
        }
    }else{
        pResultA.innerHTML = "Lados deben de ser mayores a 0";
    }
}
// ================================ PerimeterPentagono ==================================
function pPentagono(){
    if(winPW1.value > 0) {
        if(inputRadioPC.checked || inputRadioPM.checked){
            medSeleccion();
            const lado = Number(winPW1.value);
            const result = 5 * lado;
            medEnableDisableP();
            disablePOptions();
            winPW1.classList.add("resultColor");
            pResultP.innerHTML = `Perimetro = ${result.toFixed(2)} ${medidaP}`;
        }else{
            pResultP.innerHTML = "Elegir centimetros o metros";
        }
    }else{
        pResultP.innerHTML = "Lados deben de ser mayores a 0";
    }
}
// #################################### Hexagono ########################################
// ================================== AreaHexagono ======================================
function aHexagono(){
    if(winAW1.value > 0 && winAW2.value > 0){
        if(inputRadioAC.checked || inputRadioAM.checked){
            medSeleccion();
            const perim = Number(winAW1.value);
            const apotem = Number(winAW2.value);
            const result = (perim * apotem) / 2;
            medEnableDisableA();
            disableAOptions(); 
            winAW1.classList.add("resultColor");
            winAW2.classList.add("resultColor");
            pResultA.innerHTML = `Area = ${result.toFixed(2)} ${medidaA}`;
        }else{
            pResultA.innerHTML = "Elegir centimetros o metros";
        }
    }else{
        pResultA.innerHTML = "Lados deben de ser mayores a 0";
    }
}
// ================================ PerimeterHexagono ===================================
function pHexagono(){
    if(winPW1.value > 0) {
        if(inputRadioPC.checked || inputRadioPM.checked){
            medSeleccion();
            const lado = Number(winPW1.value);
            const result = 6 * lado;
            medEnableDisableP();
            disablePOptions();
            winPW1.classList.add("resultColor");
            pResultP.innerHTML = `Perimetro = ${result.toFixed(2)} ${medidaP}`;
        }else{
            pResultP.innerHTML = "Elegir centimetros o metros";
        }
    }else{
        pResultP.innerHTML = "Lados deben de ser mayores a 0";
    }
}
// ################################# Circunferencia #####################################
// =================================== AreaCirculo ======================================
function aCirculo(){
    if(winAW1.value > 0){
        if(inputRadioAC.checked || inputRadioAM.checked){
            medSeleccion();
            const radio = Number(winAW1.value);
            const PI = Math.PI.toFixed(2)
            const result = Math.pow(radio, 2) * PI;
            medEnableDisableA();
            disableAOptions(); 
            winAW1.classList.add("resultColor");
            pResultA.innerHTML = `Area = ${result.toFixed(2)} ${medidaA}`;
        }else{
            pResultA.innerHTML = "Elegir centimetros o metros";
        }
    }else{
        pResultA.innerHTML = "Radio debe de ser mayor a 0";
    }
}
// ================================= Circunferencia =====================================
function circunferencia(){
    if(winPW1.value > 0){
        if(inputRadioPC.checked || inputRadioPM.checked){
            medSeleccion();
            const radio = Number(winPW1.value);
            const PI = Math.PI.toFixed(2);
            const result = PI * (radio * 2);
            medEnableDisableP();
            disablePOptions();
            winPW1.classList.add("resultColor");
            pResultP.innerHTML = `Perimetro = ${result.toFixed(2)} ${medidaP}`;
        }else{
            pResultP.innerHTML = "Elegir centimetros o metros";
        }
    }else{
        pResultP.innerHTML = "Radio debe ser mayor a 0";
    }
}

// ================================= Constantes =========================================
// =========================== Constantes Container fig =================================
const containerFiguras = document.querySelector(".containerFiguras");
//----containerIntro---------------------------------------------------------------------
const containerIntro = document.createElement("section");
//----sectionDtop------------------------------------------------------------------------
const sectionDtop = document.createElement("div");
const defTitulo = document.createElement("h2");
const defImg = document.createElement("img");
//----sectionDmiddle---------------------------------------------------------------------
const sectionDmiddle = document.createElement("div");
const defAreaTitulo = document.createElement("p");
const defArea = document.createElement("p");
const defPerimetroTitulo = document.createElement("p");
const defPerimetro = document.createElement("p");
//----sectionDbottom---------------------------------------------------------------------
const sectionDbottom = document.createElement("div");
const defNotaTitulo = document.createElement("p");
const defNota = document.createElement("p");
const defGuiaTitulo = document.createElement("p");
const defGuia = document.createElement("p");
//----containerResponsive----------------------------------------------------------------
const containerResponsive = document.createElement("section");
// ---------------------------------- formulaImg ----------------------------------------
const formulaImg = document.createElement("div");
const titleFig = document.createElement("h2");
const imgFigura = document.createElement("img");
// ------------------------------ perimetroYAreaDiv -------------------------------------
const perimetroYAreaDiv = document.createElement("div");
// ----------------------------------- divArea ------------------------------------------
const divArea = document.createElement("div");
// --------------------------------- sectionAtop ----------------------------------------
const sectionAtop = document.createElement("section");
const pTitleA = document.createElement("p");
const pformulaA = document.createElement("p");
// -------------------------------- sectionAmiddle --------------------------------------
const sectionAmiddle = document.createElement("section");
const divRadioA = document.createElement("div");
const inputRadioAC = document.createElement("input");
const inputRadioAM = document.createElement("input");
const inputLabelAC = document.createElement("label");
const inputLabelAM = document.createElement("label");
// -------------------------------- sectionAbottom --------------------------------------
const sectionAbottom = document.createElement("section");
const pResultA = document.createElement("p");
const btnResultA = document.createElement("button");
const btnClearA = document.createElement("button");
// --------------------------------- divPerimetro ---------------------------------------
const divPerimetro =document.createElement("div");
// --------------------------------- sectionPtop ----------------------------------------
const sectionPtop = document.createElement("section");
const pTitleP = document.createElement("p");
const pformulaP = document.createElement("p");
// -------------------------------- sectionPmiddle --------------------------------------
const sectionPmiddle = document.createElement("section");
const divRadioP = document.createElement("div");
const inputRadioPC = document.createElement("input");
const inputRadioPM = document.createElement("input");
const inputLabelPC = document.createElement("label");
const inputLabelPM = document.createElement("label");
// -------------------------------- sectionPbottom --------------------------------------
const sectionPbottom = document.createElement("section");
const pResultP = document.createElement("p");
const btnResultP = document.createElement("button");
const btnClearP = document.createElement("button");
// =================================== variables ========================================
//----inputs windows atreas y perimetros ------------------------------------------------
let winAW1 = "";
let winAW2 = "";
let winAW3 = "";
let winPW1 = "";
let winPW2 = "";
let winPW3 = "";
let winPW4 = "";
// ----medida----------------------------------------------------------------------------
let medidaA;
let medidaP;
//----Variables de Botones y ventanas de resultados Areas y Perimetros ------------------
let btnResultAReg;
let btnClearAReg;
let pResultAReg;
let btnResultPReg;
let btnClearPReg;
let pResultPReg;
// ---- Variables de redireccion para funciones de areas y perimetros -------------------
let rutaFA;
let rutaFAClear;
let rutaFP;
let rutaFPClear;
// --- Variable de identificacion de figura ---------------------------------------------
let idFig = "";
//----Inicio-----------------------------------------------------------------------------
renderIntroduccion();
