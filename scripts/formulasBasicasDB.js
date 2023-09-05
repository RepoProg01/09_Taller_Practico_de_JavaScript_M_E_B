const formulasArray = [];


const intro = {
    defImg: "../assets/areasYformulasFoto.png",
    defTitulo: "Introduccion :",
    defArea: "El área es la medida bidimensional de una superficie. También es entendida como el espacio o región que cubre la figura geométrica. Para representar el área se utilizan unidades cuadradas, como por ejemplo, m2 o cm2.",
    defPerimetro: "El perímetro corresponde a la longitud total de los lados de una figura, es decir, a la longitud de su contorno. Para calcularlo se requieren unidades de una sola dimensión.",
    defClose: "No se debe olvidar que para determinar las áreas y perímetros de figuras, las fórmulas dependerán del tipo de figura y de las medidas correspondientes a cada una.</p>"
};
const trianguloObj = {
    id: "triangulo",
    imgFig: "../assets/triangulo.png",

    titleArea: "Area del Triangulo",
    formulaArea: "Formula = Base * Altura / 2",
    inputArea: [
        {
            inputLabel: "Medida base en cm",
            inputId: "winTriBaseA"
        },
        {
            inputLabel: "Medida altura en cm",
            inputId: "winTriHeight"
        },
    ],
    resultClA: "resultATri",
    btnClA: "btnResultATri",
    funcionArea: "aTriangle",

    titlePerimetro: "Perimetro del Triangulo",
    formulaPerimetro: "Formula = Lado1 + Lado2 + Base",
    inputPerimetro: [
        {
            inputLabel: "Medida lado 1 en cm",
            inputId: "winTriSide1"
        },
        {
            inputLabel: "Medida lado 2 en cm",
            inputId: "winTriSide2"
        },
        {
            inputLabel: "Medida d base en cm",
            inputId: "winTriBase"
        },
    ],
    resultClP: "resultPTri",
    btnClP: "btnResultPTri",
    funcionPerimetro: "pTriangle"
};
const cuadradoObj = {
    id: "cuadrado",
    imgFig: "../assets/cuadrado.png",

    titleArea: "Area del Cuadrado",
    formulaArea: "Formula = Lado * Lado",
    inputArea: [
        {
            inputLabel: "Medida lado en cm",
            inputId: "winSqrArea"
        },
    ],
    resultClA: "resultASqr",
    btnClA: "btnResultASqr",

    titlePerimetro: "Perimetro del Cuadrado :",
    formulaPerimetro: "Formula = 4 * Lado",
    inputPerimetro: [
        {
            inputLabel: "Medida lado en cm",
            inputId: "winSqrPerimeter"
        }
    ],
    resultClP: "resultPSqr",
    btnClP: "btnResultPSqr"
};
const rectanguloObj = {
    id: "rectangulo",
    imgFig: "../assets/rectangulo.png",

    titleArea: "Area del Rectangulo :",
    formulaArea: "Formula = Base * Altura",
    inputArea: [
        {
            inputLabel: "Medida base en cm",
            inputId: "winRecABase"
        },
        {
            inputLabel: "Medida altura en cm",
            inputId: "winRecAAltura"
        }
    ],
    resultClA: "resultARec",
    btnClA: "btnResultARec",

    titlePerimetro: "Perimetro del Rectangulo :",
    formulaPerimetro: "Formula = (2 * Base) + (2 * Lado)",
    inputPerimetro: [
        {
            inputLabel: "Medida base en cm",
            inputId: "winRecPBase"
        },
        {
            inputLabel: "Medida lado en cm",
            inputId: "winRecPLado"
        }
    ],
    resultClP: "resultPRec",
    btnClP: "btnResultPRec"
};
const paralelogramoObj = {
    id: "paralelogramo",
    imgFig: "../assets/paralelogramo.png",

    titleArea: "Area del Paralelogramo :",
    formulaArea: "Formula = base * altura",
    inputArea: [
        {
            inputLabel: "Medida de base en cm",
            inputId: "winParABase"
        },
        {
            inputLabel: "Medida de altura en cm",
            inputId: "winParAltura"
        }
    ],
    resultClA: "resultAPar",
    btnClA: "btnResultAPar",

    titlePerimetro: "Perimetro del Paralelogramo :",
    formulaPerimetro: "Formula = 2 x (b + L)",
    inputPerimetro: [
        {
            inputLabel: "Medida de base en cm",
            inputId: "winParPBase"
        },
        {
            inputLabel: "Medida de lado en cm",
            inputId: "winParPAltura"
        }
    ],
    resultClP: "resultPPar",
    btnClP: "btnResultPPar"
};
const trapecioObj = {
    id: "trapecio",
    imgFig: "../assets/trapecio.png",

    titleArea: "Area del Trapecio :",
    formulaArea: "Formula = ((B + b) * h) / 2",
    inputArea: [
        {
            inputLabel: "Medida de B en cm",
            inputId: "winTrapAB"
        },
        {
            inputLabel: "Medida de b en cm",
            inputId: "winTrapAb"
        },
        {
            inputLabel: "Medida de h en cm",
            inputId: "winTrapAa"
        }
    ],
    resultClA: "resultATrapecio",
    btnClA: "btnResultATrapecio",

    titlePerimetro: "Perimetro del Trapecio :",
    formulaPerimetro: "Formula = B + b + L1 + L2",
    inputPerimetro: [
        {
            inputLabel: "Medida B en cm",
            inputId: "winL1PTrap"
        },
        {
            inputLabel: "Medida b en cm",
            inputId: "winL2PTrap"
        },
        {
            inputLabel: "Medida L1 en cm",
            inputId: "winL3PTrap"
        },
        {
            inputLabel: "Medida L2 en cm",
            inputId: "winL4PTrap"
        }
    ],
    resultClP: "resultPTrap",
    btnClP: "btnResultPTrap"
};
const romboObj = {
    id: "rombo",
    imgFig: "../assets/rombo.png",

    titleArea: "Area del Rombo :",
    formulaArea: "Formula = D x d / 2",
    inputArea: [
        {
            inputLabel: "Medida D en cm",
            inputId: "winD1A"
        },
        {
            inputLabel: "Medida d en cm",
            inputId: "winD2A"
        },
    ],
    resultClA: "resultARombo",
    btnClA: "btnResultARombo",

    titlePerimetro: "Perimetro del Rombo :",
    formulaPerimetro: "Formula = L1 + L2 + L3 + L4",
    inputPerimetro: [
        {
            inputLabel: "Medida L1 en cm",
            inputId: "winPRomL1"
        },
        {
            inputLabel: "Medida L2 en cm",
            inputId: "winPRomL2"
        },
        {
            inputLabel: "Medida L3 en cm",
            inputId: "winPRomL3"
        },
        {
            inputLabel: "Medida L4 en cm",
            inputId: "winPRomL4"
        }
    ],
    resultClP: "resultPRombo",
    btnClP: "btnResultPRombo"
};
const pentagonoObj = {
    id: "pentagono",
    imgFig: "../assets/pentagono.png",

    titleArea: "Area del pentagono :",
    formulaArea: "Formula = perimetro x apotema / 2",
    inputArea: [
        {
            inputLabel: "Medida perimetro cm",
            inputId: "winAPPent"
        },
        {
            inputLabel: "Medida apotema cm",
            inputId: "winAApotPent"
        }
    ],
    resultClA: "resultAPentagono",
    btnClA: "btnResultAPentagono",

    titlePerimetro: "Perimetro del Pentagono :",
    formulaPerimetro: "Formula = 5 x L",
    inputPerimetro: [
        {
            inputLabel: "Medida lado en cm",
            inputId: "winPPenL"
        }
    ],
    resultClP: "resultPPentagono",
    btnClP: "btnResultPPentagono"
};
const hexagonoObj = {
    id: "hexagono",
    imgFig: "../assets/hexagono.png",

    titleArea: "Area del Hexagono :",
    formulaArea: "Formula = (perimetro x apotema) / 2",
    inputArea: [
        {
            inputLabel: "Medida perimetro en cm",
            inputId: "winAPHex"
        },
        {
            inputLabel: "Medida apotema en cm",
            inputId: "winAApotHex"
        }
    ],
    resultClA: "resultAHexagono",
    btnClA: "btnResultAHex",

    titlePerimetro: "Perimetro del Hexagono :",
    formulaPerimetro: "Formula = 6 * Lado",
    inputPerimetro: [
        {
            inputLabel: "Medida lado en cm",
            inputId: "winPHexL"
        }
    ],
    resultClP: "resultPHex",
    btnClP: "btnResultPHex"
};
const circuloObj = {
    id: "circulo",
    imgFig: "../assets/circulo.png",

    titleArea: "Area del Circulo :",
    formulaArea: "Formula = pi x r2",
    inputArea: [
        {
            inputLabel: "Medida radio en cm",
            inputId: "winCircArea"
        }
    ],
    resultClA: "resultACirc",
    btnClA: "btnResultACirc",

    titlePerimetro: "Circunferncia :",
    formulaPerimetro: "Formula = pi * diametro",
    inputPerimetro: [
        {
            inputLabel: "Medida radio en cm",
            inputId: "winCircunferencia"
        }
    ],
    resultClP: "resultCircunferencia",
    btnClP: "btnResultCircunferencia"
};

formulasArray.push(intro);
formulasArray.push(trianguloObj);
formulasArray.push(cuadradoObj);
formulasArray.push(rectanguloObj);
formulasArray.push(paralelogramoObj);
formulasArray.push(trapecioObj);
formulasArray.push(romboObj);
formulasArray.push(pentagonoObj);
formulasArray.push(hexagonoObj);
formulasArray.push(circuloObj);

