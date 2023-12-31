const AlturasArray = [];

const introAlturas = {
    defImg: "../assets/altura_img.svg",
    defTitulo: "Introduccion",

    defAlturaTitulo: "Que es la Altura ?",
    defAltura: "La altura de una figura geométrica es la longitud o distancia de una dimensión geométrica, vertical o dirección de la gravedad. Este término se utiliza para designar la coordenada vertical de la parte más elevada de la figura a su base.",
    defAltura2Titulo: "Que es la Base ?",
    defAltura2: "Base es un lado o cara elegido ( en algunos casos arbitrariamente) para realizar el cálculo de área o volumen.",

    defNotaTitulo: "Nota:",
    defNota: "Se pueden usar diferentes formulas para obtener un resultado como: el teorema de pitagotas, la formula de heron, formula del area. etc",
    defGuiaTitulo: "Forma de uso :",
    defGuia: "Con el boton de <span>Figuras</span> seleccionas figuras geometricas, mostrara formulas y calculadoras para encontrar su altura.<br>Con el boton <span>Menu</span> regrezaras al menu principal."
};
const trianguloIsoscelesObj = {
    id: "triangulo_isosceles",
    titleFig: "Triangulo Isosceles",
    imgFig: "../assets/triangulo_isosceles_altura.png",

    titleAltura: "Altura Triangulo Isosceles",
    inputAltura: [
        {
            inputLabel: "Medida lado 1",
            inputId: "winHTriIsoSide1"
        },
        {
            inputLabel: "Medida lado 2",
            inputId: "winHTriIsoSide2"
        },
        {
            inputLabel: "Medida d base",
            inputId: "winHTriIsoBase"
        }
    ],
    resultClH: "resultHTriIso",
    btnClH: "btnResultHTriIso",
    funcionAltura: "hTriangleIso",
};
const trianguloEscalenoObj = {
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
            inputLabel: "Medida de base",
            inputId: "winHTriEscBase"
        }
    ],
    resultClH: "resultHTriEsc",
    btnClH: "btnResultHTriEsc",
    funcionAltura: "hTriEsc",
};

AlturasArray.push(introAlturas);
AlturasArray.push(trianguloIsoscelesObj);
AlturasArray.push(trianguloEscalenoObj);


