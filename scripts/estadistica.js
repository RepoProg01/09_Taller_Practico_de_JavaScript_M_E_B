
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
    // ---- Limpieza de valor de sectionEstmiddle ----
    sectionEstmiddle.innerHTML = "";
    labelArea.innerHTML = "";
    textarea.value = "";
    textarea.disabled = false;
    textarea.classList.remove("resultColor");

    contSectEstBottom.innerHTML = "";
    EstBottomA.innerHTML = "";
    // ---- Borrado de clases y abilitar botones ----
    btnResultEst.classList.remove(btnResultEstReg);
    btnClearEst.classList.remove(btnClearEstReg);
    btnResultEst.disabled = false;
    btnResultEst.classList.remove("btnInactive");
    // ----  ----
    containerEstadistica.innerHTML = "";
    divCalculadora.innerHTML = "";
    //---- ----
    pTitlesEstadistica.classList.remove("titleImg");
}
//--- funciones para deshabilitar ventanas y botones de Area y Perimetro-----------------
function disableOptions(){
    winEstVar.disabled = true;
    winEstVar.classList.add("resultColor");
    if(idFig == "media_y_mediana"){
        pResultEstMedia.classList.remove("resultColor");
        pResultEstMediana.classList.remove("resultColor");
    }else if(idFig == "moda_cal"){
        taResultEstModa.classList.remove("resultColor");
    }else if(idFig == "rango_cal"){
        pResultEstTam.classList.remove("resultColor");
        pResultEstMax.classList.remove("resultColor");
        pResultEstMin.classList.remove("resultColor");
        pResultEstRango.classList.remove("resultColor");
    }else if(idFig == "desviación_media_cal"){
        pResultEstTamDM.classList.remove("resultColor");
        pResultEstMedDM.classList.remove("resultColor");
        pResultEstDM.classList.remove("resultColor");
    };
    btnResultEst.disabled = true;
    btnResultEst.classList.remove("btnResult");
    btnResultEst.classList.add("btnInactive");
}
//--- funciones para limpiar y habilitar radios ventanas y botones ----------------------
function clearEstOpt(){
    winEstVar.disabled = false;
    winEstVar.value = "";
    winEstVar.classList.remove("resultColor");
    habilitarIntercambiar();
    labelArea.innerHTML = "";

    if(idFig == "media_y_mediana"){
        mensajeInsertarValores();
        pResultEstMedia.innerHTML = ""; 
        pResultEstMediana.innerHTML = ""; 
        pResultEstMedia.classList.add("resultColor");
        pResultEstMediana.classList.add("resultColor");
    }
    else if(idFig == "moda_cal"){
        mensajeInsertarValoresM();
        taResultEstModa.value = ""; 
        taResultEstModa.classList.add("resultColor");
    }
    else if(idFig == "rango_cal"){
        mensajeInsertarValores();
        pResultEstTam.innerHTML = "";
        pResultEstMax.innerHTML = "";
        pResultEstMin.innerHTML = "";
        pResultEstRango.innerHTML = ""; 
        pResultEstTam.classList.add("resultColor");
        pResultEstMax.classList.add("resultColor");
        pResultEstMin.classList.add("resultColor");
        pResultEstRango.classList.add("resultColor");
    }
    else if(idFig == "desviación_media_cal"){
        mensajeInsertarValores();
        pResultEstTamDM.innerHTML = "";
        pResultEstMedDM.innerHTML = "";
        pResultEstDM.innerHTML = "";
        pResultEstTamDM.classList.add("resultColor");
        pResultEstMedDM.classList.add("resultColor");
        pResultEstDM.classList.add("resultColor");
    }
    pTitlesEstadistica.classList.remove("titleImg");
};
function habilitarIntercambiar(){
    btnResultEst.disabled = false;
    btnResultEst.classList.remove("btnInactive");
    btnResultEst.classList.add("btnResult");
};
//----Funcion asignaciones --------------------------------------------------------------
function asignacionesWindows(){
    winEstVar = document.querySelector("#textAreaId");
    if(idFig == "media_y_mediana"){
        pResultEstMedia = document.querySelector(".resultEstMedia");
        pResultEstMediana = document.querySelector(".resultEstMediana");
    }
    else if(idFig == "moda_cal"){
        taResultEstModa = document.querySelector(".resultEstModa");
    }
    else if(idFig == "rango_cal"){
        pResultEstTam = document.querySelector(".resultEstTam");
        pResultEstMax = document.querySelector(".resultEstMax");
        pResultEstMin = document.querySelector(".resultEstMin");
        pResultEstRango = document.querySelector(".resultEstRango");
    }
    else if(idFig == "desviación_media_cal"){
        pResultEstTamDM = document.querySelector(".resultEstTamDM");
        pResultEstMedDM = document.querySelector(".resultEstMedDM");
        pResultEstDM = document.querySelector(".resultEstDM");
    };
};
//----Funciones mensajes-----------------------------------------------------------------
function mensajeInsertarValores(){
    labelArea.innerHTML = "Introduce números separados<br>por una coma ( , ) y sin espacios";
};
function mensajeSoloNum(){
    labelArea.innerHTML = "Solo números separados por<br>comas y sin espacios son permitidos";
};
function mensajeInsertarValoresM(){
    labelArea.innerHTML = "Introduce caracteres separados<br>por una coma ( , ) y sin espacios";
};
function mensajeSoloCarac(){
    labelArea.innerHTML = "El orden debe ser caracter separado<br>por una coma y sin espacios";
};
function mensajeSinDuplicados(){
    labelArea.innerHTML = "No existe Moda ya que no se<br>encontraron Duplicados";
};
function mensajeResultadoExitosoMM(){
    labelArea.innerHTML = "Calculación de Media y Mediana<br>con éxito";
};
function mensajeResultadoExitosoRango(){
    labelArea.innerHTML = "Calculación de Rango<br>con éxito";
};
function mensajeResultadoExitosoDm(){
    labelArea.innerHTML = "Calculación de Desviacion Media<br>con éxito";
};
function mensajeResultadoExitosoModa(){
    labelArea.innerHTML = "Calculación de Moda<br>con éxito";
};
//----Funcion formato-------------------------------------------------
const formato = (number) => {
    const exp = /(\d)(?=(\d{3})+(?!\d))/g;
    const rep = '$1,';
    let arr = number.toString().split('.');
    arr[0] = arr[0].replace(exp,rep);
    return arr[1] ? arr.join('.'): arr[0];
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
        sectionEstmiddle.classList.add("sectionEstmiddle");
        divEntryWin.classList.add("EntryWin");
        labelArea.classList.add("outputMessage");
        textarea.setAttribute("id", "textAreaId");
        textarea.classList.add("textAreaCl");
        divEntryWin.append(labelArea, textarea);
        sectionEstmiddle.append(divEntryWin);

        contSectEstBottom.classList.add("contSectEstBottom");
         
        if(objeto.id == "media_y_mediana"){
            objeto.windowMM.forEach(winExit =>{
                const titlePMM = document.createElement("p");
                titlePMM.innerHTML = winExit.titleW;
                titlePMM.classList.add("titleResults");
                const pResultReg = winExit.resultEst;
                const pResultMM = document.createElement("p");
                pResultMM.classList.add("winStyle", "resultColor", pResultReg);
                const containerMM = document.createElement("div");
                containerMM.classList.add("contPResult");
                containerMM.append(titlePMM, pResultMM);
                contSectEstBottom.append(containerMM);
            });
            mensajeInsertarValores();
        };
        // ----Top middle------------------------------------------------------------------------   
        if(objeto.id == "moda_cal"){
            objeto.windowMod.forEach(winExit =>{
                const titlePMod = document.createElement("p");
                titlePMod.innerHTML = winExit.titleW;
                titlePMod.classList.add("titleResults");
                const pResultReg = winExit.resultEst;
                const taResultMod = document.createElement("textarea");
                taResultMod.classList.add("winStyle", "resultColor", pResultReg);
                const containerMod = document.createElement("div");
                containerMod.classList.add("contPResult");
                containerMod.append(titlePMod, taResultMod);
                contSectEstBottom.append(containerMod);
            });
            mensajeInsertarValoresM();
        };
        // ----Top middle------------------------------------------------------------------------   
        if(objeto.id == "rango_cal"){
            EstBottomA.classList.add("EstBottomA");
            objeto.windowI.forEach(winExit =>{
                const titlePR = document.createElement("p");
                titlePR.innerHTML = winExit.titleW;
                titlePR.classList.add("titleResults");
                const pResultReg = winExit.resultEst;
                const pResultR = document.createElement("p");
                pResultR.classList.add("winStyle", "resultColor", pResultReg);
                const containerR = document.createElement("div");
                containerR.classList.add("contPResultA");
                containerR.append(titlePR, pResultR);
                EstBottomA.append(containerR);
            });
            objeto.windowR.forEach(winExit =>{
                const titlePR = document.createElement("p");
                titlePR.innerHTML = winExit.titleW;
                titlePR.classList.add("titleResults");
                const pResultReg = winExit.resultEst;
                const pResultR = document.createElement("p");
                pResultR.classList.add("winStyle", "resultColor", pResultReg);
                const containerR = document.createElement("div");
                containerR.classList.add("contPResult");
                containerR.append(titlePR, pResultR);
                contSectEstBottom.append(EstBottomA, containerR);
            });
                 mensajeInsertarValores();
        };
        // ----Top middle------------------------------------------------------------------------   
        if(objeto.id == "desviación_media_cal"){
            EstBottomA.classList.add("EstBottomA");
            objeto.windowI.forEach(winExit =>{
                const titlePDM = document.createElement("p");
                titlePDM.innerHTML = winExit.titleW;
                titlePDM.classList.add("titleResults");
                const pResultReg = winExit.resultEst;
                const pResultDM = document.createElement("p");
                pResultDM.classList.add("winStyle", "resultColor", pResultReg);
                const containerDM = document.createElement("div");
                containerDM.classList.add("contPResultA");
                containerDM.append(titlePDM, pResultDM);
                EstBottomA.append(containerDM);
            });
            objeto.windowR.forEach(winExit =>{
                const titlePDM = document.createElement("p");
                titlePDM.innerHTML = winExit.titleW;
                titlePDM.classList.add("titleResults");
                const pResultReg = winExit.resultEst;
                const pResultDM = document.createElement("p");
                pResultDM.classList.add("winStyle", "resultColor", pResultReg);
                const containerDM = document.createElement("div");
                containerDM.classList.add("contPResult");
                containerDM.append(titlePDM, pResultDM);
                contSectEstBottom.append(EstBottomA, containerDM);
            });
            mensajeInsertarValores();
        };
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
// --- funciones de operaciones logicas ---
function promedio(arrayNumber){
    // --- Creando un nuevo array cambiando los strings a numbers ---
    const arrayNum = [];
    arrayNumber.forEach(element => {
        arrayNum.push(Number(element));
    });
    const suma = arrayNum.reduce((add,num) => add+=num);
    const cantidad = arrayNum.length;
    const resPromedio = suma / cantidad;
    return formato(resPromedio.toFixed(2));
}
function mediana(arrayNumber){
    const arrayNum = [];
    arrayNumber.forEach(element => {
        arrayNum.push(Number(element));
    });
    const orden = arrayNum.sort((a,b) => a-b);
    const cantidad = arrayNum.length;
    let resMediana;
    if(cantidad % 2 == 0){
        const mitadP = cantidad / 2;
        resMediana = (orden[mitadP - 1] + orden[mitadP]) / 2;
    }else{
        const mitadI = (cantidad - 1) / 2;
        resMediana = orden[mitadI];
    }
    // pResultEstMediana.innerHTML = formato(resMediana.toFixed(2));
    return formato(resMediana.toFixed(2));
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
    return arrayFiltrado;
};
function rango(arrayNumber){
    const arrayNum = [];
    arrayNumber.forEach(element => {
        arrayNum.push(Number(element));
    });
    arrayNum.sort((a,b) => b - a);
    const tam = arrayNum.length;
    const max = arrayNum[0];
    const min = arrayNum[(tam - 1)];
    const resRango = max - min;

    return {
        "tamano": tam,
        "maxima": max,
        "minima": min,
        "resultRango": resRango
    };
}
function desviacionMedia(arrayNumber){
    const arrayNum = [];
    arrayNumber.forEach(element => {
        arrayNum.push(Number(element));
    });
    const tam = arrayNum.length;
    const media = promedio(arrayNumber);
    // --- ---
    const arrayAbs = [];
    arrayNum.forEach(element => {
        arrayAbs.push(Number(Math.abs(element - media).toFixed(2)));
    })
    // --- ---
    const addAbs = arrayAbs.reduce((a,b) => a += b);
    const resDM = (addAbs/tam).toFixed(2);

    return {
        "tamano": tam,
        "media": media,
        "resDM": resDM
    }
}
//--- funciones calculadoras ---
function estMediaMediana(){
    // --- Expresion regular solo numeros puntos y comas son aceptados ---
    if(!(textarea.value == "")){
        var regex = /^[0-9]+(?:\.[0-9]+)?(?:,[0-9]+(?:\.[0-9]+)?)*$/;
        if(regex.test(textarea.value)){
            // --- Obteniendo datos de ventana de entrada como un solo strig ---
            const infoWindow = textarea.value;
            // --- Separando cada valor del string y poniendolo en un array ---
            const arrayString = infoWindow.split(",");
            pResultEstMedia.innerHTML = promedio(arrayString);
            pResultEstMediana.innerHTML = mediana(arrayString);
            disableOptions();
            mensajeResultadoExitosoMM();
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
            // --- Variable con array filtrado despues de la funcion moda ----
            const arrayFiltro = moda(arrayString);
            // --- impresion ---
            if(arrayFiltro.length == 0){
                mensajeSinDuplicados();
                taResultEstModa.value = "Ningun elemento se repitío";
            }else{
                arrayFiltro.forEach((res, iter) => {
                    if(iter < arrayFiltro.length -1){
                        taResultEstModa.value += res[0] + ", ";
                    }else{
                        taResultEstModa.value += res[0];
                    }
                })
                mensajeResultadoExitosoModa();
            }
            disableOptions();
        }else{
            mensajeSoloCarac();
        };
    }else{
        mensajeInsertarValoresM();
    }
};
function estRango(){
    if(!(textarea.value == "")){
        // --- Expresion regular solo numeros puntos y comas son aceptados ---
        var regex = /^[0-9]+(?:\.[0-9]+)?(?:,[0-9]+(?:\.[0-9]+)?)*$/;
        if(regex.test(textarea.value)){
            // --- Obteniendo datos de ventana de entrada como un solo strig ---
            const infoWinModa = textarea.value;
            // --- Separando cada valor del string y poniendolo en un array ---
            const arrayString = infoWinModa.split(",");
            // --- variable con info en objeto ---
            const objRango = rango(arrayString);
            // --- impresion --- 
            pResultEstTam.innerHTML = objRango["tamano"];
            pResultEstMax.innerHTML = objRango["maxima"];
            pResultEstMin.innerHTML = objRango["minima"];
            pResultEstRango.innerHTML = objRango["resultRango"];

            disableOptions();
            mensajeResultadoExitosoRango();
        }else{
            mensajeSoloNum();
        };
    }else{
        mensajeInsertarValores();
    }
};
function estDesviacionMedia(){
    if(!(textarea.value == "")){
        // --- Expresion regular solo numeros puntos y comas son aceptados ---
        var regex = /^[0-9]+(?:\.[0-9]+)?(?:,[0-9]+(?:\.[0-9]+)?)*$/;
        if(regex.test(textarea.value)){
            // --- Obteniendo datos de ventana de entrada como un solo strig ---
            const infoWinModa = textarea.value;
            // --- Separando cada valor del string y poniendolo en un array ---
            const arrayString = infoWinModa.split(",");
            // --- variable con info en objeto ---
            const desMedObj = desviacionMedia(arrayString);
            // --- impresion ---
            pResultEstTamDM.innerHTML = desMedObj["tamano"];
            pResultEstMedDM.innerHTML = desMedObj["media"];
            pResultEstDM.innerHTML = desMedObj["resDM"];
            disableOptions();
            mensajeResultadoExitosoDm();
        }else{
            mensajeSoloNum();
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
const divEntryWin = document.createElement("div");

// -------------------------------- sectionEstbottom ---------------------------------------
const sectionEstbottom = document.createElement("section");
const contSectEstBottom = document.createElement("div");
const EstBottomA = document.createElement("div");

const contPResultEstMedia = document.createElement("div");
const contPResultEstMediana = document.createElement("div");
const contPResultEstModa = document.createElement("div");
const contPResultEstTam = document.createElement("div");
const contPResultEstMax = document.createElement("div");
const contPResultEstMin = document.createElement("div");
const contPResultEstRango = document.createElement("div");

const titleResultEstMedia = document.createElement("p");
const titleResultEstMediana = document.createElement("p");
const titleResultEstModa = document.createElement("p");

const titleResultEstTam = document.createElement("p");
const titleResultEstMax = document.createElement("p");
const titleResultEstMin = document.createElement("p");

const titleResultEstRango = document.createElement("p");
const titleResultEstDesviacionMedia = document.createElement("p");

const pResultEstDesviacionMedia = document.createElement("p");

const btnResultEst = document.createElement("button");
const btnClearEst = document.createElement("button");

const labelArea = document.createElement("p");
const textarea = document.createElement("textarea");

let btnClearEstReg;
let btnResultEstReg;

let rutaFEst;
let rutaFEstClear;
// --- ---
let winEstVar = null;

let pResultEstMedia = null;
let pResultEstMediana = null;

let taResultEstModa = null;

let pResultEstTam = null;
let pResultEstMax = null;
let pResultEstMin = null;
let pResultEstRango = null;

let pResultEstTamDM = null;
let pResultEstMedDM = null;
let pResultEstDM = null;

// --- Variable de identificacion de figura ----------------------------------------------
let idFig = "";
renderIntroduccion();

