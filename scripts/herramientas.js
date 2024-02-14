
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
    const figSelect = herramientasArray.find(obj => obj.id === figura);
    if(figSelect){
        renderFigura(figSelect);
    }else{
        renderIntroduccion();
    };
    blurFnc();
}
//----Funciones de borrado, activacion y desactivacion de bentanas y radios--------------
function borrar(){
    // ---- Limpieza de valor de sectionHerramiddle ----
    sectionHerramiddle.innerHTML = "";
    labelArea.innerHTML = "";
    // textarea.value = "";
    // textarea.disabled = false;
    // textarea.classList.remove("resultColor");

    contSectHerrBottom.innerHTML = "";
    herrBottomA.innerHTML = "";
    // ---- Borrado de clases y abilitar botones ----
    btnResultHerr.classList.remove(btnResultHerrReg);
    btnClearHerr.classList.remove(btnClearHerrReg);
    btnResultHerr.disabled = false;
    btnResultHerr.classList.remove("btnInactive");
    // ----  ----
    containerHerramienta.innerHTML = "";
    divCalculadora.innerHTML = "";
    //---- ----
    pTitlesHerramienta.classList.remove("titleImg");
}
//--- funciones para deshabilitar ventanas y botones de Area y Perimetro-----------------
function disableOptions(){
    winEstVar.disabled = true;
    winEstVar.classList.add("resultColor");
    if(varId == "media_y_mediana"){
        pResultEstMedia.classList.remove("resultColor");
        pResultEstMediana.classList.remove("resultColor");
    }else if(varId == "moda_cal"){
        taResultEstModa.classList.remove("resultColor");
    }else if(varId == "rango_cal"){
        pResultEstTam.classList.remove("resultColor");
        pResultEstMax.classList.remove("resultColor");
        pResultEstMin.classList.remove("resultColor");
        pResultEstRango.classList.remove("resultColor");
    }else if(varId == "desviación_media_cal"){
        pResultEstTamDM.classList.remove("resultColor");
        pResultEstMedDM.classList.remove("resultColor");
        pResultEstDM.classList.remove("resultColor");
    };
    btnResultHerr.disabled = true;
    btnResultHerr.classList.remove("btnResult");
    btnResultHerr.classList.add("btnInactive");
}
//--- funciones para limpiar y habilitar radios ventanas y botones ----------------------
function clearEstOpt(){
    winEstVar.disabled = false;
    winEstVar.value = "";
    winEstVar.classList.remove("resultColor");
    habilitarIntercambiar();
    labelArea.innerHTML = "";

    if(varId == "media_y_mediana"){
        mensajeInsertarValores();
        pResultEstMedia.innerHTML = ""; 
        pResultEstMediana.innerHTML = ""; 
        pResultEstMedia.classList.add("resultColor");
        pResultEstMediana.classList.add("resultColor");
    }
    else if(varId == "moda_cal"){
        mensajeInsertarValoresM();
        taResultEstModa.value = ""; 
        taResultEstModa.classList.add("resultColor");
    }
    else if(varId == "rango_cal"){
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
    else if(varId == "desviación_media_cal"){
        mensajeInsertarValores();
        pResultEstTamDM.innerHTML = "";
        pResultEstMedDM.innerHTML = "";
        pResultEstDM.innerHTML = "";
        pResultEstTamDM.classList.add("resultColor");
        pResultEstMedDM.classList.add("resultColor");
        pResultEstDM.classList.add("resultColor");
    }
    pTitlesHerramienta.classList.remove("titleImg");
};
function habilitarIntercambiar(){
    btnResultHerr.disabled = false;
    btnResultHerr.classList.remove("btnInactive");
    btnResultHerr.classList.add("btnResult");
};
//----Funcion asignaciones --------------------------------------------------------------
function asignacionesWindows(){
    winEstVar = document.querySelector("#textAreaId");
    if(varId == "media_y_mediana"){
        pResultEstMedia = document.querySelector(".resultEstMedia");
        pResultEstMediana = document.querySelector(".resultEstMediana");
    }
    else if(varId == "moda_cal"){
        taResultEstModa = document.querySelector(".resultEstModa");
        taResultEstModa.disabled = true;
    }
    else if(varId == "rango_cal"){
        pResultEstTam = document.querySelector(".resultEstTam");
        pResultEstMax = document.querySelector(".resultEstMax");
        pResultEstMin = document.querySelector(".resultEstMin");
        pResultEstRango = document.querySelector(".resultEstRango");
    }
    else if(varId == "desviación_media_cal"){
        pResultEstTamDM = document.querySelector(".resultEstTamDM");
        pResultEstMedDM = document.querySelector(".resultEstMedDM");
        pResultEstDM = document.querySelector(".resultEstDM");
    };
};
//----Funciones mensajes-----------------------------------------------------------------
function mensajeInsertarValores(){
    labelArea.innerHTML = "Introduce Sueldo Neto<br>para aplicar la regla";
};
function mensajeSoloNum(){
    labelArea.innerHTML = "Solo números separados por<br>comas sin espacios son permitidos";
};
function mensajeInsertarValoresM(){
    labelArea.innerHTML = "Introduce caracteres separados<br>por una coma ( , ) y sin espacios";
};
function mensajeSoloCarac(){
    labelArea.innerHTML = "Orden debe ser caracter separado<br>por una coma y sin espacios";
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
    labelArea.innerHTML = "Calculación de Desviación Media<br>con éxito";
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
    containerHerramienta.appendChild(containerIntro);

    containerIntro.classList.add("containerIntro");

    defTitulo.classList.add("tituloIntro");
    defTitulo.innerHTML = herramientasArray[0].defTitulo;
    defImg.classList.add("imgIntro");
    defImg.setAttribute("src", herramientasArray[0].defImg);
    sectionDtop.classList.add("sectionDtop", "secD");
    sectionDtop.append(defTitulo, defImg);

    defHerramientaTitulo.classList.add("defHerramientaTitulo", "defT");
    defHerramientaTitulo.innerHTML = herramientasArray[0].defHerramientaTitulo;
    defHerramienta.classList.add("defHerramienta", "defC");
    defHerramienta.innerHTML = herramientasArray[0].defHerramienta;
    sectionDmiddle.classList.add("sectionDmiddle", "secD");
    sectionDmiddle.append(defHerramientaTitulo, defHerramienta);

    defCategoriaTitulo.classList.add("defCategoriaTitulo", "defT");
    defCategoriaTitulo.innerHTML = herramientasArray[0].defCategoriaTitulo;
    defCategoria.classList.add("defResumen", "defC");
    defCategoria.innerHTML = herramientasArray[0].defCategoria;
    
    defGuiaTitulo.classList.add("defGuiaTitulo", "defT");
    defGuiaTitulo.innerHTML = herramientasArray[0].defGuiaTitulo;
    defGuia.classList.add("defGuia", "defC");
    defGuia.innerHTML = herramientasArray[0].defGuia;
    sectionDbottom.classList.add("sectionDbottom", "secD");
    sectionDbottom.append(defCategoriaTitulo, defCategoria, defGuiaTitulo, defGuia);

    containerIntro.append(sectionDtop, sectionDmiddle, sectionDbottom);
    document.documentElement.scrollTop = 0;
};
function renderFigura(objeto){
    borrar();
    varId = objeto.id;

    containerHerramienta.appendChild(containerResponsive);
    containerResponsive.classList.add("containerResponsive");
    // -- Top Container ---
    containerResponsive.appendChild(instrHerrImg);
    instrHerrImg.classList.add("instrHerrImg");
    instrHerrImg.appendChild(titleHerr);
    titleHerr.classList.add("titleHerr");
    titleHerr.innerHTML = objeto.titleHerr;
    instrHerrImg.appendChild(imgHerr);
    imgHerr.setAttribute("src", objeto.imgHerr);
    // -- Bottom Container --
    containerResponsive.appendChild(containerHerrCal);
    containerHerrCal.classList.add("containerHerrCal");
    containerHerrCal.appendChild(divCalculadora);
    //-- Top --
    pTitlesHerramienta.classList.add("ptitlesHerramienta");
    pTitlesHerramienta.innerHTML = objeto.titleHerr2;
    if(objeto.definicion == "on"){
        divCalculadora.classList.remove("containerImage2");
        divCalculadora.classList.add("containerCalculadora");
        pHerramienta.classList.add("textHerramienta");
        pHerramienta.innerHTML = objeto.titleHerrSub;
        sectionHerrtop.classList.add("sectionHerrtop");
        sectionHerrtop.append(pTitlesHerramienta, pHerramienta);
        // ----Top middle------------------------------------------------------------------------   
        sectionHerramiddle.classList.add("sectionHerramiddle");
        divEntryWin.classList.add("EntryWin");
        labelArea.classList.add("outputMessage");
        divEntryWin.append(labelArea);
        sectionHerramiddle.append(divEntryWin);
        contSectHerrBottom.classList.add("contSectHerrBottom");
         
        if(objeto.id == "regla_503020_cal"){

            const titleSuelNet = document.createElement("label");
            titleSuelNet.innerHTML = objeto.titleLabSN;
            titleSuelNet.setAttribute("for", "suelNet");
            titleSuelNet.classList.add("titleResults");

            // const pResultSuelNetReg = objeto.resultSN;
            const pResultSuelNet = document.createElement("input");

            pResultSuelNet.setAttribute("type", "number");
            pResultSuelNet.setAttribute("id", "suelNet");
            pResultSuelNet.classList.add(objeto.resultSN);


            const containerRes1 = document.createElement("div");
            containerRes1.classList.add("contPResult");
            containerRes1.append(titleSuelNet, pResultSuelNet);
            contSectHerrBottom.append(containerRes1);


            objeto.windowHerr.forEach(winExit =>{
                const titleNecBas = document.createElement("p");
                titleNecBas.innerHTML = winExit.titleW;
                titleNecBas.classList.add("titleResults");
                const pResultReg = winExit.resultEst;
                const pResultHerr = document.createElement("p");
                pResultHerr.classList.add("winStyle", "resultColor", pResultReg);
                const containerRes = document.createElement("div");
                containerRes.classList.add("contPResult");
                containerRes.append(titleNecBas, pResultHerr);
                contSectHerrBottom.append(containerRes);
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
                // const taResultMod = document.createElement("textarea");
                taResultMod.classList.add("winStyle", "resultColor", pResultReg);
                const containerMod = document.createElement("div");
                containerMod.classList.add("contPResult");
                containerMod.append(titlePMod, taResultMod);
                contSectHerrBottom.append(containerMod);
            });
            mensajeInsertarValoresM();
        };
        btnClearHerrReg = objeto.btn2ClEst;
        btnClearHerr.classList.add("btnClear", btnClearHerrReg);
        btnClearHerr.innerHTML = "Borrar";
    
        btnResultHerrReg = objeto.btnClEst;
        btnResultHerr.classList.add("btnResult", btnResultHerrReg);
        btnResultHerr.innerHTML = "Resultado";
    
        btnClearHerr.removeEventListener("click", rutaFEstClear);
        rutaFEstClear = (eval(objeto.clearWindowEst));
        btnClearHerr.addEventListener("click", rutaFEstClear);
    
        btnResultHerr.removeEventListener("click", rutaFEst);
        rutaFEst = (eval(objeto.funcionHerr));
        btnResultHerr.addEventListener("click", rutaFEst);
    
        sectionEstbottom.classList.add("sectionEstbottom");
        sectionEstbottom.append(contSectHerrBottom, btnClearHerr, btnResultHerr);
        divCalculadora.append(sectionHerrtop, sectionHerramiddle, sectionEstbottom);
    }
    else if(objeto.definicion == "off"){
        pTitlesHerramienta.classList.add("titleImg");
        divCalculadora.classList.remove("containerCalculadora");
        divCalculadora.classList.add("containerImage2");
        const imgDefinicion = document.createElement("img");
        imgDefinicion.classList.add("imagenDefinicion");
        imgDefinicion.setAttribute("src", objeto.imgMM2);
        divCalculadora.append(pTitlesHerramienta, imgDefinicion);
    };
    asignacionesWindows();
    document.documentElement.scrollTop = 0;
};
// ------------------------ Operaciones -----------------------------------------------------
// ------------- Estadistica Media Mediana Moda ------------------------------------------
// --- funciones de operaciones logicas ---
// function promedio(arrayString){
//     // --- Creando un nuevo array cambiando los strings a numbers ---
//     const arrayNum = [];
//     arrayString.forEach(element => {
//         arrayNum.push(Number(element));
//     });
//     const suma = arrayNum.reduce((add,num) => add+=num);
//     const cantidad = arrayNum.length;
//     const resPromedio = suma / cantidad;
//     return resPromedio;
// }
// function mediana(arrayString){
//     const arrayNum = [];
//     arrayString.forEach(element => {
//         arrayNum.push(Number(element));
//     });
//     const orden = arrayNum.sort((a,b) => a-b);
//     const cantidad = arrayNum.length;

//     let resMediana;
//     if(cantidad % 2 == 0){
//         const mitadP = cantidad / 2;
//         resMediana = (orden[mitadP - 1] + orden[mitadP]) / 2;
//     }else{
//         const mitadI = (cantidad - 1) / 2;
//         resMediana = orden[mitadI];
//     }
//     return resMediana;
// }
// function moda(arrayString){
//     // --- Creando un objeto con los elementos y cuantas veces se repiten cada uno ---
//     const objDuplicados = arrayString.reduce((a,i) => (a[i] ? a[i] += 1 : a[i] = 1, a),{});
//     // --- Comvirtiendo el objeto a un array de arrays ---
//     const objArray = Object.entries(objDuplicados);
//     // --- Ordenando de mayor a menor el array de arrays respecto a el numero de repeticiones ---
//     objArray.sort((a,b) => b[1]-a[1]);
//     // --- creando un nuevo array de arrays con solo el o los que tienen el valor mas alto ---
//     const arrayFiltrado = [];
//     let vt = 1;
//     objArray.forEach(rep => {
//         if(rep[1] > vt){
//            arrayFiltrado.push([rep[0],rep[1]]);
//            vt = (rep[1]-1);
//         } 
//     });
//     return arrayFiltrado;
// };
// function rango(arrayString){
//     const arrayNum = [];
//     arrayString.forEach(element => {
//         arrayNum.push(Number(element));
//     });
//     arrayNum.sort((a,b) => b - a);
//     const tam = arrayNum.length;
//     const max = arrayNum[0];
//     const min = arrayNum[(tam - 1)];
//     const resRango = max - min;
//     return {
//         "tamano": tam,
//         "maxima": max,
//         "minima": min,
//         "resultRango": resRango
//     };
// }
// function desviacionMedia(arrayString){
//     const arrayNum = [];
//     arrayString.forEach(element => {
//         arrayNum.push(Number(element));
//     });
//     const tam = arrayNum.length;
//     const media = promedio(arrayString);
//     // --- ---
//     const arrayAbs = [];
//     arrayNum.forEach(element => {
//         const numAbs = Math.abs(element - media);
//         arrayAbs.push(Number(numAbs));
//     })
//     // --- ---
//     const addAbs = arrayAbs.reduce((a,b) => a += b);
//     const resDM = addAbs/tam;
//     return {
//         "tamano": tam,
//         "media": media,
//         "resDM": resDM
//     }
// }
//--- funciones calculadoras ---
function herr503020(){
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
            // --- resultados ---
            const tam = objRango["tamano"];
            const max = objRango["maxima"];
            const min = objRango["minima"];
            const resRng = objRango["resultRango"];
            // --- impresion --- 
            pResultEstTam.innerHTML = formato(tam);
            pResultEstMax.innerHTML = formato(max.toFixed(2));
            pResultEstMin.innerHTML = formato(min.toFixed(2));
            pResultEstRango.innerHTML = formato(resRng.toFixed(2));

            disableOptions();
            mensajeResultadoExitosoRango();
        }else{
            mensajeSoloNum();
        };
    }else{
        mensajeInsertarValores();
    }
};
function herrCapEnd(){
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
            // --- resultados ---
            const tam = desMedObj["tamano"];
            const med = desMedObj["media"];
            const resDM = desMedObj["resDM"];
            // --- impresion ---
            pResultEstTamDM.innerHTML = formato(tam);
            pResultEstMedDM.innerHTML = formato(med.toFixed(2));
            pResultEstDM.innerHTML = formato(resDM.toFixed(2));
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
const containerHerramienta = document.querySelector(".containerHerramienta");
// -------------------------------- containerIntro --------------------------------------
const containerIntro = document.createElement("section");
// ---------------------------------- sectionDtop ---------------------------------------
const sectionDtop = document.createElement("div");
const defTitulo = document.createElement("h2");
const defImg = document.createElement("img");
// --------------------------------- sectionDmiddle -------------------------------------
const sectionDmiddle = document.createElement("div");
const defHerramientaTitulo = document.createElement("p");
const defHerramienta = document.createElement("p");
// --------------------------------- sectionDbottom -------------------------------------
const sectionDbottom = document.createElement("div");
const defCategoriaTitulo = document.createElement("p");
const defCategoria = document.createElement("p");
const defGuiaTitulo = document.createElement("p");
const defGuia = document.createElement("p");
// ------------------------------ containerResponsive -----------------------------------
const containerResponsive = document.createElement("section");
// ---------------------------------- instrHerrImg ----------------------------------------
const instrHerrImg = document.createElement("div");
const titleHerr = document.createElement("h2");
const imgHerr = document.createElement("img");
// ------------------------------ containerHerrCal ----------------------------------------
const containerHerrCal = document.createElement("div");
// ----------------------------------- divCalculadora -----------------------------------------
const divCalculadora = document.createElement("div");
// --------------------------------- sectionHerrtop -----------------------------------------
const sectionHerrtop = document.createElement("section");
const pTitlesHerramienta = document.createElement("p");
const pHerramienta = document.createElement("p");
// -------------------------------- sectionHerramiddle ---------------------------------------
const sectionHerramiddle = document.createElement("section");
const divEntryWin = document.createElement("div");

// -------------------------------- sectionEstbottom ---------------------------------------
const sectionEstbottom = document.createElement("section");
const contSectHerrBottom = document.createElement("div");
const herrBottomA = document.createElement("div");

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

const btnResultHerr = document.createElement("button");
const btnClearHerr = document.createElement("button");

const labelArea = document.createElement("p");
const textarea = document.createElement("textarea");

let btnClearHerrReg;
let btnResultHerrReg;

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
let varId = "";
renderIntroduccion();

