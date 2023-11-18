
const body = document.querySelector(".body");
const nCaso = document.querySelector(".nCaso");
const listIndex = document.querySelector(".listIndex");
const blurC = document.querySelector(".blurC");

nCaso.addEventListener("click", casoFnc);
blurC.addEventListener("click", blurFnc);

function casoFnc(){
    listIndex.scrollTop = 0;
    listIndex.classList.toggle("listIndexShow");
    blurC.classList.toggle("off");
    body.classList.toggle("noMove");
}

function blurFnc(){
    listIndex.classList.remove("listIndexShow");
    blurC.classList.add("off");
    body.classList.remove("noMove");
}

const seleccion = document.querySelectorAll(".seleccion");
seleccion.forEach(element => {
    element.addEventListener("click", selecFnc);
});

function selecFnc(event){
    listIndex.classList.remove("listIndexShow");
    const figura = event.target.innerText.toLowerCase();
    
    const figSelect = introPorcentajeArray.find(obj => obj.id === figura);
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

function clearSDI(){
    SD.checked = false;
    SI.checked = false;
    
    winSDIvalorA.value = "";
    winSDIvalorB.value = "";
    winSDIvalorC.value = "";
    winSDIvalorD.value = "";

    winSDIvalorA.classList.remove("resultColor");
    winSDIvalorB.classList.remove("resultColor");
    winSDIvalorC.classList.remove("resultColor");
    winSDIvalorD.classList.remove("resultColor");

    pResultPC.innerHTML = "";
}

function clearCDIM(){
    XL.checked = false;
    DL.checked = false;
    IL.checked = false;
    XC.checked = false;
    DC.checked = false;
    IC.checked = false;
    XR.checked = false;
    DR.checked = false;
    IR.checked = false;

    XL.disabled = false;
    DL.disabled = false;
    IL.disabled = false;
    XC.disabled = false;
    DC.disabled = false;
    IC.disabled = false;
    XR.disabled = false;
    DR.disabled = false;
    IR.disabled = false;

    winCDIMvalorA.value = "";
    winCDIMvalorB.value = "";
    winCDIMvalorC.value = "";
    winCDIMvalorW.value = "";
    winCDIMvalorY.value = "";
    winCDIMvalorZ.value = "";

    winCDIMvalorA.classList.remove("resultColor");
    winCDIMvalorB.classList.remove("resultColor");
    winCDIMvalorC.classList.remove("resultColor");
    winCDIMvalorW.classList.remove("resultColor");
    winCDIMvalorY.classList.remove("resultColor");
    winCDIMvalorZ.classList.remove("resultColor");

    pResultPC.innerHTML = "";
}

function borrar(){
    divPorcentaje.innerHTML = "";
    sectionPCmiddle.innerHTML = "";
    pResultPC.innerHTML = "";

    pResultPC.classList.remove(pResultPCReg);
    btnResultPC.classList.remove(btnResultPCReg);
    btnClearPC.classList.remove(btnClearPCReg);

    containerFiguras.innerHTML = "";
};

// ================================= Constantes ===================================
// =========================== Constantes Container fig ===========================
const containerFiguras = document.querySelector(".containerFiguras");

// -------------------------------- containerIntro --------------------------------
const containerIntro = document.createElement("section");
// ---------------------------------- sectionDtop ---------------------------------
const sectionDtop = document.createElement("div");
const defTitulo = document.createElement("h2");
const defImg = document.createElement("img");
// --------------------------------- sectionDmiddle -------------------------------
const sectionDmiddle = document.createElement("div");
const defPorcentajeTitulo = document.createElement("p");
const defPorcentaje = document.createElement("p");
const defPorcentaje2Titulo = document.createElement("p");
const defPorcentaje2 = document.createElement("p");
// --------------------------------- sectionDbottom -------------------------------
const sectionDbottom = document.createElement("div");
const defNotaTitulo = document.createElement("p");
const defNota = document.createElement("p");
const defGuiaTitulo = document.createElement("p");
const defGuia = document.createElement("p");
// ------------------------------ containerResponsive -----------------------------
const containerResponsive = document.createElement("section");
// ---------------------------------- simpleDirectaImg ----------------------------------
const simpleDirectaImg = document.createElement("div");
const titleFig = document.createElement("h2");
const imgSD = document.createElement("img");
// ------------------------------ containerAltura -------------------------------
const containerPorcentaje = document.createElement("div");
// ----------------------------------- divPorcentaje ------------------------------------
const divPorcentaje = document.createElement("div");
// --------------------------------- sectionPCtop ----------------------------------
const sectionPCtop = document.createElement("section");
const pTitlePC = document.createElement("p");
const pformulaPC = document.createElement("p");
// -------------------------------- sectionPCmiddle --------------------------------
const sectionPCmiddleTop = document.createElement("section");
const sectionPCmiddle = document.createElement("section");

const divRadioPC = document.createElement("div");
const inputRadioPCD = document.createElement("input");
const inputRadioPCI = document.createElement("input");
const inputLabelPCD = document.createElement("label");
const inputLabelPCI = document.createElement("label");

const divRadioPCCL = document.createElement("div");
const divRadioPCCC = document.createElement("div");
const divRadioPCCR = document.createElement("div");

// -------------------------------- sectionHbottom --------------------------------
const sectionPCbottom = document.createElement("section");
const pResultPC = document.createElement("p");
const btnResultPC = document.createElement("button");

// --------------------------------- sectionPtop -----------------------------------
const sectionPC2top = document.createElement("section");
const pTitlePC2 = document.createElement("p");
const pformulaPC2 = document.createElement("p");
// -------------------------------- sectionPmiddle ---------------------------------
const divRadioPC2 = document.createElement("div");
const inputLabelPC2C = document.createElement("label");
const inputLabelPC2M = document.createElement("label");
// -------------------------------- sectionPbottom --------------------------------
const sectionPC2bottom = document.createElement("section");
const btnClearPC = document.createElement("button");

const definicion = null;

let loadVar = null;
let magnitud1 = null;
let magnitud2 = null;
let resultR3C = null;

let XL = null;
let DL = null;
let IL = null;
let XC = null;
let DC = null;
let IC = null;
let XR = null;
let DR = null;
let IR = null;

let winCDIMvalorA = null;
let winCDIMvalorB = null;
let winCDIMvalorC = null;
let winCDIMvalorW = null;
let winCDIMvalorY = null;
let winCDIMvalorZ = null;

// =================================== variables ==================================
let btnResultPCReg;
let btnClearPCReg;
let pResultPCReg;
let rutaFPC;
let rutaFClear;
let classTemp;

let SD = null;
let SI = null;

let winSDIvalorA = null;
let winSDIvalorB = null;
let winSDIvalorC = null;
let winSDIvalorD = null;

function renderIntroduccion(){
    borrar();
    containerFiguras.appendChild(containerIntro);

    containerIntro.classList.add("containerIntro");

    defTitulo.classList.add("tituloIntro");
    defTitulo.innerHTML = introPorcentajeArray[0].defTitulo;
    defImg.classList.add("imgIntro");
    defImg.setAttribute("src", introPorcentajeArray[0].defImg);
    sectionDtop.classList.add("sectionDtop", "secD");
    sectionDtop.append(defTitulo, defImg);

    defPorcentajeTitulo.classList.add("defPorcentajeTitulo", "defT");
    defPorcentajeTitulo.innerHTML = introPorcentajeArray[0].defPorcentajeTitulo;
    defPorcentaje.classList.add("defPorcentaje", "defC");
    defPorcentaje.innerHTML = introPorcentajeArray[0].defPorcentaje;
    defPorcentaje2Titulo.classList.add("defPorcentaje2Titulo", "defT");
    defPorcentaje2Titulo.innerHTML = introPorcentajeArray[0].defPorcentaje2Titulo;
    defPorcentaje2.classList.add("defPorcentaje2", "defC");
    defPorcentaje2.innerHTML = introPorcentajeArray[0].defPorcentaje2;
    sectionDmiddle.classList.add("sectionDmiddle", "secD");
    sectionDmiddle.append(defPorcentajeTitulo, defPorcentaje, defPorcentaje2Titulo, defPorcentaje2);

    defNotaTitulo.classList.add("defNotaTitulo", "defT");
    defNotaTitulo.innerHTML = introPorcentajeArray[0].defNotaTitulo;
    defNota.classList.add("defNota", "defC");
    defNota.innerHTML = introPorcentajeArray[0].defNota;
    defGuiaTitulo.classList.add("defGuiaTitulo", "defT");
    defGuiaTitulo.innerHTML = introPorcentajeArray[0].defGuiaTitulo;
    defGuia.classList.add("defGuia", "defC");
    defGuia.innerHTML = introPorcentajeArray[0].defGuia;
    sectionDbottom.classList.add("sectionDbottom", "secD");
    sectionDbottom.append(defNotaTitulo, defNota, defGuiaTitulo, defGuia);

    containerIntro.append(sectionDtop, sectionDmiddle, sectionDbottom);
    document.documentElement.scrollTop = 0;
};
function renderFigura(objeto){
    borrar();
    containerFiguras.appendChild(containerResponsive);

    containerResponsive.classList.add("containerResponsive");

    containerResponsive.appendChild(simpleDirectaImg);
    simpleDirectaImg.classList.add("simpleDirectaImg");

    simpleDirectaImg.appendChild(titleFig);
    titleFig.classList.add("titleFig");
    titleFig.innerHTML = objeto.titleFig;

    simpleDirectaImg.appendChild(imgSD);
    imgSD.setAttribute("src", objeto.imgFig);

    containerResponsive.appendChild(containerPorcentaje);
    containerPorcentaje.classList.add("containerPorcentaje");
    containerPorcentaje.appendChild(divPorcentaje);

    pTitlePC.classList.add("titlesFormules");
    pTitlePC.innerHTML = objeto.titlePorcentaje;

    if(objeto.definicion == "on"){
        divPorcentaje.classList.remove("containerImage2");
        divPorcentaje.classList.add("containerFormules");
        pformulaPC.classList.add("textFormule");
        pformulaPC.innerHTML = objeto.formulaPorcentaje;
        sectionPCtop.classList.add("sectionPCtop");
        sectionPCtop.append(pTitlePC, pformulaPC);
    
        sectionPCmiddleTop.innerHTML = "";
        sectionPCmiddleTop.classList.add("sectionPCmiddleTop");

        if(objeto.radiosC == "off"){
            divRadioPC.classList.add("divRadioPC");
            inputRadioPCD.setAttribute("type", "radio");
            inputRadioPCD.setAttribute("name", "radPCDI");
            inputRadioPCD.setAttribute("id", "radPCD"); 
            inputLabelPCD.setAttribute("for", "radPCD");
            inputLabelPCD.innerHTML = "directa";
            inputRadioPCI.setAttribute("type", "radio");
            inputRadioPCI.setAttribute("name", "radPCDI");
            inputRadioPCI.setAttribute("id", "radPCI");
            inputLabelPCI.setAttribute("for", "radPCI");
            inputLabelPCI.innerHTML = "inversa";
            divRadioPC.append(inputRadioPCD, inputLabelPCD,  inputRadioPCI, inputLabelPCI);
            sectionPCmiddleTop.appendChild(divRadioPC);
            loadVar = "SDI";
        }else if(objeto.radiosC == "on"){
            objeto.lista.forEach(datos =>{
                // radio y label X incognita
                const divRadioX = document.createElement("div");
                divRadioX.classList.add(datos.radX, "rowSty");
                const inputRadioX = document.createElement("input");
                inputRadioX.setAttribute("type", "radio");
                inputRadioX.setAttribute("name", datos.family);
                inputRadioX.setAttribute("id", datos.idForX);
                const inputLabelX = document.createElement("label");
                inputLabelX.setAttribute("for", datos.idForX);
                inputLabelX.innerHTML = datos.textoX;
                divRadioX.append(inputLabelX, inputRadioX);

                // radio y label Directa
                const divRadioD = document.createElement("div");
                divRadioD.classList.add(datos.radD, "rowSty");
                const inputRadioD = document.createElement("input");
                inputRadioD.setAttribute("type", "radio");
                inputRadioD.setAttribute("name", datos.family);
                inputRadioD.setAttribute("id", datos.idForD);
                const inputLabelD = document.createElement("label");
                inputLabelD.setAttribute("for", datos.idForD);
                inputLabelD.innerHTML = datos.textoD;
                divRadioD.append(inputLabelD, inputRadioD);

                // radio y label Inversa
                const divRadioI = document.createElement("div");
                divRadioI.classList.add(datos.radI, "rowSty");
                const inputRadioI = document.createElement("input");
                inputRadioI.setAttribute("type", "radio");
                inputRadioI.setAttribute("name", datos.family);
                inputRadioI.setAttribute("id", datos.idForI);
                const inputLabelI = document.createElement("label");
                inputLabelI.setAttribute("for", datos.idForI);
                inputLabelI.innerHTML = datos.textoI;
                divRadioI.append(inputLabelI, inputRadioI);

                // Agregar a la seccion media
                const divCont = document.createElement("div");
                divCont.classList.add(datos.posDiv, "colSty");
                divCont.append(divRadioX, divRadioD, divRadioI);
                sectionPCmiddleTop.append(divCont);
            });
            loadVar = "CDIM";
        };
        sectionPCmiddle.classList.remove(classTemp);
        classTemp = objeto.secMid;
        sectionPCmiddle.classList.toggle(objeto.secMid);

        objeto.inputPorcentaje.forEach(winInput => {
            const divWin = document.createElement("div");
            divWin.classList.add("winPosition");
    
            const labelArea = document.createElement("label");
            labelArea.setAttribute("for", winInput.inputId);
            labelArea.innerHTML = winInput.inputLabel;
            divWin.appendChild(labelArea);
            const inputHeightWindow = document.createElement("input");
            inputHeightWindow.setAttribute("type", "number");
            inputHeightWindow.setAttribute("id", winInput.inputId);
            inputHeightWindow.classList.add("inputStyle");
            divWin.appendChild(inputHeightWindow);
            sectionPCmiddle.appendChild(divWin);
        });
    
        pResultPCReg = objeto.resultClPC
        pResultPC.classList.add("winStyle", pResultPCReg);

        btnResultPCReg = objeto.btnClPC;
        btnResultPC.classList.add("btnResult", btnResultPCReg);
        btnResultPC.innerHTML = "Resultado";

        btnClearPCReg = objeto.btn2ClPC;
        btnClearPC.classList.add("btnClear", btnClearPCReg);
        btnClearPC.innerHTML = "Borrar";

        sectionPCbottom.classList.add("sectionPCbottom");
        sectionPCbottom.append(pResultPC, btnClearPC, btnResultPC);
        divPorcentaje.append(sectionPCtop, sectionPCmiddleTop, sectionPCmiddle, sectionPCbottom);

        btnClearPC.removeEventListener("click", rutaFClear);
        rutaFClear = (eval(objeto.clearWindow));
        btnClearPC.addEventListener("click", rutaFClear);

        btnResultPC.removeEventListener("click", rutaFPC);
        rutaFPC = (eval(objeto.funcionPorcentaje));
        btnResultPC.addEventListener("click", rutaFPC);
    }
    else if(objeto.definicion == "off"){
        divPorcentaje.classList.remove("containerFormules");
        divPorcentaje.classList.add("containerImage2");
        const imgDefinicion = document.createElement("img");
        imgDefinicion.classList.add("imagenDefinicion");
        imgDefinicion.setAttribute("src", objeto.imgFig2);
        divPorcentaje.append(pTitlePC,  imgDefinicion);
    }
    document.documentElement.scrollTop = 0;
    if(loadVar == "SDI"){
        SD = document.querySelector("#radPCD");
        SI = document.querySelector("#radPCI");
        
        winSDIvalorA = document.querySelector("#winSDIvalorA");
        winSDIvalorB = document.querySelector("#winSDIvalorB");
        winSDIvalorC = document.querySelector("#winSDIvalorC");
        winSDIvalorD = document.querySelector("#winSDIvalorD");
        
        winSDIvalorA.classList.remove("resultColor");
        winSDIvalorB.classList.remove("resultColor");
        winSDIvalorC.classList.remove("resultColor");
        winSDIvalorD.classList.remove("resultColor");
    }else if(loadVar == "CDIM"){
        XL = document.querySelector("#radPCLX");
        DL = document.querySelector("#radPCLD");
        IL = document.querySelector("#radPCLI");
        XC = document.querySelector("#radPCCX");
        DC = document.querySelector("#radPCCD");
        IC = document.querySelector("#radPCCI");
        XR = document.querySelector("#radPCRX");
        DR = document.querySelector("#radPCRD");
        IR = document.querySelector("#radPCRI");
        
        winCDIMvalorA = document.querySelector("#winCDIMvalorA");
        winCDIMvalorB = document.querySelector("#winCDIMvalorB");
        winCDIMvalorC = document.querySelector("#winCDIMvalorC");
        winCDIMvalorW = document.querySelector("#winCDIMvalorW");
        winCDIMvalorY = document.querySelector("#winCDIMvalorY");
        winCDIMvalorZ = document.querySelector("#winCDIMvalorZ");
    
        XL.checked = false;
        XC.checked = false;
        XR.checked = false;
    
        winCDIMvalorA.classList.remove("resultColor");
        winCDIMvalorB.classList.remove("resultColor");
        winCDIMvalorC.classList.remove("resultColor");
        winCDIMvalorW.classList.remove("resultColor");
        winCDIMvalorY.classList.remove("resultColor");
        winCDIMvalorZ.classList.remove("resultColor");
    }
};

// ------------------------ Porcentajes --------------------------
// ------------- regla de tres simple directa y simple inversa -------------

function pcSDI(){
    // SD = document.querySelector("#radPCD");
    // SI = document.querySelector("#radPCI");
    
    // winSDIvalorA = document.querySelector("#winSDIvalorA");
    // winSDIvalorB = document.querySelector("#winSDIvalorB");
    // winSDIvalorC = document.querySelector("#winSDIvalorC");
    // winSDIvalorD = document.querySelector("#winSDIvalorD");
    
    // winSDIvalorA.classList.remove("resultColor");
    // winSDIvalorB.classList.remove("resultColor");
    // winSDIvalorC.classList.remove("resultColor");
    // winSDIvalorD.classList.remove("resultColor");

    if(inputRadioPCD.checked || inputRadioPCI.checked){
        let result = null;
        if(winSDIvalorA.value > 0 && winSDIvalorB.value > 0 && winSDIvalorC.value > 0 && winSDIvalorD.value > 0){
            pResultPC.innerHTML = "Se requiren solo 3 valores";
        }else{
            if(winSDIvalorA.value > 0 && winSDIvalorB.value > 0 && winSDIvalorC.value > 0 && (winSDIvalorD.value == "" )){
                if(inputRadioPCD.checked){
                    result = Number((winSDIvalorB.value * winSDIvalorC.value) / winSDIvalorA.value);
                }else if(inputRadioPCI.checked){
                    result = Number((winSDIvalorA.value * winSDIvalorB.value) / winSDIvalorC.value);
                };
                winSDIvalorD.classList.add("resultColor");
                winSDIvalorD.value = result;
                pResultPC.innerHTML = `Valor = ${result.toFixed(2)}`;
            }
            else if(winSDIvalorA.value > 0 && winSDIvalorB.value > 0 && winSDIvalorD.value > 0 && (winSDIvalorC.value == "" )){
                if(inputRadioPCD.checked){
                    result = Number((winSDIvalorA.value * winSDIvalorD.value) / winSDIvalorB.value);
                }else if(inputRadioPCI.checked){
                    result = Number((winSDIvalorA.value * winSDIvalorB.value) / winSDIvalorD.value);
                };
                winSDIvalorC.classList.add("resultColor");
                winSDIvalorC.value = result;
                pResultPC.innerHTML = `Valor = ${result.toFixed(2)}`;
            }
            else if(winSDIvalorA.value > 0 && winSDIvalorC.value > 0 && winSDIvalorD.value > 0 && (winSDIvalorB.value == "" )){
                if(inputRadioPCD.checked){
                    result = Number((winSDIvalorD.value * winSDIvalorA.value) / winSDIvalorC.value);
                }else if(inputRadioPCI.checked){
                    result = Number((winSDIvalorD.value * winSDIvalorC.value) / winSDIvalorA.value);
                };
                winSDIvalorB.classList.add("resultColor");
                winSDIvalorB.value = result;
                pResultPC.innerHTML = `Valor = ${result.toFixed(2)}`;
            }
            else if(winSDIvalorB.value > 0 && winSDIvalorC.value > 0 && winSDIvalorD.value > 0 && (winSDIvalorA.value == "" )){
                if(inputRadioPCD.checked){
                    result = Number((winSDIvalorC.value * winSDIvalorB.value) / winSDIvalorD.value);
                }else if(inputRadioPCI.checked){
                    result = Number((winSDIvalorC.value * winSDIvalorD.value) / winSDIvalorB.value);
                };
                winSDIvalorA.classList.add("resultColor");
                winSDIvalorA.value = result;
                pResultPC.innerHTML = `Valor = ${result.toFixed(2)}`;
            }
            else{
                pResultPC.innerHTML = "Se requiren los 3 valores conocidos";
            }
        }
    }else{
        pResultPC.innerHTML = "Elegir directa o inversa";
    }
}

function pcCDIM(){
    // XL = document.querySelector("#radPCLX");
    // DL = document.querySelector("#radPCLD");
    // IL = document.querySelector("#radPCLI");
    // XC = document.querySelector("#radPCCX");
    // DC = document.querySelector("#radPCCD");
    // IC = document.querySelector("#radPCCI");
    // XR = document.querySelector("#radPCRX");
    // DR = document.querySelector("#radPCRD");
    // IR = document.querySelector("#radPCRI");
    
    // winCDIMvalorA = document.querySelector("#winCDIMvalorA");
    // winCDIMvalorB = document.querySelector("#winCDIMvalorB");
    // winCDIMvalorC = document.querySelector("#winCDIMvalorC");
    // winCDIMvalorW = document.querySelector("#winCDIMvalorW");
    // winCDIMvalorY = document.querySelector("#winCDIMvalorY");
    // winCDIMvalorZ = document.querySelector("#winCDIMvalorZ");

    // XL.checked = false;
    // XC.checked = false;
    // XR.checked = false;

    // winCDIMvalorA.classList.remove("resultColor");
    // winCDIMvalorB.classList.remove("resultColor");
    // winCDIMvalorC.classList.remove("resultColor");
    // winCDIMvalorW.classList.remove("resultColor");
    // winCDIMvalorY.classList.remove("resultColor");
    // winCDIMvalorZ.classList.remove("resultColor");

    if(winCDIMvalorA.value > 0 && winCDIMvalorB.value > 0 && winCDIMvalorC.value > 0 && winCDIMvalorY.value > 0 && winCDIMvalorZ.value > 0){
        XL.checked = true;
        DL.disabled = true;
        IL.disabled = true;
        XC.disabled = true;
        XR.disabled = true;

        if((XL.checked || DL.checked || IL.checked) && (XC.checked || DC.checked || IC.checked) && (XR.checked || DR.checked || IR.checked)){
            if((XL.checked && DC.checked && DR.checked) || (XL.checked && IC.checked && IR.checked) || (XL.checked && DC.checked && IR.checked) || (XL.checked && IC.checked && DR.checked)){
                if(DC.checked && DR.checked){
                    magnitud1 = winCDIMvalorB.value * winCDIMvalorC.value;
                    magnitud2 = winCDIMvalorY.value * winCDIMvalorZ.value;
                }else if(IC.checked && IR.checked){
                    magnitud1 = winCDIMvalorY.value * winCDIMvalorZ.value;
                    magnitud2 = winCDIMvalorB.value * winCDIMvalorC.value;
                }else if(DC.checked && IR.checked){
                    magnitud1 = winCDIMvalorB.value * winCDIMvalorZ.value;
                    magnitud2 = winCDIMvalorY.value * winCDIMvalorC.value;
                }else if(IC.checked && DR.checked){
                    magnitud1 = winCDIMvalorY.value * winCDIMvalorC.value;
                    magnitud2 = winCDIMvalorB.value * winCDIMvalorZ.value;
                };
                resultR3C = winCDIMvalorA.value * magnitud2 / magnitud1;
                pResultPC.innerHTML = `Resultado ${resultR3C.toFixed(2)}`;
                winCDIMvalorW.value = resultR3C.toFixed(2);
                winCDIMvalorW.classList.add("resultColor");
            }else{
                pResultPC.innerHTML = "Solo 1 incognita con 2 Inversas o Directas o 1 directa y 1 inversa";
            }
        }else{
            pResultPC.innerHTML = "Elegir su relacion directa (D) o inversa (I) respecto a (X)";
        };

    }else if(winCDIMvalorA.value > 0 && winCDIMvalorB.value > 0 && winCDIMvalorC.value > 0 && winCDIMvalorW.value > 0 && winCDIMvalorZ.value > 0){
        console.log("segunda opcion");
    // }else if(winCDIMvalorA.value > 0 && winCDIMvalorB.value > 0 && winCDIMvalorC.value > 0 && winCDIMvalorW.value > 0 && winCDIMvalorY.value > 0){

    // }else if(winCDIMvalorB.value > 0 && winCDIMvalorC.value > 0 && winCDIMvalorW.value > 0 && winCDIMvalorY.value > 0 && winCDIMvalorZ.value > 0){

    // }else if(winCDIMvalorA.value > 0 && winCDIMvalorC.value > 0 && winCDIMvalorW.value > 0 && winCDIMvalorY.value > 0 && winCDIMvalorZ.value > 0){

    // }else if(winCDIMvalorA.value > 0 && winCDIMvalorB.value > 0 && winCDIMvalorW.value > 0 && winCDIMvalorY.value > 0 && winCDIMvalorZ.value > 0)){
        

    }else{
        pResultPC.innerHTML = "Introduce los 5 valores conocidos y deja vacia la incognita";
    };
    // if(inputRadioPCD.checked || inputRadioPCI.checked || inputRadioPCI.checked && inputRadioPCD.checked || inputRadioPCI.checked || inputRadioPCI.checked && inputRadioPCD.checked || inputRadioPCI.checked || inputRadioPCI.checked){
    //     let result = null;
    //     if(winSDIvalorA.value > 0 && winSDIvalorB.value > 0 && winSDIvalorC.value > 0 && winSDIvalorD.value > 0){
    //         pResultPC.innerHTML = "Se requiren solo 3 valores";
    //     }else{
    //         if(winSDIvalorA.value > 0 && winSDIvalorB.value > 0 && winSDIvalorC.value > 0 && (winSDIvalorD.value == "" )){
    //             if(inputRadioPCD.checked){
    //                 result = Number((winSDIvalorB.value * winSDIvalorC.value) / winSDIvalorA.value);
    //             }else if(inputRadioPCI.checked){
    //                 result = Number((winSDIvalorA.value * winSDIvalorB.value) / winSDIvalorC.value);
    //             };
    //             winSDIvalorD.classList.add("resultColor");
    //             winSDIvalorD.value = result;
    //             pResultPC.innerHTML = `Valor = ${result.toFixed(2)}`;
    //         }
    //         else if(winSDIvalorA.value > 0 && winSDIvalorB.value > 0 && winSDIvalorD.value > 0 && (winSDIvalorC.value == "" )){
    //             if(inputRadioPCD.checked){
    //                 result = Number((winSDIvalorA.value * winSDIvalorD.value) / winSDIvalorB.value);
    //             }else if(inputRadioPCI.checked){
    //                 result = Number((winSDIvalorA.value * winSDIvalorB.value) / winSDIvalorD.value);
    //             };
    //             winSDIvalorC.classList.add("resultColor");
    //             winSDIvalorC.value = result;
    //             pResultPC.innerHTML = `Valor = ${result.toFixed(2)}`;
    //         }
    //         else if(winSDIvalorA.value > 0 && winSDIvalorC.value > 0 && winSDIvalorD.value > 0 && (winSDIvalorB.value == "" )){
    //             if(inputRadioPCD.checked){
    //                 result = Number((winSDIvalorD.value * winSDIvalorA.value) / winSDIvalorC.value);
    //             }else if(inputRadioPCI.checked){
    //                 result = Number((winSDIvalorD.value * winSDIvalorC.value) / winSDIvalorA.value);
    //             };
    //             winSDIvalorB.classList.add("resultColor");
    //             winSDIvalorB.value = result;
    //             pResultPC.innerHTML = `Valor = ${result.toFixed(2)}`;
    //         }
    //         else if(winSDIvalorB.value > 0 && winSDIvalorC.value > 0 && winSDIvalorD.value > 0 && (winSDIvalorA.value == "" )){
    //             if(inputRadioPCD.checked){
    //                 result = Number((winSDIvalorC.value * winSDIvalorB.value) / winSDIvalorD.value);
    //             }else if(inputRadioPCI.checked){
    //                 result = Number((winSDIvalorC.value * winSDIvalorD.value) / winSDIvalorB.value);
    //             };
    //             winSDIvalorA.classList.add("resultColor");
    //             winSDIvalorA.value = result;
    //             pResultPC.innerHTML = `Valor = ${result.toFixed(2)}`;
    //         }
    //         else{
    //             pResultPC.innerHTML = "Se requiren los 3 valores conocidos";
    //         }
    //     }
    // }else{
    //     pResultPC.innerHTML = "Elegir directa o inversa";
    // }
};
renderIntroduccion();