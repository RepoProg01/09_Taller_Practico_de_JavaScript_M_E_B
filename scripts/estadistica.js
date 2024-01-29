
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
    const target = event.target.innerText.toLowerCase();
    const figura = target.replaceAll(" ","_");
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
    textarea.value = "";
    textarea.disabled = false;
    textarea.classList.remove("resultColor");
    // ---- Limpieza de Ventanas de mensajes y borrado de clase ----
    pResultEstMedia.innerHTML = "";
    pResultEstMedia.classList.remove(pResultEstMediaReg);

    pResultEstMediana.innerHTML = "";
    pResultEstMediana.classList.remove(pResultEstMedianaReg);

    taResultEstModa.value = "";
    taResultEstModa.classList.remove(taResultEstModaReg);

    taResultEstModa.classList.remove("resultEstModaCero");
    taResultEstModa.disabled = "true";
    contSectEstBottom.innerHTML = "";
    // ---- Borrado de clases y abilitar botones ----
    btnResultEst.classList.remove(btnResultEstReg);
    btnClearEst.classList.remove(btnClearEstReg);
    btnResultEst.disabled = false;
    btnResultEst.classList.remove("btnInactive");
    // ----  ----
    containerEstadistica.innerHTML = "";
    divCalculadora.innerHTML = "";

    pTitlesEstadistica.classList.remove("titleImg");
}
//--- funciones para deshabilitar ventanas y botones de Area y Perimetro-----------------
function disableOptions(){
    if(idFig == "media_y_mediana" || idFig == "moda_cal"){
        winEstVar.disabled = true;
        winEstVar.classList.add("resultColor");
        // labelArea.innerHTML = "";
    };
    btnResultEst.disabled = true;
    btnResultEst.classList.remove("btnResult");
    btnResultEst.classList.add("btnInactive");

    pResultEstMedia.classList.remove("resultColor");
    pResultEstMediana.classList.remove("resultColor");
    taResultEstModa.classList.remove("resultColor");

}
//--- funciones para limpiar y habilitar radios ventanas y botones ----------------------
function clearEstOpt(){
    if(idFig == "media_y_mediana" || idFig == "moda_cal" ){
        winEstVar.disabled = false;
        winEstVar.value = "";
        winEstVar.classList.remove("resultColor");

        habilitarIntercambiar();
        labelArea.innerHTML = "";
        mensajeInsertarValores();
        pResultEstMedia.innerHTML = ""; 
        pResultEstMediana.innerHTML = ""; 
        taResultEstModa.value = ""; 

        pResultEstMedia.classList.add("resultColor");
        pResultEstMediana.classList.add("resultColor");
        taResultEstModa.classList.add("resultColor");

        pTitlesEstadistica.classList.remove("titleImg");
    };
};

function habilitarIntercambiar(){
    btnResultEst.disabled = false;
    btnResultEst.classList.remove("btnInactive");
    btnResultEst.classList.add("btnResult");
};
//----Funcion asignaciones --------------------------------------------------------------
function asignacionesWindows(){
    if(idFig == "media_y_mediana"){
        winEstVar = document.querySelector("#textAreaId");
    }
    else if(idFig == "moda_cal"){
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
//----Funciones mensajes-----------------------------------------------------------------
function mensajeInsertarValores(){
    labelArea.innerHTML = "Introduce valores a comparar separados por una coma ( , ) y sin espacios";
};
function mensajeSoloNum(){
    labelArea.innerHTML = "Solo valores enteros decimales separados por comas y sin espacios son permitidos";
};
function mensajeSoloCarac(){
    labelArea.innerHTML = "El orden debe ser elememto o caracter separado por comas y sin espacios";
};
function mensajeSinDuplicados(){
    labelArea.innerHTML = "No existe Moda ya que no se encontraron Duplicados";
};
function mensajeResultadoExitoso(){
    labelArea.innerHTML = "Calculación de Media y Mediana con éxito";
};
function mensajeResultadoExitosoModa(){
    labelArea.innerHTML = "Calculación de Moda con éxito";
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
    // -- Top Container ---
    containerResponsive.appendChild(instrMMImg);
    instrMMImg.classList.add("instrMMImg");
    instrMMImg.appendChild(titleMM);
    titleMM.classList.add("titleMM");
    titleMM.innerHTML = objeto.titleMM;
    instrMMImg.appendChild(imgMM);
    imgMM.setAttribute("src", objeto.imgMM);

    // -- Bottom Container --
    containerResponsive.appendChild(containerEstCal);
    containerEstCal.classList.add("containerEstCal");
    containerEstCal.appendChild(divCalculadora);
    //-- Top --
    pTitlesEstadistica.classList.add("titlesEstadistica");
    pTitlesEstadistica.innerHTML = objeto.titleMM2;
    if(objeto.definicion == "on"){
        divCalculadora.classList.remove("containerImage2");
        divCalculadora.classList.add("containerCalculadora");
        pEstadistica.classList.add("textEstadistica");
        pEstadistica.innerHTML = objeto.titleMMSub;
        sectionEsttop.classList.add("sectionEsttop");
        sectionEsttop.append(pTitlesEstadistica, pEstadistica);
        // ----Top middle------------------------------------------------------------------------   
        if(objeto.id == "media_y_mediana"){
            sectionEstmiddle.classList.add("sectionEstmiddle");
            objeto.inputMM.forEach(winInput => {
                const divEntryWin = document.createElement("div");
                divEntryWin.classList.add("EntryWin");
                labelArea.classList.add(winInput.outputMessage);
                textarea.setAttribute("id", winInput.inputId);
                textarea.classList.add(winInput.inputCl);
                divEntryWin.append(labelArea, textarea);
                sectionEstmiddle.append(divEntryWin);
            });
            titleResultEstMedia.innerHTML = "Media";
            titleResultEstMedia.classList.add("titleResults");
            pResultEstMediaReg = objeto.resultEstMedia
            pResultEstMedia.classList.add("winStyle", "resultColor", pResultEstMediaReg);
            contPResultEstMedia.classList.add("contPResult");
            contPResultEstMedia.append(titleResultEstMedia, pResultEstMedia);
        
            titleResultEstMediana.innerHTML = "Mediana";
            titleResultEstMediana.classList.add("titleResults");
            pResultEstMedianaReg = objeto.resultEstMediana
            pResultEstMediana.classList.add("winStyle", "resultColor", pResultEstMedianaReg);
            contPResultEstMediana.classList.add("contPResult");
            contPResultEstMediana.append(titleResultEstMediana, pResultEstMediana);

            contSectEstBottom.classList.add("contSectEstBottom");
            contSectEstBottom.append(contPResultEstMedia, contPResultEstMediana);
            mensajeInsertarValores();
        }
        // ----Top middle------------------------------------------------------------------------   
        if(objeto.id == "moda_cal"){
            sectionEstmiddle.classList.add("sectionEstmiddle");
            objeto.inputMM.forEach(winInput => {
                const divEntryWin = document.createElement("div");
                divEntryWin.classList.add("EntryWin");
                labelArea.classList.add(winInput.outputMessage);
                textarea.setAttribute("id", winInput.inputId);
                textarea.classList.add(winInput.inputCl);
                divEntryWin.append(labelArea, textarea);
                sectionEstmiddle.append(divEntryWin);
            });
            titleResultEstModa.innerHTML = "Moda";
            titleResultEstModa.classList.add("titleResults");
            taResultEstModaReg = objeto.resultEstModa
            taResultEstModa.classList.add("winStyle", "resultColor", taResultEstModaReg);
            contPResultEstModa.classList.add("contPResult");
            contPResultEstModa.append(titleResultEstModa, taResultEstModa);
        
            contSectEstBottom.classList.add("contSectEstBottom");
            contSectEstBottom.append(contPResultEstModa);
            mensajeInsertarValores();
        }
       

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
    
        sectionEstbottom.classList.add("sectionEstbottom");
        sectionEstbottom.append(contSectEstBottom, btnClearEst, btnResultEst);
        divCalculadora.append(sectionEsttop, sectionEstmiddle, sectionEstbottom);
    }
    else if(objeto.definicion == "off"){
        pTitlesEstadistica.classList.add("titleImg");

        divCalculadora.classList.remove("containerCalculadora");
        divCalculadora.classList.add("containerImage2");
        const imgDefinicion = document.createElement("img");
        imgDefinicion.classList.add("imagenDefinicion");
        imgDefinicion.setAttribute("src", objeto.imgMM2);
        divCalculadora.append(pTitlesEstadistica, imgDefinicion);
    };
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
    pResultEstMedia.innerHTML = resPromedio.toFixed(1);
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
    pResultEstMediana.innerHTML = resMediana.toFixed(1);
}
function moda(arrayNumber){
    // --- Creando un objeto con los elementos y cuantas veces se repiten cada uno ---
    const objDuplicados = arrayNumber.reduce((a,i) => (a[i] ? a[i] += 1 : a[i] = 1, a),{});
    // --- Comvirtiendo el objeto a un array de arrays ---
    const objArray = Object.entries(objDuplicados);
    // --- Ordenando de mayor a menor el array de arrays respecto a el numero de repeticiones ---
    objArray.sort((a,b) => b[1]-a[1]);
    // --- creando un nuevo array de arrays con solo el o los que tienen el valor mas alto ---
    const arrayFiltrado = [];
    let vt = 1;
    objArray.forEach(rep => {
        if(rep[1] > vt){
           arrayFiltrado.push([rep[0],rep[1]]);
           vt = (rep[1]-1);
        } 
    });
    // --- Impresion de resultado en ventana ---
    if(arrayFiltrado.length == 0){
        mensajeSinDuplicados();
        taResultEstModa.value = "Ningun elemento se repitío";
    }else{
        arrayFiltrado.forEach((res, iter) => {
            if(iter < arrayFiltrado.length -1){
                taResultEstModa.value += res[0] + ", ";
            }else{
                taResultEstModa.value += res[0];
            }
        })
        mensajeResultadoExitosoModa();
    }
};
//--- ---
function estMediaMediana(){
    // --- Expresion regular solo numeros puntos y comas son aceptados ---
    if(!(textarea.value == "")){
        var regex = /^[0-9]+(?:\.[0-9]+)?(?:,[0-9]+(?:\.[0-9]+)?)*$/;
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
            disableOptions();
            mensajeResultadoExitoso();
        }else{
                mensajeSoloNum();
        };
    }else{
        mensajeInsertarValores();
    }
};
function estModa(){
    if(!(textarea.value == "")){
        // --- Expresion regular solo numeros puntos y comas son aceptados ---
        var regex = /^[^,\s]+(?:,[^,\s]+)*$/;
        if(regex.test(textarea.value)){
            // --- Obteniendo datos de ventana de entrada como un solo strig ---
            const infoWinModa = textarea.value;
            // --- Separando cada valor del string y poniendolo en un array ---
            const arrayString = infoWinModa.split(",");
            moda(arrayString);
            disableOptions();
        }else{
            mensajeSoloCarac();
        };
    }else{
        mensajeInsertarValores();
    }
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
// ---------------------------------- instrMMImg ----------------------------------------
const instrMMImg = document.createElement("div");
const titleMM = document.createElement("h2");
const imgMM = document.createElement("img");
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
const taResultEstModa = document.createElement("textarea");

const btnResultEst = document.createElement("button");
const btnClearEst = document.createElement("button");

const labelArea = document.createElement("p");
const textarea = document.createElement("textarea");

let medidaH;

let btnClearEstReg;
let btnResultEstReg;

let pResultEstMediaReg;
let pResultEstMedianaReg;
let taResultEstModaReg;

let rutaFEst;
let rutaFEstClear;

let winEstVar = null;
// --- Variable de identificacion de figura ----------------------------------------------
let idFig = "";
renderIntroduccion();

