const estadisticaArray = [];

const introEstadistica = {
    defImg: "../assets/estadistica_img.svg",
    defTitulo: "Introduccion",

    defEstadisticaTitulo: "Estadistica Basica",
    defEstadistica: "La estadística es una rama de las matemáticas que te permite recopilar, organizar y analizar datos,  ejemplo: obtener un resultado, comparar información, entre muchas cosas más.",
 
    defMediaTitulo: "Promedio o Media Aritmetica",
    defMedia: "La media es la media aritmética de un conjunto de valores numéricos.",

    defMedianaTitulo: "Mediana",
    defMediana: "La mediana es el valor medio de un conjunto de datos cuando los valores se ordenan de forma ascendente o descendente.",
    
    defModaTitulo: "Moda",
    defModa: "La moda representa el valor o categoría más común dentro del conjunto de datos.",

    defGuiaTitulo: "Forma de uso :",
    defGuia: "El boton <span>Medida</span> muestra calculadoras.<br>El boton <span>Menu</span> lleva al menu principal."
};
const promedioObj = {
    id: "media_mediana_moda",
    titleFig: "Instrucciones",
    imgFig: "../assets/calculadora_media_mediana_moda.png",

    titleAltura: "Media Mediana Moda",
    inputAltura: [
        {
            inputLabel: "Medida lados iguales",
            inputId: "winHTriIsoSideEq"
        },
        {
            inputLabel: "Medida de base",
            inputId: "winHTriIsoBase"
        }
    ],
    resultClH: "resultHTriIso",
    btnClH: "btnResultHTriIso",
    btn2ClH: "btnClearHTriIso",
    funcionAltura: "hTriangleIso",
    clearWindowH: "clearHFig",
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
estadisticaArray.push(promedioObj);
// estadisticaArray.push(modaObj);
// estadisticaArray.push(PromedioObj);



