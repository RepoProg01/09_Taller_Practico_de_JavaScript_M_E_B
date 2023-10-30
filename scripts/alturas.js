
const body = document.querySelector(".body");
const figuras = document.querySelector(".figuras");
const listIndex = document.querySelector(".listIndex");
const blurC = document.querySelector(".blurC");

figuras.addEventListener("click", figurasFnc);
blurC.addEventListener("click", blurFnc);

function figurasFnc(){
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

function borrar(){
    medidaH = null;
    medidaH2 = null;
    inputRadioHC.checked = false;
    inputRadioHM.checked = false;
    inputRadioH2C.checked = false;
    inputRadioH2M.checked = false;
    divAltura.innerHTML = "";
    divAltura2.innerHTML = "";
    sectionHmiddle.innerHTML = "";
    sectionH2middle.innerHTML = "";
    pResultH.innerHTML = "";
    pResultH2.innerHTML = "";
    pResultH.classList.remove(pResultHReg);
    btnResultH.classList.remove(btnResultHReg);
    pResultH2.classList.remove(pResultH2Reg);
    btnResultH2.classList.remove(btnResultH2Reg);
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
const defAlturaTitulo = document.createElement("p");
const defAltura = document.createElement("p");
const defAltura2Titulo = document.createElement("p");
const defAltura2 = document.createElement("p");
// --------------------------------- sectionDbottom -------------------------------
const sectionDbottom = document.createElement("div");
const defNotaTitulo = document.createElement("p");
const defNota = document.createElement("p");
const defGuiaTitulo = document.createElement("p");
const defGuia = document.createElement("p");


// ------------------------------ containerResponsive -----------------------------
const containerResponsive = document.createElement("section");
// ---------------------------------- formulaImg ----------------------------------
const formulaImg = document.createElement("div");
const titleFig = document.createElement("h2");
const imgFigura = document.createElement("img");
// ------------------------------ containerAltura -------------------------------
const containerAltura = document.createElement("div");

// ----------------------------------- divAltura ------------------------------------
const divAltura = document.createElement("div");
// --------------------------------- sectionHtop ----------------------------------
const sectionHtop = document.createElement("section");
const pTitleH = document.createElement("p");
const pformulaH = document.createElement("p");
// -------------------------------- sectionHmiddle --------------------------------
const sectionHmiddle = document.createElement("section");
const divRadioH = document.createElement("div");
const inputRadioHC = document.createElement("input");
const inputRadioHM = document.createElement("input");
const inputLabelHC = document.createElement("label");
const inputLabelHM = document.createElement("label");
// -------------------------------- sectionHbottom --------------------------------
const sectionHbottom = document.createElement("section");
const pResultH = document.createElement("p");
const btnResultH = document.createElement("button");

// --------------------------------- divAltura2 ----------------------------------
const divAltura2 =document.createElement("div");
// --------------------------------- sectionPtop -----------------------------------
const sectionH2top = document.createElement("section");
const pTitleH2 = document.createElement("p");
const pformulaH2 = document.createElement("p");
// -------------------------------- sectionPmiddle ---------------------------------
const sectionH2middle = document.createElement("section");
const divRadioH2 = document.createElement("div");
const inputRadioH2C = document.createElement("input");
const inputRadioH2M = document.createElement("input");
const inputLabelH2C = document.createElement("label");
const inputLabelH2M = document.createElement("label");
// -------------------------------- sectionPbottom --------------------------------
const sectionH2bottom = document.createElement("section");
const pResultH2 = document.createElement("p");
const btnResultH2 = document.createElement("button");

// =================================== variables ==================================
let medidaH;
let medidaH2;
let btnResultHReg;
let btnResultH2Reg;
let pResultHReg;
let pResultH2Reg;
let rutaFH;
let rutaFH2;

function medSeleccion() {
    if(inputRadioHC.checked) {
        medidaH = "cm";
    }else if(inputRadioHM.checked) {
        medidaH = "m";
    };
};

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
    pformulaH.innerHTML = objeto.formulaAltura;
    sectionHtop.classList.add("sectionHtop");
    sectionHtop.append(pTitleH, pformulaH);

    divRadioH.classList.add("divRadioH");
    inputRadioHC.setAttribute("type", "radio");
    inputRadioHC.setAttribute("name", "radH");
    inputRadioHC.setAttribute("id", "radHC");
    inputLabelHC.setAttribute("for", "radHC");
    inputLabelHC.innerHTML = "centimetros";
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

    pResultHReg = objeto.resultClH
    pResultH.classList.add("winStyle", pResultHReg);
    btnResultHReg = objeto.btnClH;
    btnResultH.classList.add("btnResult", btnResultHReg);
    btnResultH.innerHTML = "Resultado";
    sectionHbottom.classList.add("sectionHbottom");
    sectionHbottom.append(pResultH, btnResultH);
    divAltura.append(sectionHtop, sectionHmiddle, sectionHbottom);
    btnResultH.removeEventListener("click", rutaFH);
    rutaFH = (eval(objeto.funcionAltura));
    btnResultH.addEventListener("click", rutaFH);
    document.documentElement.scrollTop = 0;
};


// ------------------------ Alturas --------------------------
// ------------- altura de triangulo isosceles -------------

function hTriangleIso(){
    const winHTriIsoSide1 = document.querySelector("#winHTriIsoSide1");
    const winHTriIsoSide2 = document.querySelector("#winHTriIsoSide2");
    const winHTriIsoBase = document.querySelector("#winHTriIsoBase");
    medSeleccion();
    if(winHTriIsoSide1.value > 0 && winHTriIsoSide2.value > 0 && winHTriIsoBase.value > 0 && winHTriIsoSide1.value === winHTriIsoSide2.value){
        if(inputRadioHC.checked || inputRadioHM.checked){
            const lado1 = Number(winHTriIsoSide1.value);
            const lado2 = Number(winHTriIsoSide2.value);
            const base = Number(winHTriIsoBase.value);
            const result = Math.sqrt(Math.pow(lado1,2) - Math.pow( (base/2), 2) );
            pResultH.innerHTML = `Altura = ${result.toFixed(2)} ${medidaH}`;
        }else{
            pResultH.innerHTML = "Elegir centimetros o metros";
        }
    }else{
        pResultH.innerHTML = "Lados deben de ser mayores a 0 y L1 y L2 iguales";
    }
}
// ------------- altura de triangulo escaleno -------------
function hTriEsc(){
    const winHTriEscSide1 = document.querySelector("#winHTriEscSide1");
    const winHTriEscSide2 = document.querySelector("#winHTriEscSide2");
    const winHTriEscBase = document.querySelector("#winHTriEscBase");
    medSeleccion();
    if(winHTriEscSide1.value > 0 && winHTriEscSide2.value > 0 && winHTriEscBase.value > 0){
        if(inputRadioHC.checked || inputRadioHM.checked){
            const lado1 = Number(winHTriEscSide1.value);
            const lado2 = Number(winHTriEscSide2.value);
            const base = Number(winHTriEscBase.value);
            const semiPerimeter = (lado1 + lado2 + base) / 2;
            // const desestruc = [lado1, lado2, base];
            // const [a,b,c] = desestruc.sort((a,b) => b - a);
            const process =  (2 / base) * Math.sqrt((semiPerimeter * (semiPerimeter - lado1) * (semiPerimeter - lado2) * (semiPerimeter - base)));
            const result =  process;
            pResultH.innerHTML = `Altura = ${result.toFixed(2)} ${medidaH}`;
        }else{
            pResultH.innerHTML = "Elegir centimetros o metros";
        }
    }else{
        pResultH.innerHTML = "Lados deben de ser mayores a 0";
    }
}
renderIntroduccion();