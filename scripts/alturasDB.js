const AlturasArray = [];

const introAlturas = {
    defImg: "../assets/altura_img.svg",
    defTitulo: "introducción",

    defAlturaTitulo: "Qué es la Altura ?",
    defAltura: "La altura de una figura geométrica es la longitud o distancia de una dimensión geométrica, vertical o dirección de la gravedad. Este término se utiliza para designar la coordenada vertical de la parte más elevada de la figura a su base.",
    defAltura2Titulo: "Qué es la Base ?",
    defAltura2: "Base es un lado o cara elegido ( en algunos casos arbitrariamente) para realizar el cálculo de área o volumen.",

    defNotaTitulo: "Nota:",
    defNota: "Se pueden usar diferentes fórmulas para obtener un resultado como: el teorema de pitágoras, la fórmula de herón, fórmula del área. etc",
    defGuiaTitulo: "Forma de uso :",
    defGuia: "Con el botón de <span>Figuras</span> seleccionas figuras geométricas, mostrará fórmulas y calculadoras para encontrar su altura.<br>Con el botón <span>Menú</span> regresarás al menú principal."
};
const trianguloEquilateroObj = {
    id: "triángulo_equilátero",
    mh: "s",
    titleFig: "Triángulo Equilátero",
    imgFig: "../assets/triangulo_equilatero_altura.png",

    titleAltura: "Altura Triángulo Equilátero",
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
const trianguloIsoscelesObj = {
    id: "triángulo_isósceles",
    mh: "p",
    titleFig: "Triángulo Isósceles",
    imgFig: "../assets/triangulo_isosceles_altura.png",

    titleAltura: "Altura Triángulo Isósceles",
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
const trianguloEscalenoObj = {
    id: "triángulo_escaleno",
    mh: "p",
    titleFig: "Triángulo Escaleno",
    imgFig: "../assets/triangulo_escaleno_altura.png",

    titleAltura: "Atura Triángulo Escaleno",
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
const trapecioObj = {
    id: "trapecio",
    mh: "p",
    titleFig: "Trapecio",
    imgFig: "../assets/trapecio_altura.png",

    titleAltura: "Atura Trapecio",
    inputAltura: [
        {
            inputLabel: "Medida L",
            inputId: "winHTrapecioSide1"
        },
        {
            inputLabel: "Medida b",
            inputId: "winHTrapeciobase"
        },
        {
            inputLabel: "Medida Base",
            inputId: "winHTrapecioBase"
        }
    ],
    resultClH: "resultHTrapecio",
    btnClH: "btnResultHTrapecio",
    btn2ClH: "btnClearHTrapecio",
    funcionAltura: "hTrapecio",
    clearWindowH: "clearHFig",
};

AlturasArray.push(introAlturas);
AlturasArray.push(trianguloEquilateroObj);
AlturasArray.push(trianguloIsoscelesObj);
AlturasArray.push(trianguloEscalenoObj);
AlturasArray.push(trapecioObj);


