const introPorcentajeArray = [];

const introPorcentaje = {
    defImg: "../assets/porcentaje_img.svg",
    defTitulo: "Introduccion",

    defPorcentajeTitulo: "Que es porcentaje ?",
    defPorcentaje: "El porcentaje es la forma de expresar un número como una fracción que tiene como denominador el número 100, conocido también, como tanto por ciento. ",
    defPorcentaje2Titulo: "Regla de tres",
    defPorcentaje2: "La regla de tres es una forma de resolver problemas de proporcionalidad entre tres valores conocidos y una incógnita. En ella se establece una relación de linealidad, proporcionalidad, entre los valores involucrados.",

    defNotaTitulo: "Directa o Inversa",
    defNota: "La relación de proporcionalidad puede ser directa o inversa. Será directa cuando a un mayor valor de A habrá un mayor valor de B, y será inversa cuando a un mayor valor de A corresponda un menor valor de B.",
    defGuiaTitulo: "Forma de uso :",
    defGuia: "Con el boton de <span>Mas..</span> mostrara calculadoras y ejemplos de diferentes casos de la regla de tres,<br>Con el boton <span>Menu</span> regrezaras al menu principal."
};

const RD3SimpleDirectaObj = {
    id: "ejemplo_simple_directa",
    titleFig: "Simple directa",
    imgFig: "../assets/SimpleDirecta.png",

    titlePorcentaje: "Regla de tres Simple directa",
    formulaPorcentaje: "Inserta los 3 datos conocidos",
    inputPorcentaje: [
        {
            inputLabel: "A",
            inputId: "winSDvalorA"
        },
        {
            inputLabel: "B",
            inputId: "winSDvalorB"
        },
        {
            inputLabel: "C",
            inputId: "winSDvalorC"
        },
        {
            inputLabel: "D",
            inputId: "winSDvalorD"
        }
    ],
    resultClPC: "resultPCSD",
    btnClPC: "btnResultPCSD",
    funcionPorcentaje: "pcSD",
};
const RD3SimpleInversaObj = {
    id: "ejemplo_simple_inversa",
    titleFig: "Simple inversa",
    imgFig: "../assets/SimpleInversa.png",

    titlePorcentaje: "Regla de tres Simple inversa",
    formulaPorcentaje: "Inserta los 3 datos conocidos",
    inputPorcentaje: [
        {
            inputLabel: "A",
            inputId: "winSIvalorA"
        },
        {
            inputLabel: "B",
            inputId: "winSIvalorB"
        },
        {
            inputLabel: "C",
            inputId: "winSIvalorC"
        },
        {
            inputLabel: "D",
            inputId: "winSIvalorD"
        }
    ],
    resultClPC: "resultPCSI",
    btnClPC: "btnResultPCSI",
    funcionPorcentaje: "pcSI",
};
const RD3CompuestaDirectaObj = {
    id: "ejemplo_compuesta_directa",
    titleFig: "Compuesta directa",
    imgFig: "../assets/SimpleInversa.png",

    titlePorcentaje: "Regla de tres Simple inversa",
    formulaPorcentaje: "Inserta los 3 datos conocidos",
    inputPorcentaje: [
        {
            inputLabel: "A",
            inputId: "winSIvalorA"
        },
        {
            inputLabel: "B",
            inputId: "winSIvalorB"
        },
        {
            inputLabel: "C",
            inputId: "winSIvalorC"
        },
        {
            inputLabel: "D",
            inputId: "winSIvalorD"
        }
    ],
    resultClPC: "resultPCSI",
    btnClPC: "btnResultPCSI",
    funcionPorcentaje: "pcSI",
};

introPorcentajeArray.push(introPorcentaje);
introPorcentajeArray.push(RD3SimpleDirectaObj);
introPorcentajeArray.push(RD3SimpleInversaObj);
introPorcentajeArray.push(RD3CompuestaDirectaObj);



