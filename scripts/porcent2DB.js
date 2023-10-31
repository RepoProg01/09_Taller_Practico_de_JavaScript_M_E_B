const introPorcentajeArray = [];

const introPorcentaje = {
    defImg: "../assets/porcentaje_img.svg",
    defTitulo: "Introduccion",

    defPorcentajeTitulo: "Que es porcentaje ?",
    defPorcentaje: "El porcentaje es la forma de expresar un número como una fracción que tiene como denominador el número 100, conocido también, como tanto por ciento. ",
    defPorcentaje2Titulo: "Regla de tres",
    defPorcentaje2: "La regla de tres puede ser:<br><br>Simple directa,<br>Simple inversa,<br>Compuesta directa,<br>Compuesta inversa.",

    defNotaTitulo: "Regla de tres Compuesta",
    defNota: "Simple directa es cuando son directamente proporcionales.<br><br>Simple inversa es cuando sus magnitudes inversamente proporcionales,<br>",
    defGuiaTitulo: "Forma de uso :",
    defGuia: "Con el boton de <span>Casos</span> seleccionas diferentes variantes de la regla de tres y mostrara calculadoras.<br>Con el boton <span>Menu</span> regrezaras al menu principal."
};

const RD3SimpleDirectaObj = {
    id: "simple_directa",
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
    id: "simple_inversa",
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

introPorcentajeArray.push(introPorcentaje);
introPorcentajeArray.push(RD3SimpleDirectaObj);
introPorcentajeArray.push(RD3SimpleInversaObj);



