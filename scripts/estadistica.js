
const body = document.querySelector(".body");
const medida = document.querySelector(".medida");
const listIndex = document.querySelector(".listIndex");
const blurC = document.querySelector(".blurC");

medida.addEventListener("click", figurasFnc);
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

    const figSelect = estadisticaArray.find(obj => obj.id === figura);
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
    sectionEstmiddle.innerHTML = "";
    // ---- Limpieza de Ventanas de mensajes y borrado de clase ----
    pResultEstMedia.innerHTML = "";
    pResultEstMedia.classList.remove(pResultEstMediaReg);

    pResultEstMediana.innerHTML = "";
    pResultEstMediana.classList.remove(pResultEstMedianaReg);

    pResultEstModa.innerHTML = "";
    pResultEstModa.classList.remove(pResultEstModaReg);
    // ---- Borrado de clases y abilitar botones ----
    btnResultEst.classList.remove(btnResultEstReg);
    btnClearEst.classList.remove(btnClearEstReg);
    btnResultEst.disabled = false;
    btnResultEst.classList.remove("btnInactive");
    // ----  ----
    containerEstadistica.innerHTML = "";
    divCalculadora.innerHTML = "";
}
//--- funciones para deshabilitar ventanas y botones de Area y Perimetro-----------------
function disableOptions(){
    if(idFig == "media_mediana_moda"){
        winH1.disabled = true;
    };
    btnResultEst.disabled = true;
    btnResultEst.classList.remove("btnResult");
    btnResultEst.classList.add("btnInactive");
}
//--- funciones para limpiar y habilitar radios ventanas y botones ----------------------
function clearEstOpt(){
    if(idFig == "media_mediana_moda"){
        winH1.disabled = false;
        winH1.value = "";
        winH1.classList.remove("resultColor");
    };
    habilitarIntercambiar();
    pResultEstMediaReg.innerHTML = ""; 
};

function habilitarIntercambiar(){
    btnResultEst.disabled = false;
    btnResultEst.classList.remove("btnInactive");
    btnResultEst.classList.add("btnResult");
};
//----Funcion asignaciones --------------------------------------------------------------
function asignacionesWindows(){
    if(idFig == "media_mediana_moda"){
        winH1 = document.querySelector("#textAreaId");
    };
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
//----Funciones mensajes ----------------------------------------------------------------
function mensajeCmMt(){
    pResultEstMediaReg.innerHTML = "Elegir centimetros o metros";
};
function  mensajeTamanoLados(){
    pResultEstMediaReg.innerHTML = "Lado b tiene que ser menor<br>que la base B en el trapecio";
}
function  mensajeMenorSLados(){
    pResultEstMediaReg.innerHTML = "La medida de la Base debe ser<br>menor a la suma de sus lados";
}
function mensajeMayorCero(){
    pResultEstMediaReg.innerHTML = "Lados deben de ser mayores a 0";
}
function mensajeBaseMedida(){
    pResultEstMediaReg.innerHTML = "La medida de la Base debe ser<br>mayor a la de los lados";
}
//----Funciones renderizado--------------------------------------------------------------
function renderIntroduccion(){
    borrar();
    containerEstadistica.appendChild(containerIntro);

    containerIntro.classList.add("containerIntro");

    defTitulo.classList.add("tituloIntro");
    defTitulo.innerHTML = estadisticaArray[0].defTitulo;
    defImg.classList.add("imgIntro");
    defImg.setAttribute("src", estadisticaArray[0].defImg);
    sectionDtop.classList.add("sectionDtop", "secD");
    sectionDtop.append(defTitulo, defImg);

    defEstadisticaTitulo.classList.add("defEstadisticaTitulo", "defT");
    defEstadisticaTitulo.innerHTML = estadisticaArray[0].defEstadisticaTitulo;
    defEstadistica.classList.add("defEstadistica", "defC");
    defEstadistica.innerHTML = estadisticaArray[0].defEstadistica;

    sectionDmiddle.classList.add("sectionDmiddle", "secD");
    sectionDmiddle.append(defEstadisticaTitulo, defEstadistica);

    defCategoriaTitulo.classList.add("defCategoriaTitulo", "defT");
    defCategoriaTitulo.innerHTML = estadisticaArray[0].defCategoriaTitulo;
    defCategoria.classList.add("defModa", "defC");
    defCategoria.innerHTML = estadisticaArray[0].defCategoria;
    
    defGuiaTitulo.classList.add("defGuiaTitulo", "defT");
    defGuiaTitulo.innerHTML = estadisticaArray[0].defGuiaTitulo;
    defGuia.classList.add("defGuia", "defC");
    defGuia.innerHTML = estadisticaArray[0].defGuia;
    
    sectionDbottom.classList.add("sectionDbottom", "secD");
    sectionDbottom.append(defCategoriaTitulo, defCategoria, defGuiaTitulo, defGuia);

    containerIntro.append(sectionDtop, sectionDmiddle, sectionDbottom);
    document.documentElement.scrollTop = 0;
};
function renderFigura(objeto){
    borrar();
    idFig = objeto.id;

    containerEstadistica.appendChild(containerResponsive);
    containerResponsive.classList.add("containerResponsive");

    containerResponsive.appendChild(instrMMMImg);
    instrMMMImg.classList.add("instrMMMImg");

    instrMMMImg.appendChild(titleMMM);
    titleMMM.classList.add("titleMMM");
    titleMMM.innerHTML = objeto.titleMMM;

    instrMMMImg.appendChild(imgMMM);
    imgMMM.setAttribute("src", objeto.imgMMM);

    containerResponsive.appendChild(containerEstCal);
    containerEstCal.classList.add("containerEstCal");
    containerEstCal.appendChild(divCalculadora);
    divCalculadora.classList.add("containerCalculadora");

    pTitlesEstadistica.classList.add("titlesEstadistica");
    pTitlesEstadistica.innerHTML = objeto.titleMeMeMo;
    pEstadistica.classList.add("textEstadistica");
    pEstadistica.innerHTML = "Calculadora";
    sectionEsttop.classList.add("sectionEsttop");
    sectionEsttop.append(pTitlesEstadistica, pEstadistica);

    sectionEstmiddle.classList.add("sectionEstmiddle");

    objeto.inputMeMeMo.forEach(winInput => {
        const divEntryWin = document.createElement("div");
        divEntryWin.classList.add("EntryWin");

        const labelArea = document.createElement("label");
        labelArea.setAttribute("for", winInput.inputId);
        labelArea.innerHTML = winInput.inputLabel;

        const textarea = document.createElement("textarea");
        textarea.setAttribute("id", winInput.inputId);
        textarea.classList.add(winInput.inputCl);
        divEntryWin.append(labelArea, textarea);
        sectionEstmiddle.append(divEntryWin);
    });

    btnClearEstReg = objeto.btn2ClEst;
    btnClearEst.classList.add("btnClear", btnClearEstReg);
    btnClearEst.innerHTML = "Borrar";

    btnResultEstReg = objeto.btnClEst;
    btnResultEst.classList.add("btnResult", btnResultEstReg);
    btnResultEst.innerHTML = "Resultado";

    btnClearEst.removeEventListener("click", rutaFEstClear);
    rutaFEstClear = (eval(objeto.clearWindowEst));
    btnClearEst.addEventListener("click", rutaFEstClear);

    btnResultEst.removeEventListener("click", rutaFEst);
    rutaFEst = (eval(objeto.funcionEst));
    btnResultEst.addEventListener("click", rutaFEst);

    pResultEstMediaReg = objeto.resultEstMedia
    pResultEstMedia.classList.add("winStyleSmall", pResultEstMediaReg);

    pResultEstMedianaReg = objeto.resultEstMediana
    pResultEstMediana.classList.add("winStyleSmall", pResultEstMedianaReg);

    pResultEstModaReg = objeto.resultEstModa
    pResultEstModa.classList.add("winStyleSmall", pResultEstModaReg);
    
    contSectEstBottom.classList.add("contSectEstBottom");
    contSectEstBottom.append(pResultEstMedia, pResultEstMediana, pResultEstModa);

    sectionEstbottom.classList.add("sectionEstbottom");
    sectionEstbottom.append(contSectEstBottom, btnClearEst, btnResultEst);
    divCalculadora.append(sectionEsttop, sectionEstmiddle, sectionEstbottom);

    asignacionesWindows();
    document.documentElement.scrollTop = 0;
};
// ------------------------ Operaciones -----------------------------------------------------
// ------------- Estadistica Media Mediana Moda ------------------------------------------
function estadisticaMMM(){
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
            pResultEstMediaReg.innerHTML = `Altura = ${result.toFixed(2)} ${medidaH}`;
        }else{
            mensajeCmMt();
        }
    }else{
        mensajeMayorCero();
    }
}
// ================================= Constantes =========================================
// =========================== Constantes Container fig =================================
const containerEstadistica = document.querySelector(".containerEstadistica");
// -------------------------------- containerIntro --------------------------------------
const containerIntro = document.createElement("section");
// ---------------------------------- sectionDtop ---------------------------------------
const sectionDtop = document.createElement("div");
const defTitulo = document.createElement("h2");
const defImg = document.createElement("img");
// --------------------------------- sectionDmiddle -------------------------------------
const sectionDmiddle = document.createElement("div");
const defEstadisticaTitulo = document.createElement("p");
const defEstadistica = document.createElement("p");
const defMediaTitulo = document.createElement("p");
const defMedia = document.createElement("p");
// --------------------------------- sectionDbottom -------------------------------------
const sectionDbottom = document.createElement("div");
const defCategoriaTitulo = document.createElement("p");
const defCategoria = document.createElement("p");
const defGuiaTitulo = document.createElement("p");
const defGuia = document.createElement("p");
// ------------------------------ containerResponsive -----------------------------------
const containerResponsive = document.createElement("section");
// ---------------------------------- instrMMMImg ----------------------------------------
const instrMMMImg = document.createElement("div");
const titleMMM = document.createElement("h2");
const imgMMM = document.createElement("img");
// ------------------------------ containerEstCal ----------------------------------------
const containerEstCal = document.createElement("div");
// ----------------------------------- divCalculadora -----------------------------------------
const divCalculadora = document.createElement("div");
// --------------------------------- sectionEsttop -----------------------------------------
const sectionEsttop = document.createElement("section");
const pTitlesEstadistica = document.createElement("p");
const pEstadistica = document.createElement("p");
// -------------------------------- sectionEstmiddle ---------------------------------------
const sectionEstmiddle = document.createElement("section");

// -------------------------------- sectionEstbottom ---------------------------------------
const sectionEstbottom = document.createElement("section");
const contSectEstBottom = document.createElement("div");
const pResultEstMedia = document.createElement("p");
const pResultEstMediana = document.createElement("p");
const pResultEstModa = document.createElement("p");

const btnResultEst = document.createElement("button");
const btnClearEst = document.createElement("button");

let medidaH;

let btnClearEstReg;
let btnResultEstReg;

let pResultEstMediaReg;
let pResultEstMedianaReg;
let pResultEstModaReg;

let rutaFEst;
let rutaFEstClear;

let winH1 = null;
let winH2 = null;
let winH3 = null;
// --- Variable de identificacion de figura ----------------------------------------------
let idFig = "";
renderIntroduccion();

