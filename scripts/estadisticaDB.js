const estadisticaArray = [];

// -- Introduccion --
const introEstadistica = {
    defImg: "../assets/estadistica_img.svg",
    defTitulo: "introducción",

    defEstadisticaTitulo: "Que es la Estadística ?",
    defEstadistica: "La estadística es una rama de las matemáticas que se ocupa de recopilar, organizar, analizar, interpretar, presentar y describir datos. Su objetivo principal es proporcionar herramientas y métodos para extraer conclusiones significativas a partir de conjuntos de datos, con el fin de comprender patrones, tomar decisiones informadas y realizar predicciones.<br>La estadística se aplica en variedad de campos, como la investigación científica, la economía, la medicina, entre otros.",

    defCategoriaTitulo: "Categorías",
    defCategoria: "La estadística se divide en dos categorías principales:<br>- Estadística descriptiva<br>- Estadística inferencial.",

    defGuiaTitulo: "Forma de uso",
    defGuia: "Con el boton <span>Medida</span> mostrará calculadoras de estadística basica y ejemplos.<br>El boton <span>Menú</span> Te llevará al menú principal."
};
// -- Calculadoras --
const mediaMedianaObj = {
    definicion: "on",
    // estadistica: "Media_Mediana_Cal",
    id: "media_y_mediana",
    titleMM: "Instrucciones",
    imgMM: "../assets/calculadora_media_mediana.png",

    titleMM2: "Media Mediana",
    titleMMSub: "Calculadora",
    inputMM: [
        {
            outputMessage: "outputMessage",
            inputId: "textAreaId",
            inputCl: "textAreaCl"
        }
    ],
    resultEstMedia: "resultEstMedia",
    resultEstMediana: "resultEstMediana",
    btnClEst: "btnResultEst",
    btn2ClEst: "btnClearEst",
    funcionEst: "estMediaMediana",
    clearWindowEst: "clearEstOpt",
};
const modaCalObj = {
    definicion: "on",
    id: "moda_cal",
    titleMM: "Instrucciones",
    imgMM: "../assets/calculadora_moda.png",

    titleMM2: "Moda",
    titleMMSub: "Calculadora",
    inputMM: [
        {
            outputMessage: "outputMessage",
            inputId: "textAreaId",
            inputCl: "textAreaCl"
        }
    ],
    resultEstModa: "resultEstModa",
    btnClEst: "btnResultEst",
    btn2ClEst: "btnClearEst",
    funcionEst: "estModa",
    clearWindowEst: "clearEstOpt",
};

// -- Definiciones --
const mediaObj = {
    definicion: "off",
    id: "media",
    titleMM: "Definición Media",
    titleMM2: "Procedimiento",
    imgMM: "../assets/mediaTop.png",
    imgMM2: "../assets/mediaBottom.png",
    titlePorcentaje: "Procedimiento"
};
const medianaObj = {
    definicion: "off",
    id: "mediana",
    titleMM: "Definición Mediana",
    titleMM2: "Procedimiento",
    imgMM: "../assets/medianaTop.png",
    imgMM2: "../assets/medianaBottom.png",
    titlePorcentaje: "Procedimiento"
};
const modaObj = {
    definicion: "off",
    id: "moda",
    titleMM: "Definición Moda",
    titleMM2: "Procedimiento",
    imgMM: "../assets/modaTop.png",
    imgMM2: "../assets/modaBottom.png",
    titlePorcentaje: "Procedimiento"
};

estadisticaArray.push(introEstadistica);
estadisticaArray.push(mediaMedianaObj);
estadisticaArray.push(modaCalObj);
estadisticaArray.push(mediaObj);
estadisticaArray.push(medianaObj);
estadisticaArray.push(modaObj);




