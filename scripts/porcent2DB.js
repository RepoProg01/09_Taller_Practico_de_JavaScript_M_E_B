//-------------Array-----------------
const introPorcentajeArray = [];
//--------------Intro----------------
const introPorcentaje = {
    defImg: "../assets/porcentaje_img.svg",
    defTitulo: "Introduccion",

    defPorcentajeTitulo: "Que es porcentaje ?",
    defPorcentaje: "Es la forma de expresar un número como una fracción tiene como denominador el número 100, conocido, como tanto por ciento. ",
    defPorcentaje2Titulo: "Regla de tres",
    defPorcentaje2: "La regla de tres es una forma de resolver problemas de proporcionalidad entre tres valores conocidos y una incógnita. En ella se establece una relación de linealidad, proporcionalidad, entre los valores involucrados.",

    defNotaTitulo: "Directa o Inversa",
    defNota: "La relación de proporcionalidad puede ser directa o inversa. Será directa cuando a un mayor valor de A habrá un mayor valor de B, y será inversa cuando a un mayor valor de A corresponda un menor valor de B.",
    defGuiaTitulo: "Forma de uso :",
    defGuia: "Con el boton de <span>Mas..</span> mostrara calculadoras y ejemplos de diferentes casos de la regla de tres,<br>Con el boton <span>Menu</span> regrezaras al menu principal."
};

//-----------Calculadoras------------
const RD3SDICalculadoraObj = {
    definicion: "on",
    radios: "Simple",
    id: "calculadora_simple",
    titleFig: "Instrucciones",
    imgFig: "../assets/calculadora_simple.png",
    secMid: "sectionPCmiddleS",
    titlePorcentaje: "Calculadora Simple",
    formulaPorcentaje: "Inserta los 3 datos conocidos",
    winPos: "winPosDirInv",
    inputPorcentaje: [
        {
            inputLabel: "A",
            inputId: "winSDIvalorA"
        },
        {
            inputLabel: "B",
            inputId: "winSDIvalorB"
        },
        {
            inputLabel: "W",
            inputId: "winSDIvalorW"
        },
        {
            inputLabel: "Y",
            inputId: "winSDIvalorY"
        }
    ],
    resultClPC: "resultPCSDI",
    btnClPC: "btnResultPCSDI",
    btn2ClPC: "btnClearPCSDI",
    funcionPorcentaje: "pcSDI",
    clearWindow: "clearS_C"
};
const RD3CDIMCalculadoraObj = {
    definicion: "on",
    radios: "Compuesta",
    id: "calculadora_compuesta",
    titleFig: "Instrucciones",
    imgFig: "../assets/calculadora_compuesta.png",
    secMid: "sectionPCmiddleC",
    titlePorcentaje: "Calculadora Compuesta",
    formulaPorcentaje: "Inserta los 5 datos conocidos",
    winPos: "winPosDirInv",
    lista: [
        {
            family: "radPCCL",
            radX: "divRadioPCCLX",
            radD: "divRadioPCCLD",
            radI: "divRadioPCCLI",
            idForX: "radPCLX",
            idForD: "radPCLD",
            idForI: "radPCLI",
            textoX: "X",
            textoD: "D",
            textoI: "I",
            posDiv: "divRadioPCCL",
        },
        {
            family: "radPCCC",
            radX: "divRadioPCCCX",
            radD: "divRadioPCCCD",
            radI: "divRadioPCCCI",
            idForX: "radPCCX",
            idForD: "radPCCD",
            idForI: "radPCCI",
            textoX: "X",
            textoD: "D",
            textoI: "I",
            posDiv: "divRadioPCCC",
        },
        {
            family: "radPCCR",
            radX: "divRadioPCCRX",
            radD: "divRadioPCCRD",
            radI: "divRadioPCCRI",
            idForX: "radPCRX",
            idForD: "radPCRD",
            idForI: "radPCRI",
            textoX: "X",
            textoD: "D",
            textoI: "I",
            posDiv: "divRadioPCCR",
        }
    ],
    inputPorcentaje: [
        {
            inputLabel: "A",
            inputId: "winCDIMvalorA"
        },
        {
            inputLabel: "B",
            inputId: "winCDIMvalorB"
        },
        {
            inputLabel: "C",
            inputId: "winCDIMvalorC"
        },
        {
            inputLabel: "W",
            inputId: "winCDIMvalorW"
        },
        {
            inputLabel: "Y",
            inputId: "winCDIMvalorY"
        },
        {
            inputLabel: "Z",
            inputId: "winCDIMvalorZ"
        }
    ],
    resultClPC: "resultPCCDIM",
    btnClPC: "btnResultPCCDIM",
    btn2ClPC: "btnClearPCCDIM",
    funcionPorcentaje: "pcCDIM",
    clearWindow: "clearS_C"
};
const RD3SDescCalculadoraObj = {
    definicion: "on",
    radios: "Descuento",
    id: "calculadora_descuento",
    titleFig: "Instrucciones",
    imgFig: "../assets/calculadora_simple.png",
    secMid: "sectionPCmiddleDesc",
    winPos: "winPosDesc",

    titlePorcentaje: "Calculadora Descuento",
    formulaPorcentaje: "Introduce porcentaje y precio",
    inputPorcentaje: [
        {
            inputLabel: "Precio ",
            inputId: "winPrecio"
        },
        {
            inputLabel: "Descuento",
            inputId: "winDescuento"
        }
    ],
    resultClPC: "resultPCDESC",
    btnClPC: "btnResultPCDESC",
    btn2ClPC: "btnClearPCDESC",
    funcionPorcentaje: "pcDescuento",
    clearWindow: "clearS_C"
};

//--------------Ejemplos--------------
const RD3SimpleDirectaObj = {
    definicion: "off",
    id: "ejemplo_simple_directa",
    titleFig: "Simple directa",
    imgFig: "../assets/simple_directa_top.png",
    imgFig2: "../assets/simple_directa_bottom.png",
    titlePorcentaje: "Procedimiento"
};
const RD3SimpleInversaObj = {
    definicion: "off",
    id: "ejemplo_simple_inversa",
    titleFig: "Simple inversa",
    imgFig: "../assets/simple_inversa_top.png",
    imgFig2: "../assets/simple_inversa_bottom.png",
    titlePorcentaje: "Procedimiento"
};
const RD3CompuestaDirectaObj = {
    definicion: "off",
    id: "ejemplo_compuesta_directa",
    titleFig: "Compuesta directa",
    imgFig: "../assets/compuesta_directa_top.png",
    imgFig2: "../assets/compuesta_directa_bottom.png",
    titlePorcentaje: "Procedimiento"
};
const RD3CompuestaInversaObj = {
    definicion: "off",
    id: "ejemplo_compuesta_inversa",
    titleFig: "Compuesta inversa",
    imgFig: "../assets/compuesta_inversa_top.png",
    imgFig2: "../assets/compuesta_inversa_bottom.png",
    titlePorcentaje: "Procedimiento"
};
const RD3CompuestaMixtaObj = {
    definicion: "off",
    id: "ejemplo_compuesta_mixta",
    titleFig: "Compuesta mixta",
    imgFig: "../assets/compuesta_mixta_top.png",
    imgFig2: "../assets/compuesta_mixta_bottom.png",
    titlePorcentaje: "Procedimiento"
};
//-----------Agregar al array---------
introPorcentajeArray.push(introPorcentaje);
introPorcentajeArray.push(RD3SDICalculadoraObj);
introPorcentajeArray.push(RD3CDIMCalculadoraObj);
introPorcentajeArray.push(RD3SDescCalculadoraObj);
introPorcentajeArray.push(RD3SimpleDirectaObj);
introPorcentajeArray.push(RD3SimpleInversaObj);
introPorcentajeArray.push(RD3CompuestaDirectaObj);
introPorcentajeArray.push(RD3CompuestaInversaObj);
introPorcentajeArray.push(RD3CompuestaMixtaObj);

