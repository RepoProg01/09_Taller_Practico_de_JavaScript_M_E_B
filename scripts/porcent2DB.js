const introPorcentajeArray = [];

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
const RD3CalculadoraObj = {
    definicion: "on",
    id: "calculadora",
    titleFig: "Calculadora Simple",
    imgFig: "../assets/CompuestaMixta.png",

    titlePorcentaje: "Calculadora Simple",
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

introPorcentajeArray.push(introPorcentaje);
introPorcentajeArray.push(RD3CalculadoraObj);
introPorcentajeArray.push(RD3SimpleDirectaObj);
introPorcentajeArray.push(RD3SimpleInversaObj);
introPorcentajeArray.push(RD3CompuestaDirectaObj);
introPorcentajeArray.push(RD3CompuestaInversaObj);
introPorcentajeArray.push(RD3CompuestaMixtaObj);



