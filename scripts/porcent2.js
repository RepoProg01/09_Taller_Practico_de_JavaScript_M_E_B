
const body = document.querySelector(".body");
const nCaso = document.querySelector(".nCaso");
const listIndex = document.querySelector(".listIndex");
const blurC = document.querySelector(".blurC");

nCaso.addEventListener("click", casoFnc);
blurC.addEventListener("click", blurFnc);

const seleccion = document.querySelectorAll(".seleccion");
seleccion.forEach(element => {
    element.addEventListener("click", selecFnc);
});

function casoFnc(){
    listIndex.scrollTop = 0;
    listIndex.classList.toggle("listIndexShow");
    blurC.classList.toggle("off");
    body.classList.toggle("noMove");
};
//----Funcion opacar background---------------------------------------------------------
function blurFnc(){
    listIndex.classList.remove("listIndexShow");
    blurC.classList.add("off");
    body.classList.remove("noMove");
}
//----Funcion de seleccion en menu------------------------------------------------------
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
};
//----Funciones de borrado, activacion y desactivacion de bentanas y radios-------------
function borrar(){
    loadVar = "";
    incognitaSC = "";
    sectionPCmiddleTop.innerHTML = "";
    sectionPCmiddle.innerHTML = "";
    pResultPC.innerHTML = "";
    pResultPC.classList.remove(pResultPCReg);
    btnResultPC.classList.remove(btnResultPCReg);
    btnClearPC.classList.remove(btnClearPCReg);
    containerFiguras.innerHTML = "";
    divPorcentaje.innerHTML = "";
    btnResultPC.disabled = false;
    btnResultPC.classList.remove("btnInactive");
};
function disableWindow(){
    if(incognitaSC == "S"){
        winA.disabled = true;
        winB.disabled = true;
        winW.disabled = true;
        winY.disabled = true;
    }else if(incognitaSC == "C"){
        winA.disabled = true;
        winB.disabled = true;
        winC.disabled = true;
        winW.disabled = true;
        winY.disabled = true;
        winZ.disabled = true;
    };

};
function enableWindow(){
    if(incognitaSC == "S"){
        winA.disabled = false;
        winB.disabled = false;
        winW.disabled = false;
        winY.disabled = false;
    }else if(incognitaSC == "C"){
        winA.disabled = false;
        winB.disabled = false;
        winC.disabled = false;
        winW.disabled = false;
        winY.disabled = false;
        winZ.disabled = false;
    };
};
function clearInputsWindows(){
    if(incognitaSC == "S"){
        winA.value = "";
        winB.value = "";
        winW.value = "";
        winY.value = "";
    }else if(incognitaSC == "C"){
        winA.value = "";
        winB.value = "";
        winC.value = "";
        winW.value = "";
        winY.value = "";
        winZ.value = "";
    }

};
function clearColor(){
    if(incognitaSC == "S"){
        winA.classList.remove("resultColor");
        winB.classList.remove("resultColor");
        winW.classList.remove("resultColor");
        winY.classList.remove("resultColor");
    }else if(incognitaSC == "C"){
        winA.classList.remove("resultColor");
        winB.classList.remove("resultColor");
        winC.classList.remove("resultColor");
        winW.classList.remove("resultColor");
        winY.classList.remove("resultColor");
        winZ.classList.remove("resultColor");
    }

};
function clearRadios(){
    if(incognitaSC == "S"){
        SD.checked = false;
        SI.checked = false;
    }else if(incognitaSC == "C"){
        XL.checked = false;
        DL.checked = false;
        IL.checked = false;
        XC.checked = false;
        DC.checked = false;
        IC.checked = false;
        XR.checked = false;
        DR.checked = false;
        IR.checked = false;
    }
};
function enableRadios(){
    if(incognitaSC == "S"){
        SD.disabled = false;
        SI.disabled = false;
    }else if(incognitaSC == "C"){
        XL.disabled = false;
        DL.disabled = false;
        IL.disabled = false;
        XC.disabled = false;
        DC.disabled = false;
        IC.disabled = false;
        XR.disabled = false;
        DR.disabled = false;
        IR.disabled = false;
    };

};
function disableButtonResultado(){
    btnResultPC.disabled = true;
    btnResultPC.classList.remove("btnResult");
    btnResultPC.classList.add("btnInactive");
};
function enableButtonResultado(){
    btnResultPC.disabled = false;
    btnResultPC.classList.remove("btnInactive");
    btnResultPC.classList.add("btnResult");
};
function clearS_C(){
    clearRadios();
    enableRadios();
    clearColor();
    clearInputsWindows();
    enableWindow();
    enableButtonResultado();
    pResultPC.innerHTML = ""; 
};
//----Funcion asignaciones y renderizado--------------------------------------------------
function asignacionesWindowsRadios(){
    if(loadVar == "SDI"){
        SD = document.querySelector("#radPCD");
        SI = document.querySelector("#radPCI");
        winA = document.querySelector("#winSDIvalorA");
        winB = document.querySelector("#winSDIvalorB");
        winW = document.querySelector("#winSDIvalorW");
        winY = document.querySelector("#winSDIvalorY");
        winA.classList.remove("resultColor");
        winB.classList.remove("resultColor");
        winW.classList.remove("resultColor");
        winY.classList.remove("resultColor");
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
        winA = document.querySelector("#winCDIMvalorA");
        winB = document.querySelector("#winCDIMvalorB");
        winC = document.querySelector("#winCDIMvalorC");
        winW = document.querySelector("#winCDIMvalorW");
        winY = document.querySelector("#winCDIMvalorY");
        winZ = document.querySelector("#winCDIMvalorZ");
        XL.checked = false;
        XC.checked = false;
        XR.checked = false;
        winA.classList.remove("resultColor");
        winB.classList.remove("resultColor");
        winC.classList.remove("resultColor");
        winW.classList.remove("resultColor");
        winY.classList.remove("resultColor");
        winZ.classList.remove("resultColor");
    }else if(loadVar == "DESC"){
        winA = document.querySelector("#winPrecio");
        winB = document.querySelector("#winDescuento");
        winA.classList.remove("resultColor");
        winB.classList.remove("resultColor");
    };
};
function topContainer(objeto){
    containerResponsive.appendChild(simpleDirectaImg);
    simpleDirectaImg.classList.add("simpleDirectaImg");
    simpleDirectaImg.appendChild(titleFig);
    titleFig.classList.add("titleFig");
    titleFig.innerHTML = objeto.titleFig;
    simpleDirectaImg.appendChild(imgSD);
    imgSD.setAttribute("src", objeto.imgFig);
};
function bottomContainer(objeto){
//----Top--------------------------------------------------------------------------------   
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
// ----Top middle------------------------------------------------------------------------   
        // sectionPCmiddleTop.innerHTML = "";
        if(objeto.radios == "Simple"){
            sectionPCmiddleTop.classList.add("sectionPCmiddleTop");
            const divRadioPC = document.createElement("div");
            divRadioPC.classList.add("divRadioPC");
            const inputRadioPCD = document.createElement("input");
            inputRadioPCD.setAttribute("type", "radio");
            inputRadioPCD.setAttribute("name", "radPCDI");
            inputRadioPCD.setAttribute("id", "radPCD");
            const inputLabelPCD = document.createElement("label");
            inputLabelPCD.setAttribute("for", "radPCD");
            inputLabelPCD.innerHTML = "Directa";
            const inputRadioPCI = document.createElement("input");
            inputRadioPCI.setAttribute("type", "radio");
            inputRadioPCI.setAttribute("name", "radPCDI");
            inputRadioPCI.setAttribute("id", "radPCI");
            const inputLabelPCI = document.createElement("label");
            inputLabelPCI.setAttribute("for", "radPCI");
            inputLabelPCI.innerHTML = "Inversa";
            divRadioPC.append(inputRadioPCD, inputLabelPCD,  inputRadioPCI, inputLabelPCI);
            sectionPCmiddleTop.appendChild(divRadioPC);
            loadVar = "SDI";
            incognitaSC = "S";
        }else if(objeto.radios == "Compuesta"){
            sectionPCmiddleTop.classList.add("sectionPCmiddleTop");
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
            incognitaSC = "C";
        }else if(objeto.radios == "Descuento"){
            loadVar = "DESC";
        };
//----BottomMiddle-----------------------------------------------------------------------
        sectionPCmiddle.classList.remove(classSimpCompDesc);
        classSimpCompDesc = objeto.secMid;
        sectionPCmiddle.classList.add(classSimpCompDesc);

        objeto.inputPorcentaje.forEach(winInput => {
            const divWin = document.createElement("div");
            divWin.classList.add(objeto.winPos);
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
            divPorcentaje.append(sectionPCtop, sectionPCmiddleTop, sectionPCmiddle);
            
        });
        if(loadVar == "DESC"){
            const sectionPCmidMid = document.createElement("div");
            sectionPCmidMid.classList.add("infoDesc");
            const precioOrig = document.createElement("p");
            precioOrig.innerHTML = "Precio $ 300";
            const cantDesc = document.createElement("p");
            cantDesc.innerHTML = "Descuento $ 30";
            const totalPay = document.createElement("p");
            totalPay.innerHTML = "Total a pagar $ 260";
            sectionPCmidMid.append(precioOrig, cantDesc, totalPay);
            divPorcentaje.append(sectionPCtop, sectionPCmiddle, sectionPCmidMid);
        };

//----Bottom------------------------------------------------------------------------------    
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
        // divPorcentaje.append(sectionPCtop, sectionPCmiddleTop, sectionPCmiddle, sectionPCbottom);
        divPorcentaje.append(sectionPCbottom);
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
    };
}
//----Operaciones Simple-----------------------------------------------------------------
function inc_Simple(){
    if(SD.checked || SI.checked){
        if(winA.value == ""){
            if(SD.checked){
                result = Number((winW.value * winB.value) / winY.value);
            }else if(SI.checked){
                result = Number((winW.value * winY.value) / winB.value);
            };
            winA.classList.add("resultColor");
            winA.value = result.toFixed(2);
        }else if(winB.value == ""){
            console.log("B");
            if(SD.checked){
                result = Number((winY.value * winA.value) / winW.value);
            }else if(SI.checked){
                result = Number((winY.value * winW.value) / winA.value);
            };
            winB.classList.add("resultColor");
            winB.value = result.toFixed(2);
        }else if(winW.value == ""){
            console.log("W");
            if(SD.checked){
                result = Number((winA.value * winY.value) / winB.value);
            }else if(SI.checked){
                result = Number((winA.value * winB.value) / winY.value);
            };
            winW.classList.add("resultColor");
            winW.value = result.toFixed(2);
        }else if(winY.value == ""){
            if(SD.checked){
                result = Number((winB.value * winW.value) / winA.value);
            }else if(SI.checked){
                result = Number((winB.value * winA.value) / winW.value);
            };
            winY.classList.add("resultColor");
            winY.value = result.toFixed(2);
        };
        if(SD.checked){
            SI.disabled = true;
        }else if(SI.checked){
            SD.disabled = true;
        };
        pResultPC.innerHTML = `Resultado = ${result.toFixed(2)}`;
        disableWindow();
        disableButtonResultado(); 
    }else{
        pResultPC.innerHTML = "Elegir directa o inversa";
    };
};
//----Operaciones Compuesta--------------------------------------------------------------
function incognitaAW (){
    if(DC.checked && DR.checked){
        magnitud1 = winB.value * winC.value;
        magnitud2 = winY.value * winZ.value;
        IC.disabled = true;
        IR.disabled = true;
    }else if(IC.checked && IR.checked){
        magnitud1 = winY.value * winZ.value;
        magnitud2 = winB.value * winC.value;
        DC.disabled = true;
        DR.disabled = true;
    }else if(DC.checked && IR.checked){
        magnitud1 = winB.value * winZ.value;
        magnitud2 = winY.value * winC.value;
        IC.disabled = true;
        DR.disabled = true;
    }else if(IC.checked && DR.checked){
        magnitud1 = winY.value * winC.value;
        magnitud2 = winB.value * winZ.value;
        DC.disabled = true;
        IR.disabled = true;
    };
    if(winA.value == ""){
        resultR3C = winW.value * magnitud1 / magnitud2;
        pResultPC.innerHTML = `Resultado ${resultR3C.toFixed(2)}`;
        winA.value = resultR3C.toFixed(2);
        winA.classList.add("resultColor");
        disableWindow();
        disableButtonResultado();
    }else if(winW.value == ""){
        resultR3C = winA.value * magnitud2 / magnitud1;
        pResultPC.innerHTML = `Resultado ${resultR3C.toFixed(2)}`;
        winW.value = resultR3C.toFixed(2);
        winW.classList.add("resultColor");
        disableWindow();
        disableButtonResultado(); 
    };
};
function incognitaBY(){
    if(DL.checked && DR.checked){
        magnitud1 = winA.value * winC.value;
        magnitud2 = winW.value * winZ.value;
        IL.disabled = true;
        IR.disabled = true;
    }else if(IL.checked && IR.checked){
        magnitud1 = winW.value * winZ.value;
        magnitud2 = winA.value * winC.value;
        DL.disabled = true;
        DR.disabled = true;
    }else if(DL.checked && IR.checked){
        magnitud1 = winA.value * winZ.value;
        magnitud2 = winW.value * winC.value;
        IL.disabled = true;
        DR.disabled = true;
    }else if(IL.checked && DR.checked){
        magnitud1 = winW.value * winC.value;
        magnitud2 = winA.value * winZ.value;
        DL.disabled = true;
        IR.disabled = true;
    };
    if(winB.value == ""){
        resultR3C = winY.value * magnitud1 / magnitud2;
        pResultPC.innerHTML = `Resultado ${resultR3C.toFixed(2)}`;
        winB.value = resultR3C.toFixed(2);
        winB.classList.add("resultColor");
        disableWindow();
        disableButtonResultado();
    }else if(winY.value == ""){
        resultR3C = winB.value * magnitud2 / magnitud1;
        pResultPC.innerHTML = `Resultado ${resultR3C.toFixed(2)}`;
        winY.value = resultR3C.toFixed(2);
        winY.classList.add("resultColor");
        disableWindow();
        disableButtonResultado(); 
    };
};
function incognitaCZ(){
    if(DL.checked && DC.checked){
        magnitud1 = winA.value * winB.value;
        magnitud2 = winW.value * winY.value;
        IL.disabled = true;
        IC.disabled = true;
    }else if(IL.checked && IC.checked){
        magnitud1 = winW.value * winY.value;
        magnitud2 = winA.value * winB.value;
        DL.disabled = true;
        DC.disabled = true;
    }else if(DL.checked && IC.checked){
        magnitud1 = winA.value * winY.value;
        magnitud2 = winW.value * winB.value;
        IL.disabled = true;
        DC.disabled = true;
    }else if(IL.checked && DC.checked){
        magnitud1 = winW.value * winB.value;
        magnitud2 = winA.value * winY.value;
        DL.disabled = true;
        IC.disabled = true;
    };
    if(winC.value == ""){
        resultR3C = winZ.value * magnitud1 / magnitud2;
        pResultPC.innerHTML = `Resultado ${resultR3C.toFixed(2)}`;
        winC.value = resultR3C.toFixed(2);
        winC.classList.add("resultColor");
        disableWindow();
        disableButtonResultado();
    }else if(winZ.value == ""){
        resultR3C = winC.value * magnitud2 / magnitud1;
        pResultPC.innerHTML = `Resultado ${resultR3C.toFixed(2)}`;
        winZ.value = resultR3C.toFixed(2);
        winZ.classList.add("resultColor");
        disableWindow();
        disableButtonResultado();
    };
};
//----Desactivar radios en relacion a X compuesta---------------------------------------
function leftDisabledR(){
    XL.checked = true;
    DL.disabled = true;
    IL.disabled = true;
    XC.disabled = true;
    XR.disabled = true;
};
function centerDisabledR(){
    XL.disabled = true;
    XC.checked = true;
    DC.disabled = true;
    IC.disabled = true;
    XR.disabled = true;
};
function rightDisabledR(){
    XL.disabled = true;
    XC.disabled = true;
    XR.checked = true;
    DR.disabled = true;
    IR.disabled = true;
};
//----Funciones renderizado-------------------------------------------------------------
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
    topContainer(objeto);
    bottomContainer(objeto);   
    asignacionesWindowsRadios()    
    document.documentElement.scrollTop = 0;
};
//----Funciones Logica de calculadoras--------------------------------------------------
function pcSDI(){
    if(winA.value == "" && winB.value > 0 && winW.value > 0 && (winY.value > 0 )){
            inc_Simple();
    }else if(winA.value > 0 && winB.value == "" && winW.value > 0 && winY.value > 0){
            inc_Simple();
    }else if(winA.value > 0 && winB.value > 0 && winW.value == "" && winY.value > 0){
            inc_Simple();
    }else if(winA.value > 0 && winB.value > 0 && winW.value > 0 && winY.value == ""){
            inc_Simple();
    }else{
        pResultPC.innerHTML = "Introduce 3 valores conocidos<br>y deja vacia la incognita.";
    };
};
function pcCDIM(){
    //-------------------------Window A y W----------------------------
    if((winA.value == "" && winB.value > 0 && winC.value > 0 && winW.value > 0 && winY.value > 0 && winZ.value > 0) || (winA.value > 0 && winB.value > 0 && winC.value > 0 && winW.value == "" && winY.value > 0 && winZ.value > 0)){
        if((XL.checked || DL.checked || IL.checked) && (XC.checked || DC.checked || IC.checked) && (XR.checked || DR.checked || IR.checked)){
            if((XL.checked && DC.checked && DR.checked) || (XL.checked && IC.checked && IR.checked) || (XL.checked && DC.checked && IR.checked) || (XL.checked && IC.checked && DR.checked)){
                incognitaAW ();
                leftDisabledR();
            }else{
                leftDisabledR();
                pResultPC.innerHTML = "Solo una incognita (X) es permitida<br>mas una combinacion de (D) e (I)";
            };
        }else{
            pResultPC.innerHTML = "Elegir su relacion directa (D)<br>o inversa (I) respecto a (X)";
        };
    //-------------------------Window B y Y----------------------------
    }else if((winA.value > 0 && winB.value == "" && winC.value > 0 && winW.value > 0 && winY.value > 0 && winZ.value > 0) || (winA.value > 0 && winB.value > 0 && winC.value > 0 && winW.value > 0 && winY.value == "" && winZ.value > 0)){
        if((XL.checked || DL.checked || IL.checked) && (XC.checked || DC.checked || IC.checked) && (XR.checked || DR.checked || IR.checked)){
            if((DL.checked && XC.checked && DR.checked) || (IL.checked && XC.checked && IR.checked) || (DL.checked && XC.checked && IR.checked) || (IL.checked && XC.checked && DR.checked)){
                incognitaBY ();
                centerDisabledR();
            }else{
                centerDisabledR();
                pResultPC.innerHTML = "Solo una incognita (X) es permitida<br>mas una combinacion de (D) e (I)";
            };
        }else{
            pResultPC.innerHTML = "Elegir su relacion directa (D)<br>o inversa (I) respecto a (X)";
        };
    //-------------------------Window C y Z----------------------------
    }else if((winA.value > 0 && winB.value > 0 && winC.value == ""  && winW.value > 0 && winY.value > 0 && winZ.value > 0) || (winA.value > 0 && winB.value > 0 && winC.value > 0 && winW.value > 0 && winY.value > 0 && winZ.value == "")){
        if((XL.checked || DL.checked || IL.checked) && (XC.checked || DC.checked || IC.checked) && (XR.checked || DR.checked || IR.checked)){
            if((DL.checked && DC.checked && XR.checked) || (IL.checked && IC.checked && XR.checked) || (DL.checked && IC.checked && XR.checked) || (IL.checked && DC.checked && XR.checked)){
                incognitaCZ ();
                rightDisabledR();
            }else{
                rightDisabledR();
                pResultPC.innerHTML = "Solo una incognita (X) es permitida<br>mas una combinacion de (D) e (I)";
            };
        }else{
            pResultPC.innerHTML = "Elegir su relacion directa (D)<br>o inversa (I) respecto a (X)";
        };
    }else{
        pResultPC.innerHTML = "Introduce 5 valores conocidos<br>y deja vacia la incognita";
    };
};
function pcDescuento(){

}

// ===================================== Constantes =====================================
// ==============Constantes Container fig ===============================================
const containerFiguras = document.querySelector(".containerFiguras");
//----containerIntro---------------------------------------------------------------------
const containerIntro = document.createElement("section");
//----sectionDtop------------------------------------------------------------------------
const sectionDtop = document.createElement("div");
const defTitulo = document.createElement("h2");
const defImg = document.createElement("img");
//----sectionDmiddle---------------------------------------------------------------------
const sectionDmiddle = document.createElement("div");
const defPorcentajeTitulo = document.createElement("p");
const defPorcentaje = document.createElement("p");
const defPorcentaje2Titulo = document.createElement("p");
const defPorcentaje2 = document.createElement("p");
//----sectionDbottom---------------------------------------------------------------------
const sectionDbottom = document.createElement("div");
const defNotaTitulo = document.createElement("p");
const defNota = document.createElement("p");
const defGuiaTitulo = document.createElement("p");
const defGuia = document.createElement("p");
//----containerResponsive----------------------------------------------------------------
const containerResponsive = document.createElement("section");
//----simpleDirectaImg-------------------------------------------------------------------
const simpleDirectaImg = document.createElement("div");
const titleFig = document.createElement("h2");
const imgSD = document.createElement("img");
//----containerAltura--------------------------------------------------------------------
const containerPorcentaje = document.createElement("div");
//----divPorcentaje----------------------------------------------------------------------
const divPorcentaje = document.createElement("div");
//----sectionPCtop ----------------------------------------------------------------------
const sectionPCtop = document.createElement("section");
const pTitlePC = document.createElement("p");
const pformulaPC = document.createElement("p");
//----sectionPCmiddle -------------------------------------------------------------------
const sectionPCmiddleTop = document.createElement("section");
const sectionPCmiddle = document.createElement("section");
const divRadioPCCL = document.createElement("div");
const divRadioPCCC = document.createElement("div");
const divRadioPCCR = document.createElement("div");
//----sectionHbottom --------------------------------------------------------------------
const sectionPCbottom = document.createElement("section");
const pResultPC = document.createElement("p");
const btnResultPC = document.createElement("button");
//----sectionPtop -----------------------------------------------------------------------
const sectionPC2top = document.createElement("section");
const pTitlePC2 = document.createElement("p");
const pformulaPC2 = document.createElement("p");
//----sectionPmiddle --------------------------------------------------------------------
const divRadioPC2 = document.createElement("div");
const inputLabelPC2C = document.createElement("label");
const inputLabelPC2M = document.createElement("label");
//----sectionPbottom --------------------------------------------------------------------
const sectionPC2bottom = document.createElement("section");
const btnClearPC = document.createElement("button");

// ====================================== variables =====================================
//----inputs windows --------------------------------------------------------------------
let winA = null;
let winB = null;
let winC = null;
let winW = null;
let winY = null;
let winZ = null;
//----
let loadVar = null;
//----Magnitudes-------------------------------------------------------------------------
let magnitud1 = null;
let magnitud2 = null;
//----window mensaje resultado-----------------------------------------------------------
let resultR3C = null;
//----inputs radios----------------------------------------------------------------------
//----compuesta--------------------------------------------------------------------------
let XL = null;
let DL = null;
let IL = null;
let XC = null;
let DC = null;
let IC = null;
let XR = null;
let DR = null;
let IR = null;
//----simple-----------------------------------------------------------------------------
let SD = null;
let SI = null;
//----Buttons y window result------------------------------------------------------------
let btnResultPCReg;
let btnClearPCReg;
let pResultPCReg;
let rutaFPC;
let rutaFClear;
let classSimpCompDesc;
let incognitaSC;
let result;

//----Inicio-----------------------------------------------------------------------------
renderIntroduccion();