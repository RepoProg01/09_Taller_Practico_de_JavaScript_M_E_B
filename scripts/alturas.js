
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
    const target = event.target.innerText.toLowerCase();
    const figura = target.replaceAll(" ","_");
    const figSelect = AlturasArray.find(obj => obj.id === figura);
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
    medidaH = null;
    // ----  ----
    sectionHmiddle.innerHTML = "";
    // ---- Limpieza de Ventanas de mensajes y borrado de clase ----
    pResultH.innerHTML = "";
    pResultH.classList.remove(pResultHReg);
    // ---- Borrado de clases y abilitar botones ----
    btnResultH.classList.remove(btnResultHReg);
    btnClearH.classList.remove(btnClearHReg);
    btnResultH.disabled = false;
    btnResultH.classList.remove("btnInactive");
    // ----  ----
    containerFiguras.innerHTML = "";
    divAltura.innerHTML = "";
    // ---- Deseleccionar radios ----
    inputRadioHC.checked = false;
    inputRadioHM.checked = false;
    // ---- Abilitar radios ----
    inputRadioHC.disabled = false;
    inputRadioHM.disabled = false;
}
//--- funciones para deshabilitar ventanas y botones de Area y Perimetro-----------------
function disableOptions(){
    if(idFig == "triángulo_equilátero"){
        winH1.disabled = true;
    }else if(idFig == "triángulo_isósceles"){
        winH1.disabled = true;
        winH2.disabled = true;
    }else if(idFig == "triángulo_escaleno" || idFig == "trapecio"){
        winH1.disabled = true;
        winH2.disabled = true;
        winH3.disabled = true;
    }
    btnResultH.disabled = true;
    btnResultH.classList.remove("btnResult");
    btnResultH.classList.add("btnInactive");
}
//--- funciones para limpiar y habilitar radios ventanas y botones ----------------------
function clearHFig(){
    if(idFig == "triángulo_equilátero"){
        winH1.disabled = false;
        winH1.value = "";
        winH1.classList.remove("resultColor");
    }else if(idFig == "triángulo_isósceles"){
        winH1.disabled = false;
        winH2.disabled = false;
        winH1.value = "";
        winH2.value = "";
        winH1.classList.remove("resultColor");
        winH2.classList.remove("resultColor");
    }else if(idFig == "triángulo_escaleno" || idFig == "trapecio"){
        winH1.disabled = false;
        winH2.disabled = false;
        winH3.disabled = false;
        winH1.value = "";
        winH2.value = "";
        winH3.value = "";  
        winH1.classList.remove("resultColor");
        winH2.classList.remove("resultColor");
        winH3.classList.remove("resultColor");     
    };
    medDisableUnchecked();
    abilitarIntercambiar();
    pResultH.innerHTML = ""; 
};
function medDisableUnchecked(){
    // ---- Abilitar radios ----
    inputRadioHC.disabled = false;
    inputRadioHM.disabled = false;
    // ---- Limpiar radios ----
    inputRadioHC.checked = false;
    inputRadioHM.checked = false;
};
function abilitarIntercambiar(){
    btnResultH.disabled = false;
    btnResultH.classList.remove("btnInactive");
    btnResultH.classList.add("btnResult");
};
//----Funcion asignaciones --------------------------------------------------------------
function asignacionesWindows(){
    if(idFig == "triángulo_equilátero"){
        winH1 = document.querySelector("#winHTriEquiSide");
    }else if(idFig == "triángulo_isósceles"){
        winH1 = document.querySelector("#winHTriIsoSideEq");
        winH2 = document.querySelector("#winHTriIsoBase");
    }else if(idFig == "triángulo_escaleno"){
        winH1 = document.querySelector("#winHTriEscSide1");
        winH2 = document.querySelector("#winHTriEscSide2");
        winH3 = document.querySelector("#winHTriEscBase");
    }else if(idFig == "trapecio"){
        winH1 = document.querySelector("#winHTrapecioSide1");
        winH2 = document.querySelector("#winHTrapeciobase");
        winH3 = document.querySelector("#winHTrapecioBase");
    }
};
//----Funciones seleccion y vaciado medida-----------------------------------------------
function medSeleccion() {
    if(inputRadioHC.checked) {
        medidaH = "cm";
    }else if(inputRadioHM.checked) {
        medidaH = "m";
    };
};
function medEnableDisable(){
    if(inputRadioHC.checked){
        inputRadioHM.disabled = true;
    }else if(inputRadioHM.checked){
        inputRadioHC.disabled = true;
    };
};
//----Funcion formato ----------------------------------------------------------------
const formato = (number) => {
    const exp = /(\d)(?=(\d{3})+(?!\d))/g;
    const rep = '$1,';
    let arr = number.toString().split('.');
    arr[0] = arr[0].replace(exp,rep);
    return arr[1] ? arr.join('.'): arr[0];
  }
//----Funciones mensajes ----------------------------------------------------------------
function mensajeCmMt(){
    pResultH.innerHTML = "Elegir centímetros o metros";
};
function  mensajeTamanoLados(){
    pResultH.innerHTML = "Lado b tiene que ser menor<br>que la base B en el trapecio";
}
function  mensajeMenorSLados(){
    pResultH.innerHTML = "La medida de la Base debe ser<br>menor a la suma de sus lados";
}
function mensajeMayorCero(){
    pResultH.innerHTML = "Lados deben de ser mayores a 0";
}
function mensajeBaseMedida(){
    pResultH.innerHTML = "La medida de la Base debe ser<br>mayor a la de los lados";
}
//----Funciones renderizado--------------------------------------------------------------
function renderIntroduccion(){
    borrar();
    containerFiguras.appendChild(containerIntro);

    containerIntro.classList.add("containerIntro");

    defTitulo.classList.add("tituloIntro");
    defTitulo.innerHTML = AlturasArray[0].defTitulo;
    defImg.classList.add("imgIntro");
    defImg.setAttribute("src", AlturasArray[0].defImg);
    sectionDtop.classList.add("sectionDtop", "secD");
    sectionDtop.append(defTitulo, defImg);

    defAlturaTitulo.classList.add("defAlturaTitulo", "defT");
    defAlturaTitulo.innerHTML = AlturasArray[0].defAlturaTitulo;
    defAltura.classList.add("defAltura", "defC");
    defAltura.innerHTML = AlturasArray[0].defAltura;
    defAltura2Titulo.classList.add("defBaseHTitulo", "defT");
    defAltura2Titulo.innerHTML = AlturasArray[0].defAltura2Titulo;
    defAltura2.classList.add("defPerimetro", "defC");
    defAltura2.innerHTML = AlturasArray[0].defAltura2;
    sectionDmiddle.classList.add("sectionDmiddle", "secD");
    sectionDmiddle.append(defAlturaTitulo, defAltura, defAltura2Titulo, defAltura2);

    defNotaTitulo.classList.add("defNotaTitulo", "defT");
    defNotaTitulo.innerHTML = AlturasArray[0].defNotaTitulo;
    defNota.classList.add("defNota", "defC");
    defNota.innerHTML = AlturasArray[0].defNota;
    defGuiaTitulo.classList.add("defGuiaTitulo", "defT");
    defGuiaTitulo.innerHTML = AlturasArray[0].defGuiaTitulo;
    defGuia.classList.add("defGuia", "defC");
    defGuia.innerHTML = AlturasArray[0].defGuia;
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

    containerResponsive.appendChild(containerAltura);
    containerAltura.classList.add("containerAltura");
    containerAltura.appendChild(divAltura);
    divAltura.classList.add("containerFormules");

    pTitleH.classList.add("titlesFormules");
    pTitleH.innerHTML = objeto.titleAltura;
    pformulaH.classList.add("textFormule");
    pformulaH.innerHTML = "Calculadora";
    sectionHtop.classList.add("sectionHtop");
    sectionHtop.append(pTitleH, pformulaH);

    divRadioH.classList.add("divRadioH");
    inputRadioHC.setAttribute("type", "radio");
    inputRadioHC.setAttribute("name", "radH");
    inputRadioHC.setAttribute("id", "radHC");
    inputLabelHC.setAttribute("for", "radHC");
    inputLabelHC.innerHTML = "centímetros";
    inputRadioHM.setAttribute("type", "radio");
    inputRadioHM.setAttribute("name", "radH");
    inputRadioHM.setAttribute("id", "radHM");
    inputLabelHM.setAttribute("for", "radHM");
    inputLabelHM.innerHTML = "metros";
    divRadioH.append(inputRadioHC, inputLabelHC, inputRadioHM, inputLabelHM);
    sectionHmiddle.classList.add("sectionHmiddle");
    sectionHmiddle.appendChild(divRadioH);

    objeto.inputAltura.forEach(winInput => {
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
        sectionHmiddle.appendChild(divWin);
    });

    btnClearHReg = objeto.btn2ClH;
    btnClearH.classList.add("btnClear", btnClearHReg);
    btnClearH.innerHTML = "Borrar";

    btnResultHReg = objeto.btnClH;
    btnResultH.classList.add("btnResult", btnResultHReg);
    btnResultH.innerHTML = "Resultado";

    btnClearH.removeEventListener("click", rutaFHClear);
    rutaFHClear = (eval(objeto.clearWindowH));
    btnClearH.addEventListener("click", rutaFHClear);

    btnResultH.removeEventListener("click", rutaFH);
    rutaFH = (eval(objeto.funcionAltura));
    btnResultH.addEventListener("click", rutaFH);

    pResultHReg = objeto.resultClH
    pResultH.classList.add("winStyle", pResultHReg);
    
    sectionHbottom.classList.add("sectionHbottom");
    sectionHbottom.append(pResultH, btnClearH, btnResultH);
    divAltura.append(sectionHtop, sectionHmiddle, sectionHbottom);

    asignacionesWindows();
    document.documentElement.scrollTop = 0;
};
// ------------------------ Alturas -----------------------------------------------------
// ------------- altura de triangulo equilatero ------------------------------------------
function hTriangleEqui(){
    const w1Es = Number(winH1.value);
    if(w1Es > 0){
        if(inputRadioHC.checked || inputRadioHM.checked){
            medSeleccion();
            const lado = w1Es;
            const semiPerimeter = (lado + lado + lado) / 2;
            const process =  (2 / lado) * Math.sqrt((semiPerimeter * (semiPerimeter - lado) * (semiPerimeter - lado) * (semiPerimeter - lado)));
            const result =  process;
            medEnableDisable()
            disableOptions();
            winH1.classList.add("resultColor");
            pResultH.innerHTML = `Altura = ${formato(result.toFixed(2))} ${medidaH}`;
        }else{
            mensajeCmMt();
        }
    }else{
        mensajeMayorCero();
    }
}
// ------------- altura de triangulo isosceles ------------------------------------------
function hTriangleIso(){
    const w1Is = Number(winH1.value);
    const w2Is = Number(winH2.value);
    const numVerIso = (w1Is * 2);
    if(w1Is > 0 && w2Is > 0){
        if(w2Is < numVerIso){
            if(inputRadioHC.checked || inputRadioHM.checked){
                medSeleccion();
                const lado1 = w1Is;
                const base = w2Is;
                const result = Math.sqrt(Math.pow(lado1,2) - Math.pow( (base/2), 2) );
                medEnableDisable()
                disableOptions();
                winH1.classList.add("resultColor");
                winH2.classList.add("resultColor");
                pResultH.innerHTML = `Altura = ${formato(result.toFixed(2))} ${medidaH}`;
            }else{
                mensajeCmMt();
            }
        }else{
            mensajeMenorSLados();
        }
    }else{
        mensajeMayorCero();
    }
}
// ------------- altura de triangulo escaleno -------------------------------------------
function hTriEsc(){
    const w1Es = Number(winH1.value);
    const w2Es = Number(winH2.value);
    const w3Es = Number(winH3.value);
    const numVerEsc = w1Es + w2Es;
    if(w1Es > 0 && w2Es > 0 && w3Es > 0){
        if(w3Es < numVerEsc){
            if(inputRadioHC.checked || inputRadioHM.checked){
                medSeleccion();
                const lado1 = w1Es;
                const lado2 = w2Es;
                const base = w3Es;
                const semiPerimeter = (lado1 + lado2 + base) / 2;
                // const desestruc = [lado1, lado2, base];
                // const [a,b,c] = desestruc.sort((a,b) => b - a);
                const process =  (2 / base) * Math.sqrt((semiPerimeter * (semiPerimeter - lado1) * (semiPerimeter - lado2) * (semiPerimeter - base)));
                const result =  process;
                medEnableDisable()
                disableOptions();
                winH1.classList.add("resultColor");
                winH2.classList.add("resultColor");
                winH3.classList.add("resultColor");
                pResultH.innerHTML = `Altura = ${formato(result.toFixed(2))} ${medidaH}`;
            }else{
                mensajeCmMt();
            }
        }else{
            mensajeMenorSLados();
        }
    }else{
        mensajeMayorCero();
    }
}
// ------------- altura de trapecio -------------------------------------------
function hTrapecio(){
    const w1Trap = Number(winH1.value);
    const w2Trap = Number(winH2.value);
    const w3Trap = Number(winH3.value);
    if(w1Trap > 0 && w2Trap > 0 && w3Trap > 0){
        if(w2Trap < w3Trap){
            if(inputRadioHC.checked || inputRadioHM.checked){
                medSeleccion();
                const lado = w1Trap;
                const base = w2Trap;
                const Base = w3Trap;
                const baseParcial = (Base - base) / 2;
                const result = Math.sqrt( Math.pow(lado,2) - Math.pow(baseParcial,2) )
                medEnableDisable()
                disableOptions();
                winH1.classList.add("resultColor");
                winH2.classList.add("resultColor");
                winH3.classList.add("resultColor");
                pResultH.innerHTML = `Altura = ${formato(result.toFixed(2))} ${medidaH}`;
            }else{
                mensajeCmMt();
            }
        }else{
            mensajeTamanoLados();
        }
    }else{
        mensajeMayorCero();
    }
}
// ================================= Constantes =========================================
// =========================== Constantes Container fig =================================
const containerFiguras = document.querySelector(".containerFiguras");
// -------------------------------- containerIntro --------------------------------------
const containerIntro = document.createElement("section");
// ---------------------------------- sectionDtop ---------------------------------------
const sectionDtop = document.createElement("div");
const defTitulo = document.createElement("h2");
const defImg = document.createElement("img");
// --------------------------------- sectionDmiddle -------------------------------------
const sectionDmiddle = document.createElement("div");
const defAlturaTitulo = document.createElement("p");
const defAltura = document.createElement("p");
const defAltura2Titulo = document.createElement("p");
const defAltura2 = document.createElement("p");
// --------------------------------- sectionDbottom -------------------------------------
const sectionDbottom = document.createElement("div");
const defNotaTitulo = document.createElement("p");
const defNota = document.createElement("p");
const defGuiaTitulo = document.createElement("p");
const defGuia = document.createElement("p");
// ------------------------------ containerResponsive -----------------------------------
const containerResponsive = document.createElement("section");
// ---------------------------------- formulaImg ----------------------------------------
const formulaImg = document.createElement("div");
const titleFig = document.createElement("h2");
const imgFigura = document.createElement("img");
// ------------------------------ containerAltura ----------------------------------------
const containerAltura = document.createElement("div");
// ----------------------------------- divAltura -----------------------------------------
const divAltura = document.createElement("div");
// --------------------------------- sectionHtop -----------------------------------------
const sectionHtop = document.createElement("section");
const pTitleH = document.createElement("p");
const pformulaH = document.createElement("p");
// -------------------------------- sectionHmiddle ---------------------------------------
const sectionHmiddle = document.createElement("section");
const divRadioH = document.createElement("div");
const inputRadioHC = document.createElement("input");
const inputRadioHM = document.createElement("input");
const inputLabelHC = document.createElement("label");
const inputLabelHM = document.createElement("label");
// -------------------------------- sectionHbottom ---------------------------------------
const sectionHbottom = document.createElement("section");
const pResultH = document.createElement("p");
const btnResultH = document.createElement("button");
const btnClearH = document.createElement("button");

let medidaH;

let btnClearHReg;
let btnResultHReg;

let pResultHReg;

let rutaFH;
let rutaFHClear;

let winH1 = null;
let winH2 = null;
let winH3 = null;
// --- Variable de identificacion de figura ----------------------------------------------
let idFig = "";
renderIntroduccion();

