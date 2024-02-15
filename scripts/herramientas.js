
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
    pResultSuelNet.value = "";
    pResultSuelNet.disabled = false;
    pResultSuelNet.classList.remove("resultColor");
    contSectHerrBottom.innerHTML = "";
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
    if(varId == "regla_503020_cal"){
        pResultSuelNet.disabled = true;
        pResultSuelNet.classList.add("resultColor");
        winNesBas.classList.remove("resultColor");
        winGasPer.classList.remove("resultColor");
        winAhoInv.classList.remove("resultColor");
    }else if(varId == "moda_cal"){
        
    };
    btnResultHerr.disabled = true;
    btnResultHerr.classList.remove("btnResult");
    btnResultHerr.classList.add("btnInactive");
}
//--- funciones para limpiar y habilitar radios ventanas y botones ----------------------
function clearHerrOpt(){
    habilitarIntercambiar();
    labelArea.innerHTML = "";
    if(varId == "regla_503020_cal"){
        mensajeInsertarValores();
        pResultSuelNet.disabled = false;
        pResultSuelNet.value = "";
        pResultSuelNet.classList.remove("resultColor");
        winNesBas.innerHTML = ""; 
        winGasPer.innerHTML = ""; 
        winAhoInv.innerHTML = ""; 
        winNesBas.classList.add("resultColor");
        winGasPer.classList.add("resultColor");
        winAhoInv.classList.add("resultColor");
    }
    else if(varId == "moda_cal"){

    };
    pTitlesHerramienta.classList.remove("titleImg");
};
function habilitarIntercambiar(){
    btnResultHerr.disabled = false;
    btnResultHerr.classList.remove("btnInactive");
    btnResultHerr.classList.add("btnResult");
};
//----Funcion asignaciones --------------------------------------------------------------
function asignacionesWindows(){
    if(varId == "regla_503020_cal"){
        winNesBas = document.querySelector(".resultHerrNecBas");
        winGasPer = document.querySelector(".resultHerrGasPer");
        winAhoInv = document.querySelector(".resultHerrAhoInv");
    }
    else if(varId == "moda_cal"){

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
    labelArea.innerHTML = "Calculación de Regla 503020<br>con éxito";
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
    console.log( varId);

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
            titleSuelNet.innerHTML = objeto.titleLabSN;
            titleSuelNet.setAttribute("for", "suelNet");
            titleSuelNet.classList.add("titleResults");
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
                const pResultReg = winExit.resultHerr;
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
        if(objeto.id == "cap_endeudamiento_cal"){
            titleIngTot.innerHTML = objeto.titleLabIT;
            titleIngTot.setAttribute("for", "ingrTot");
            titleIngTot.classList.add("titleResults");
            pResultIngTot.setAttribute("type", "number");
            pResultIngTot.setAttribute("id", "ingrTot");
            pResultIngTot.classList.add(objeto.resultIT, "winStyle");

            titleGasFij.innerHTML = objeto.titleLabGF;
            titleGasFij.setAttribute("for", "gasFij");
            titleGasFij.classList.add("titleResults");
            pResultGasFij.setAttribute("type", "number");
            pResultGasFij.setAttribute("id", "gasFij");
            pResultGasFij.classList.add(objeto.resultGF, "winStyle");

            const containerRes1 = document.createElement("div");
            const containerRes2 = document.createElement("div");
            containerRes1.classList.add("contPResult");
            containerRes2.classList.add("contPResult");
            containerRes1.append(titleIngTot, pResultIngTot);
            containerRes2.append(titleGasFij, pResultGasFij);
            contSectHerrBottom.append(containerRes1, containerRes2);

            objeto.windowHerr.forEach(winExit =>{
                const titleCapEnd = document.createElement("p");
                titleCapEnd.innerHTML = winExit.titleW;
                titleCapEnd.classList.add("titleResults");
                const pResultReg = winExit.resultHerr;
                const pResultHerr = document.createElement("p");
                pResultHerr.classList.add("winStyle", "resultColor", pResultReg);
                const containerRes = document.createElement("div");
                containerRes.classList.add("contPResult");
                containerRes.append(titleCapEnd, pResultHerr);
                contSectHerrBottom.append(containerRes);
            });
            mensajeInsertarValores();
        };
        btnClearHerrReg = objeto.btn2ClHerr;
        btnClearHerr.classList.add("btnClear", btnClearHerrReg);
        btnClearHerr.innerHTML = "Borrar";
    
        btnResultHerrReg = objeto.btnClHerr;
        btnResultHerr.classList.add("btnResult", btnResultHerrReg);
        btnResultHerr.innerHTML = "Resultado";
    
        btnClearHerr.removeEventListener("click", rutaFHerrClear);
        rutaFHerrClear = (eval(objeto.clearWindowHerr));
        btnClearHerr.addEventListener("click", rutaFHerrClear);
    
        btnResultHerr.removeEventListener("click", rutaFHerr);
        rutaFHerr = (eval(objeto.funcionHerr));
        btnResultHerr.addEventListener("click", rutaFHerr);
    
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
//--- funciones calculadoras ---
function herr503020(){
    if(!(pResultSuelNet.value == "")){
        // --- Expresion regular solo numeros puntos y comas son aceptados ---
        var regex = /^[0-9]+(?:\.[0-9]+)?(?:,[0-9]+(?:\.[0-9]+)?)*$/;
        if(regex.test(pResultSuelNet.value)){
            // --- Obteniendo datos de ventana de entrada  ---
            const infoWinSN = Number(pResultSuelNet.value);
            // --- resultados ---
            const necBas = infoWinSN * 50 / 100;
            const gasPer = infoWinSN * 30 / 100;
            const ahoInv = infoWinSN * 20 / 100;
            // --- impresion --- 
            winNesBas.innerHTML = `$  ${formato(necBas.toFixed(2))}`;
            winGasPer.innerHTML = `$  ${formato(gasPer.toFixed(2))}`;
            winAhoInv.innerHTML = `$  ${formato(ahoInv.toFixed(2))}`;
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
    if(!(pResultSuelNet.value == "")){
        // --- Expresion regular solo numeros puntos y comas son aceptados ---
        var regex = /^[0-9]+(?:\.[0-9]+)?(?:,[0-9]+(?:\.[0-9]+)?)*$/;
        if(regex.test(pResultSuelNet.value)){
            // --- Obteniendo datos de ventana de entrada  ---
            const infoWinSN = Number(pResultSuelNet.value);
            // --- resultados ---
            const necBas = infoWinSN * 50 / 100;
            const gasPer = infoWinSN * 30 / 100;
            const ahoInv = infoWinSN * 20 / 100;
            // --- impresion --- 
            winNesBas.innerHTML = `$  ${formato(necBas.toFixed(2))}`;
            winGasPer.innerHTML = `$  ${formato(gasPer.toFixed(2))}`;
            winAhoInv.innerHTML = `$  ${formato(ahoInv.toFixed(2))}`;
            disableOptions();
            mensajeResultadoExitosoRango();
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
const btnResultHerr = document.createElement("button");
const btnClearHerr = document.createElement("button");
const labelArea = document.createElement("p");
const textarea = document.createElement("textarea");
// --- ---
const titleSuelNet = document.createElement("label");
const pResultSuelNet = document.createElement("input");
let winNesBas;
let winGasPer;
let winAhoInv;
// --- ---
const titleIngTot = document.createElement("label");
const pResultIngTot = document.createElement("input");

const titleGasFij = document.createElement("label");
const pResultGasFij = document.createElement("input");

let winCapEnd;
// --- ---
let btnClearHerrReg;
let btnResultHerrReg;
// --- ---
let rutaFHerr;
let rutaFHerrClear;
// --- Variable de identificacion de figura ----------------------------------------------
let varId = "";
renderIntroduccion();

