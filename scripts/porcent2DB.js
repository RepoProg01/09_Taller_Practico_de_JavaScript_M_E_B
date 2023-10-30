const AlturasArray = [];

const introAlturas = {
    defImg: "../assets/porcentaje_img.svg",
    defTitulo: "Introduccion",

    defAlturaTitulo: "Que es porcentaje ?",
    defAltura: "El porcentaje es la forma de expresar un número como una fracción que tiene como denominador el número 100, conocido también, como tanto por ciento. ",
    defAltura2Titulo: "Regla de tres",
    defAltura2: "La regla de tres es una forma de resolver problemas de proporcionalidad entre tres valores conocidos y una incógnita. En ella se establece una relación de linealidad, proporcionalidad, entre los valores involucrados.",

    defNotaTitulo: "Nota:",
    defNota: "Se pueden usar diferentes variaciones de la regla de tres para obtener diferentes datos de porcentajes como: cantidad de un porcentaje, porcentaje de una cantidad, simple directa, simple inversa, compuesta directa etc ",
    defGuiaTitulo: "Forma de uso :",
    defGuia: "Con el boton de <span>Figuras</span> seleccionas diferentes variantes de la regla de tres y mostrara calculadoras.<br>Con el boton <span>Menu</span> regrezaras al menu principal."
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
    formulaAltura: "h = (a/2)  ( raiz (S(S−a)(S−b)(S−c) ) ​",
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


