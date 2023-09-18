const AlturasArray = [];

const introAlturas = {
    defImg: "../assets/altura_img.svg",
    defTitulo: "Introduccion",
    defAlturaTitulo: "Que es la Altura ?",
    // defAltura: "Altura se refiere a la distancia perpendicular al eje X, o la longitud o distancia entre un vértice y el lado opuesto (o su prolongación), denominado «base» si está en posición horizontal. La altura siempre es perpendicular a la base. Un triángulo tiene tres alturas diferentes respecto de sus tres lados y vértices.",
    defAltura: "La altura de un objeto o figura geométrica es una longitud o una distancia de una dimensión geométrica, usualmente vertical o en la dirección de la gravedad. Este término también se utiliza para designar la coordenada vertical de la parte más elevada de un objeto a su base.",

    defNotaTitulo: "Que es la Base ?",
    defNota: "Base a un lado o cara elegido ( en algunos casos arbitrariamente) para realizar el cálculo de área o volumen.",
    defGuiaTitulo: "Forma",
    defGuia: "Con el boton de <span>Figuras</span> Con el boton <span>Menu</span> regrezaras al menu principal."
};
const trianguloIsoscelesObj = {
    id: "triangulo_isosceles",
    titleFig: "Triangulo Isosceles",
    imgFig: "../assets/triangulo_isosceles_altura.png",

    titleAltura: "Altura Triangulo Isosceles",
    formulaAltura: " a = raiz2 ( L1(2) - ( (B / 2)(2) ) )",
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
    formulaAltura: "h = a/2 raiz ( S(S−a)(S−b)(S−c) )​",
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


