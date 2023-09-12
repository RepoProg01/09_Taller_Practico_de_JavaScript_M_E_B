
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
        console.log("en figura");
    }else{
        renderIntroduccion();
        console.log("en intro");
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
        medidaH = "cm2";
    }else if(inputRadioAM.checked) {
        medidaH = "m2";
    };
    if(inputRadioH2C.checked) {
        medidaH2 = "cm";
    }else if(inputRadioPM.checked) {
        medidaH2 = "m";
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

    defAlturaTitulo.classList.add("defAreaTitulo", "defT");
    defAlturaTitulo.innerHTML = AlturasArray[0].defAlturaTitulo;
    defAltura.classList.add("defArea", "defC");
    defAltura.innerHTML = AlturasArray[0].defAltura;
    defAltura2Titulo.classList.add("defPerimetroTitulo", "defT");
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

    pResultHReg = objeto.resultClA
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

    //=================================== Perimetro ===================================
    // containerAltura.appendChild(divPerimetro);

    // divPerimetro.classList.add("containerFormules");

    // pTitleP.classList.add("titlesFormules");
    // pTitleP.innerHTML = objeto.titlePerimetro;
    // pformulaP.classList.add("textFormule");
    // pformulaP.innerHTML = objeto.formulaPerimetro;
    // sectionPtop.classList.add("sectionPtop");
    // sectionPtop.append(pTitleP, pformulaP);

    // divRadioP.classList.add("divRadioP");
    // inputRadioPC.setAttribute("type", "radio");
    // inputRadioPC.setAttribute("name", "radP");
    // inputRadioPC.setAttribute("id", "radPC");
    // inputLabelPC.setAttribute("for", "radPC");
    // inputLabelPC.innerHTML = "centimetros";
    // inputRadioPM.setAttribute("type", "radio");
    // inputRadioPM.setAttribute("name", "radP");
    // inputRadioPM.setAttribute("id", "radPM");
    // inputLabelPM.setAttribute("for", "radPM");
    // inputLabelPM.innerHTML = "metros";
    // divRadioP.append(inputRadioPC, inputLabelPC, inputRadioPM, inputLabelPM);
    // sectionPmiddle.classList.add("sectionPmiddle");
    // sectionPmiddle.appendChild(divRadioP);

    // objeto.inputPerimetro.forEach(winInput => {
    //     const divWinP = document.createElement("div");
    //     divWinP.classList.add("winPosition");
    //     const labelPerimetro = document.createElement("label");
    //     labelPerimetro.setAttribute("for", winInput.inputId);
    //     labelPerimetro.innerHTML = winInput.inputLabel;
    //     divWinP.appendChild(labelPerimetro);
    //     const inputPerimetroWindow = document.createElement("input");
    //     inputPerimetroWindow.setAttribute("type", "number");
    //     inputPerimetroWindow.setAttribute("id", winInput.inputId);
    //     inputPerimetroWindow.classList.add("inputStyle");
    //     divWinP.appendChild(inputPerimetroWindow);
    //     sectionPmiddle.appendChild(divWinP);
    // });

    // pResultPReg = objeto.resultClP;
    // pResultP.classList.add("winStyle", pResultPReg);
    // btnResultPReg = objeto.btnClP;
    // btnResultP.classList.add("btnResult", btnResultPReg);
    // btnResultP.innerHTML = "Resultado";
    // sectionPbottom.classList.add("sectionPbottom");
    // sectionPbottom.append(pResultP, btnResultP);
    // divPerimetro.append(sectionPtop, sectionPmiddle, sectionPbottom);
    // btnResultP.removeEventListener("click", rutaFP);
    // rutaFP = (eval(objeto.funcionPerimetro));
    // btnResultP.addEventListener("click", rutaFP);
    document.documentElement.scrollTop = 0;
};


// ------------------------ Alturas --------------------------
function hTriangleIso(){
    const winHTriSide1 = document.querySelector("#winHTriSide1");
    const winHTriSide2 = document.querySelector("#winHTriSide2");
    const winHTriBase = document.querySelector("#winHTriBase");
    medSeleccion();
    if(winHTriSide1.value > 0 && winHTriSide2.value > 0 && winHTriBase.value > 0 && winHTriSide1.value === winHTriSide2.value){
        if(inputRadioHC.checked || inputRadioHM.checked){
            const lado1 = Number(winHTriSide1.value);
            const lado2 = Number(winHTriSide2.value);
            const base = Number(winHTriBase.value);
            const result = Math.sqrt(Math.pow(lado1,2) - Math.pow( (base/2), 2) );
            pResultH.innerHTML = `Altura = ${result.toFixed(2)} cm`;
        }else{
            pResultH.innerHTML = "Elegir centimetros o metros";
        }
    }else{
        pResultH.innerHTML = "Lados deben de ser mayores a 0 <br>lado1 y lado2 iguales";
    }
}
// ------------- altura de triangulo escaleno -------------
function hTriEsc(){
    const winHTriSSide1 = document.querySelector("#winHTriSSide1");
    const winHTriSSide2 = document.querySelector("#winHTriSSide2");
    const winHTriSBase = document.querySelector("#winHTriSBase");
    medSeleccion();
    if(winHTriSSide1.value > 0 && winHTriSSide2.value > 0 && winHTriSBase.value > 0){
        if(inputRadioHC.checked || inputRadioHM.checked){
            const lado1 = Number(winHTriSSide1.value);
            const lado2 = Number(winHTriSSide2.value);
            const base = Number(winHTriSBase.value);
            const semiPerimeter = (lado1 + lado2 + base) / 2;
            const desestruc = [lado1, lado2, base];
            const [a,b,c] = desestruc.sort((a,b) => b - a);
            const process =  (2/a) * Math.sqrt((semiPerimeter * (semiPerimeter - a) * (semiPerimeter - b) * (semiPerimeter - c)));
            const result =  process;
            pResultH.innerHTML = `Altura = ${result.toFixed(2)} cm`;
        }else{
            pResultH.innerHTML = "Elegir centimetros o metros";
        }
    }else{
        pResultH.innerHTML = "Lados deben de ser mayores a 0 <br>lado1 y lado2 iguales";
    }
}



renderIntroduccion();