
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

    labelArea.innerHTML = "";
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
        winEstVar.disabled = true;
    };
    btnResultEst.disabled = true;
    btnResultEst.classList.remove("btnResult");
    btnResultEst.classList.add("btnInactive");
}
//--- funciones para limpiar y habilitar radios ventanas y botones ----------------------
function clearEstOpt(){
    if(idFig == "media_mediana_moda"){
        winEstVar.disabled = false;
        winEstVar.value = "";
        winEstVar.classList.remove("resultColor");
    };
    habilitarIntercambiar();
    labelArea.innerHTML = "";
    pResultEstMedia.innerHTML = ""; 
    pResultEstMediana.innerHTML = ""; 
    pResultEstModa.innerHTML = ""; 
};

function habilitarIntercambiar(){
    btnResultEst.disabled = false;
    btnResultEst.classList.remove("btnInactive");
    btnResultEst.classList.add("btnResult");
};
//----Funcion asignaciones --------------------------------------------------------------
function asignacionesWindows(){
    if(idFig == "media_mediana_moda"){
        winEstVar = document.querySelector("#textAreaId");
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
//----Funciones mensajes-----------------------------------------------------------------
function mensajeInsertarValores(){
    labelArea.innerHTML = "Introduce valores a comparar separados por una coma ( , )";
};
function mensajeSoloNum(){
    labelArea.innerHTML = "Solo valores enteros y decimales separados por comas son permitidos";
};
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

        labelArea.classList.add(winInput.outputMessageCl);

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

    titleResultEstMedia.innerHTML = "Media";
    titleResultEstMedia.classList.add("titleResults");
    pResultEstMediaReg = objeto.resultEstMedia
    pResultEstMedia.classList.add("winStyleSmall", pResultEstMediaReg);
    contPResultEstMedia.classList.add("contPResult");
    contPResultEstMedia.append(titleResultEstMedia, pResultEstMedia);

    titleResultEstMediana.innerHTML = "Mediana";
    titleResultEstMediana.classList.add("titleResults");
    pResultEstMedianaReg = objeto.resultEstMediana
    pResultEstMediana.classList.add("winStyleSmall", pResultEstMedianaReg);
    contPResultEstMediana.classList.add("contPResult");
    contPResultEstMediana.append(titleResultEstMediana, pResultEstMediana);

    titleResultEstModa.innerHTML = "Moda";
    titleResultEstModa.classList.add("titleResults");
    pResultEstModaReg = objeto.resultEstModa
    pResultEstModa.classList.add("winStyleSmall", pResultEstModaReg);
    contPResultEstModa.classList.add("contPResult");
    contPResultEstModa.append(titleResultEstModa, pResultEstModa);

    contSectEstBottom.classList.add("contSectEstBottom");
    contSectEstBottom.append(contPResultEstMedia, contPResultEstMediana, contPResultEstModa);

    sectionEstbottom.classList.add("sectionEstbottom");
    sectionEstbottom.append(contSectEstBottom, btnClearEst, btnResultEst);
    divCalculadora.append(sectionEsttop, sectionEstmiddle, sectionEstbottom);

    asignacionesWindows();
    document.documentElement.scrollTop = 0;
};
// ------------------------ Operaciones -----------------------------------------------------
// ------------- Estadistica Media Mediana Moda ------------------------------------------
// --- funciones de operaciones ---
function promedio(arrayNumber){
    const suma = arrayNumber.reduce((add,num) => add+=num);
    const cantidad = arrayNumber.length;
    const resPromedio = suma / cantidad;
    pResultEstMedia.innerText = resPromedio.toFixed(1);
}
function mediana(arrayNumber){
    const orden = arrayNumber.sort((a,b) => a-b);
    const cantidad = arrayNumber.length;
    let resMediana;
    if(cantidad % 2 == 0){
        const mitadP = cantidad / 2;
        resMediana = (orden[mitadP - 1] + orden[mitadP]) / 2;
    }else{
        const mitadI = (cantidad - 1) / 2;
        resMediana = orden[mitadI];
    }
    pResultEstMediana.innerText = resMediana.toFixed(1);
}
function moda(arrayNumber){
    const orden = arrayNumber.sort((a,b) => a-b);
    const repetidos = orden.reduce((a,i) => (a[i] ? a[i] +=1 : a[i] = 1, a),{})
    // --- Orden de valores en objeto de mayor a menor a un array---
    let arrayOrdenado = Object.entries(repetidos);
    arrayOrdenado.sort((a, b) => b[1] - a[1]);
    // --- Creacion de objeto "modaNumbers" con solo el numero(s) que se repite(n) mas veces ---
    const arrayFiltrado = [];
    let valorTemp = 0;
    arrayOrdenado.forEach(index => {
        if(index[1] >= valorTemp){
            arrayFiltrado.push([index[0],index[1]])
            valorTemp = index[1]
        }
    });
    arrayFiltrado.sort((a,b)=>a[0]-b[0]);
    // --- Impresion de resultado en ventana ---
    arrayFiltrado.forEach((v, i) => {
        if(i < arrayFiltrado.length - 1){
            pResultEstModa.innerHTML += v[0] + ", ";
        }else{
            pResultEstModa.innerHTML += v[0];
        }
    })
}
function estadisticaMMM(){
   // --- Expresion regular solo numeros puntos y comas son aceptados ---
   var regex = /^[\d.,]+$/;
   if(regex.test(textarea.value)){
       // --- Obteniendo datos de ventana de entrada como un solo strig ---
       const infoWindow = textarea.value;
       // --- Separando cada valor del string y poniendolo en un array ---
       const arrayString = infoWindow.split(",");
       // --- Creando un nuevo array cambiando los strings a numbers ---
       const arrayNumber = [];
       arrayString.forEach(element => {
           arrayNumber.push(Number(element));
       });
       promedio(arrayNumber);
       mediana(arrayNumber);
       moda(arrayNumber);
       disableOptions();
    //    textA.disabled = true;
    //    backGroundOff();
   }else{
        mensajeSoloNum();
        disableOptions();
   };
};

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

const contPResultEstMedia = document.createElement("div");
const contPResultEstMediana = document.createElement("div");
const contPResultEstModa = document.createElement("div");

const titleResultEstMedia = document.createElement("p");
const titleResultEstMediana = document.createElement("p");
const titleResultEstModa = document.createElement("p");

const pResultEstMedia = document.createElement("p");
const pResultEstMediana = document.createElement("p");
const pResultEstModa = document.createElement("p");

const btnResultEst = document.createElement("button");
const btnClearEst = document.createElement("button");

const labelArea = document.createElement("p");
const textarea = document.createElement("textarea");

let medidaH;

let btnClearEstReg;
let btnResultEstReg;

let pResultEstMediaReg;
let pResultEstMedianaReg;
let pResultEstModaReg;

let rutaFEst;
let rutaFEstClear;

let winEstVar = null;
// --- Variable de identificacion de figura ----------------------------------------------
let idFig = "";
renderIntroduccion();

