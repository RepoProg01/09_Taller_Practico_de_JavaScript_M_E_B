const herramientasArray = [];
// -- Introduccion --
const introHerramientas = {
    defImg: "../assets/herramientas_img.svg",
    defTitulo: "introducción",

    defHerramientaTitulo: "Qué son las Herramientas de Administración Financiera?",
    defHerramienta: "Las herramientas de Administración pueden ser en un software, aplicación o sistema diseñado para ayudar a empresas, organizaciones o individuos a gestionar sus finanzas de manera eficiente. Estas herramientas pueden tener una variedad de funciones y características como:<br><br>El método 50-30-20, La capacidad de endeudamiento, El Interés Simple, El Interés Compuesto por mencionar algunas de ellas",

    defCategoriaTitulo: "En resumen",
    defCategoria: "Una herramienta de administración financiera es una solución integral que ayuda a las empresas y personas a manejar sus recursos financieros de manera más efectiva.",

    defGuiaTitulo: "Forma de uso",
    defGuia: "Con el boton <span>Modo</span> mostrará diferentes calculadoras y ejemplos.<br><br>El boton <span>Menú</span> Te llevará al menú principal."
};
// -- Calculadoras --
const regla503020Obj = {
    definicion: "on",
    id: "regla_503020_cal",
    titleHerr: "Instrucciones",
    imgHerr: "../assets/503020_cal.png",

    titleHerr2: "Regla 503020",
    titleHerrSub: "Calculadora",
    titleLabSN: "Sueldo Neto",
    resultSN: "resultHerrSuelNet",
    windowHerr: [
        {
            titleW: "Necesidades Basicas",
            resultHerr: "resultHerrNecBas",
        },
        {
            titleW: "Gastos Personales",
            resultHerr: "resultHerrGasPer",
        },
        {
            titleW: "Ahorro o Inversión",
            resultHerr: "resultHerrAhoInv",
        }
    ],
    btnClHerr: "btnResultHerr",
    btn2ClHerr: "btnClearHerr",
    funcionHerr: "herr503020",
    clearWindowHerr: "clearHerrOpt",
};
const capDeEndeudObj = {
    definicion: "on",
    id: "cap_endeudamiento_cal",
    titleHerr: "Instrucciones",
    imgHerr: "../assets/endeudamiento_cal.png",

    titleHerr2: "Capacidad Endeudamiento",
    titleHerrSub: "Calculadora",
    titleLabIT: "Ingresos Totales",
    resultIT: "resultHerrIngTot",
    titleLabGF: "Gastos Fijos",
    resultGF: "resultHerrGasFij",
    windowHerr: [
        {
            titleW: "Cap Endeudamiento",
            resultHerr: "resultHerrCapEnd",
        }
    ],
    btnClHerr: "btnResultHerr",
    btn2ClHerr: "btnClearHerr",
    funcionHerr: "herr503020",
    clearWindowHerr: "clearHerrOpt",
};
// -- Definiciones --
const regla503020DefObj = {
    definicion: "off",
    id: "regla_503020",
    titleHerr: "Definición 503020",
    titleHerr2: "Procedimiento",
    imgHerr: "../assets/503020_Top.png",
    imgMM2: "../assets/503020_bottom.png",
    titlePorcentaje: "Procedimiento"
};
const capDeEndeudDefObj = {
    definicion: "off",
    id: "cap_endeudamiento",
    titleHerr: "Capacidad Endeudamiento",
    titleHerr2: "Procedimiento",
    imgHerr: "../assets/endeudamiento_top.png",
    imgMM2: "../assets/endeudamiento_bottom.png",
    titlePorcentaje: "Procedimiento"
};
// --- intro ---
herramientasArray.push(introHerramientas);
// --- Calculadoras ---
herramientasArray.push(regla503020Obj);
herramientasArray.push(capDeEndeudObj);
// --- Definiciones ---
herramientasArray.push(regla503020DefObj);
herramientasArray.push(capDeEndeudDefObj);





