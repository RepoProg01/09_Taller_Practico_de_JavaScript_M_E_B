const estadisticaArray = [];

const introEstadistica = {
    defImg: "../assets/estadistica_img.svg",
    defTitulo: "introducción",

    defEstadisticaTitulo: "Que es la Estadística ?",
    defEstadistica: "La estadística es una rama de las matemáticas que se ocupa de recopilar, organizar, analizar, interpretar, presentar y describir datos. Su objetivo principal es proporcionar herramientas y métodos para extraer conclusiones significativas a partir de conjuntos de datos, con el fin de comprender patrones, tomar decisiones informadas y realizar predicciones.<br><br>La estadística se aplica en una amplia variedad de campos, como la investigación científica, la economía, la medicina, la sociología, la ingeniería, entre otros.",

    defCategoriaTitulo: "Categorias",
    defCategoria: "La estadística se divide en dos categorías principales :<br>- Estadística descriptiva<br>- Estadística inferencial.",

    defGuiaTitulo: "Forma de uso :",
    defGuia: "Con el boton <span>Medida</span> mostrara calculadoras de estadística basica y ejemplos.<br>El boton <span>Menu</span>Te llevara al menu principal."
};
const mediaMedianaModaObj = {
    id: "media_mediana_moda",
    titleMMM: "Instrucciones",
    imgMMM: "../assets/calculadora_media_mediana_moda.png",

    titleMeMeMo: "Media Mediana Moda",
    inputMeMeMo: [
        {
            inputLabel: "Introduce valores a comparar separados por una coma ( , )",
            inputId: "textAreaId",
            inputCl: "textAreaCl"
        }
    ],
    resultEstMedia: "resultEstMedia",
    resultEstMediana: "resultEstMediana",
    resultEstModa: "resultEstModa",
    btnClEst: "btnResultEst",
    btn2ClEst: "btnClearEst",
    funcionEst: "estadisticaMMM",
    clearWindowEst: "clearEstOpt",
};
const medianaObj = {
    id: "triangulo_escaleno",
    titleFig: "Triangulo Escaleno",
    imgFig: "../assets/triangulo_escaleno_altura.png",

    titleAltura: "Atura Triangulo Escaleno",
    inputAltura: [
        {
            inputLabel: "Medida lado 1",
            inputId: "winHTriEscSide1"
        },
        {
            inputLabel: "Medida lado 2",
            inputId: "winHTriEscSide2"
        },
        {
            inputLabel: "Medida Base",
            inputId: "winHTriEscBase"
        }
    ],
    resultClH: "resultHTriEsc",
    btnClH: "btnResultHTriEsc",
    btn2ClH: "btnClearHTriEsc",
    funcionAltura: "hTriEsc",
    clearWindowH: "clearHFig",
};
const modaObj = {
    id: "triangulo_equilatero",
    titleFig: "Triangulo Equilatero",
    imgFig: "../assets/triangulo_equilatero_altura.png",

    titleAltura: "Altura Triangulo Equilatero",
    inputAltura: [
        {
            inputLabel: "Medida lado",
            inputId: "winHTriEquiSide"
        },
    ],
    resultClH: "resultHTriEqui",
    btnClH: "btnResultHTriEqui",
    btn2ClH: "btnClearHTriEqui",
    funcionAltura: "hTriangleEqui",
    clearWindowH: "clearHFig",
};

estadisticaArray.push(introEstadistica);
estadisticaArray.push(mediaMedianaModaObj);
// estadisticaArray.push(modaObj);
// estadisticaArray.push(PromedioObj);



