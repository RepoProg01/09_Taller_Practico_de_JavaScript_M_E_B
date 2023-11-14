
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

function borrar(){
    medidaPC = null;
    medidaPC2 = null;
    inputRadioPCD.checked = false;
    inputRadioPCI.checked = false;
    inputRadioPC2C.checked = false;
    inputRadioPC2M.checked = false;
    divPorcentaje.innerHTML = "";
    divPorcentaje2.innerHTML = "";
    sectionPCmiddle.innerHTML = "";
    sectionPC2middle.innerHTML = "";
    pResultPC.innerHTML = "";
    pResultPC2.innerHTML = "";
    pResultPC.classList.remove(pResultPCReg);
    btnResultPC.classList.remove(btnResultPCReg);
    pResultPC2.classList.remove(pResultPC2Reg);
    btnResultPC2.classList.remove(btnResultPC2Reg);
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

const inputRadioPCD = document.createElement("input");
const inputRadioPCI = document.createElement("input");
const inputLabelPCD = document.createElement("label");
const inputLabelPCI = document.createElement("label");

const divRadioPCCL = document.createElement("div");
const divRadioPCCC = document.createElement("div");
const divRadioPCCR = document.createElement("div");

const divRadioPC = document.createElement("div");

const divRadioPCCLX = document.createElement("div");
const divRadioPCCLD = document.createElement("div");
const divRadioPCCLI = document.createElement("div");

const divRadioPCCCX = document.createElement("div");
const divRadioPCCCD = document.createElement("div");
const divRadioPCCCI = document.createElement("div");

const divRadioPCCRX = document.createElement("div");
const divRadioPCCRD = document.createElement("div");
const divRadioPCCRI = document.createElement("div");

const inputRadioPCLX = document.createElement("input");
const inputRadioPCLD = document.createElement("input");
const inputRadioPCLI = document.createElement("input");
const inputLabelPCLX = document.createElement("label");
const inputLabelPCLD = document.createElement("label");
const inputLabelPCLI = document.createElement("label");

const inputRadioPCCX = document.createElement("input");
const inputRadioPCCD = document.createElement("input");
const inputRadioPCCI = document.createElement("input");
const inputLabelPCCX = document.createElement("label");
const inputLabelPCCD = document.createElement("label");
const inputLabelPCCI = document.createElement("label");

const inputRadioPCRX = document.createElement("input");
const inputRadioPCRD = document.createElement("input");
const inputRadioPCRI = document.createElement("input");
const inputLabelPCRX = document.createElement("label");
const inputLabelPCRD = document.createElement("label");
const inputLabelPCRI = document.createElement("label");
// -------------------------------- sectionHbottom --------------------------------
const sectionPCbottom = document.createElement("section");
const pResultPC = document.createElement("p");
const btnResultPC = document.createElement("button");

// --------------------------------- divAltura2 ----------------------------------
const divPorcentaje2 =document.createElement("div");
// --------------------------------- sectionPtop -----------------------------------
const sectionPC2top = document.createElement("section");
const pTitlePC2 = document.createElement("p");
const pformulaPC2 = document.createElement("p");
// -------------------------------- sectionPmiddle ---------------------------------
const sectionPC2middle = document.createElement("section");
const divRadioPC2 = document.createElement("div");
const inputRadioPC2C = document.createElement("input");
const inputRadioPC2M = document.createElement("input");
const inputLabelPC2C = document.createElement("label");
const inputLabelPC2M = document.createElement("label");
// -------------------------------- sectionPbottom --------------------------------
const sectionPC2bottom = document.createElement("section");
const pResultPC2 = document.createElement("p");
const btnResultPC2 = document.createElement("button");


const definicion = null;

// =================================== variables ==================================
let medidaPC;
let medidaPC2;
let btnResultPCReg;
let btnResultPC2Reg;
let pResultPCReg;
let pResultPC2Reg;
let rutaFPC;
let rutaFPC2;
let classTemp;

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
    
        if(objeto.radiosC == "off"){
            sectionPCmiddleTop.classList.add("sectionPCmiddleTop");
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
        }else if(objeto.radiosC == "on"){
            sectionPCmiddleTop.classList.add("sectionPCmiddleTopC");

            divRadioPCCL.classList.add("divRadioPCCL", "colSty");

            divRadioPCCLX.classList.add("divRadioPCCLX", "rowSty");
            inputRadioPCLX.setAttribute("type", "radio");
            inputRadioPCLX.setAttribute("name", "radPCCL");
            inputRadioPCLX.setAttribute("id", "radPCLX");
            inputLabelPCLX.setAttribute("for", "radPCLX");
            inputLabelPCLX.innerHTML = "X";
            divRadioPCCLX.append(inputLabelPCLX, inputRadioPCLX);

            divRadioPCCLD.classList.add("divRadioPCCLD", "rowSty");
            inputRadioPCLD.setAttribute("type", "radio");
            inputRadioPCLD.setAttribute("name", "radPCCL");
            inputRadioPCLD.setAttribute("id", "radPCLD");
            inputLabelPCLD.setAttribute("for", "radPCLD");
            inputLabelPCLD.innerHTML = "D";
            divRadioPCCLD.append(inputLabelPCLD, inputRadioPCLD);

            divRadioPCCLI.classList.add("divRadioPCCLI", "rowSty");
            inputRadioPCLI.setAttribute("type", "radio");
            inputRadioPCLI.setAttribute("name", "radPCCL");
            inputRadioPCLI.setAttribute("id", "radPCLI");
            inputLabelPCLI.setAttribute("for", "radPCLI");
            inputLabelPCLI.innerHTML = "I";
            divRadioPCCLI.append(inputLabelPCLI, inputRadioPCLI);

            divRadioPCCL.append(divRadioPCCLX, divRadioPCCLD, divRadioPCCLI);

            divRadioPCCC.classList.add("divRadioPCCC", "colSty");

            divRadioPCCCX.classList.add("divRadioPCCCX", "rowSty");
            inputRadioPCCX.setAttribute("type", "radio");
            inputRadioPCCX.setAttribute("name", "radPCCC");
            inputRadioPCCX.setAttribute("id", "radPCCX");
            inputLabelPCCX.setAttribute("for", "radPCCX");
            inputLabelPCCX.innerHTML = "X";
            divRadioPCCCX.append(inputLabelPCCX, inputRadioPCCX);

            divRadioPCCCD.classList.add("divRadioPCCCD", "rowSty");
            inputRadioPCCD.setAttribute("type", "radio");
            inputRadioPCCD.setAttribute("name", "radPCCC");
            inputRadioPCCD.setAttribute("id", "radPCCD");
            inputLabelPCCD.setAttribute("for", "radPCCD");
            inputLabelPCCD.innerHTML = "D";
            divRadioPCCCD.append(inputLabelPCCD, inputRadioPCCD);

            divRadioPCCCI.classList.add("divRadioPCCCI", "rowSty");
            inputRadioPCCI.setAttribute("type", "radio");
            inputRadioPCCI.setAttribute("name", "radPCCC");
            inputRadioPCCI.setAttribute("id", "radPCCI");
            inputLabelPCCI.setAttribute("for", "radPCCI");
            inputLabelPCCI.innerHTML = "I";
            divRadioPCCCI.append(inputLabelPCCI, inputRadioPCCI);

            divRadioPCCC.append(divRadioPCCCX, divRadioPCCCD, divRadioPCCCI);

            divRadioPCCR.classList.add("divRadioPCCR", "colSty");

            divRadioPCCRX.classList.add("divRadioPCCRX", "rowSty");
            inputRadioPCRX.setAttribute("type", "radio");
            inputRadioPCRX.setAttribute("name", "radPCCR");
            inputRadioPCRX.setAttribute("id", "radPCRX");
            inputLabelPCRX.setAttribute("for", "radPCRX");
            inputLabelPCRX.innerHTML = "X";
            divRadioPCCRX.append(inputLabelPCRX, inputRadioPCRX);

            divRadioPCCRD.classList.add("divRadioPCCRD", "rowSty");
            inputRadioPCRD.setAttribute("type", "radio");
            inputRadioPCRD.setAttribute("name", "radPCCR");
            inputRadioPCRD.setAttribute("id", "radPCRD");
            inputLabelPCRD.setAttribute("for", "radPCRD");
            inputLabelPCRD.innerHTML = "D";
            divRadioPCCRD.append(inputLabelPCRD, inputRadioPCRD);

            divRadioPCCRI.classList.add("divRadioPCCRI", "rowSty");
            inputRadioPCRI.setAttribute("type", "radio");
            inputRadioPCRI.setAttribute("name", "radPCCR");
            inputRadioPCRI.setAttribute("id", "radPCRI");
            inputLabelPCRI.setAttribute("for", "radPCRI");
            inputLabelPCRI.innerHTML = "I";
            divRadioPCCRI.append(inputLabelPCRI, inputRadioPCRI);

            divRadioPCCR.append(divRadioPCCRX, divRadioPCCRD, divRadioPCCRI);

            sectionPCmiddleTop.append(divRadioPCCL, divRadioPCCC, divRadioPCCR);
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
        sectionPCbottom.classList.add("sectionPCbottom");
        sectionPCbottom.append(pResultPC, btnResultPC);
        divPorcentaje.append(sectionPCtop, sectionPCmiddleTop, sectionPCmiddle, sectionPCbottom);
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
};


// ------------------------ Porcentajes --------------------------
// ------------- regla de tres simple directa y simple inversa -------------

function pcSDI(){
    
    const winSDIvalorA = document.querySelector("#winSDIvalorA");
    const winSDIvalorB = document.querySelector("#winSDIvalorB");
    const winSDIvalorC = document.querySelector("#winSDIvalorC");
    const winSDIvalorD = document.querySelector("#winSDIvalorD");
    winSDIvalorA.classList.remove("resultColor");
    winSDIvalorB.classList.remove("resultColor");
    winSDIvalorC.classList.remove("resultColor");
    winSDIvalorD.classList.remove("resultColor");

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
    
    const winSDIvalorA = document.querySelector("#winSDIvalorA");
    const winSDIvalorB = document.querySelector("#winSDIvalorB");
    const winSDIvalorC = document.querySelector("#winSDIvalorC");
    const winSDIvalorW = document.querySelector("#winSDIvalorW");
    const winSDIvalorY = document.querySelector("#winSDIvalorY");
    const winSDIvalorZ = document.querySelector("#winSDIvalorZ");
    winSDIvalorA.classList.remove("resultColor");
    winSDIvalorB.classList.remove("resultColor");
    winSDIvalorC.classList.remove("resultColor");
    winSDIvalorW.classList.remove("resultColor");
    winSDIvalorY.classList.remove("resultColor");
    winSDIvalorZ.classList.remove("resultColor");

    if(inputRadioPCD.checked || inputRadioPCI.checked || inputRadioPCI.checked){
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
renderIntroduccion();