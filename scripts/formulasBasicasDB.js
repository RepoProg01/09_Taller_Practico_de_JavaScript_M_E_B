const formulasArray = [];

const intro = {
    defImg: "../assets/per_area_img.svg",
    defTitulo: "Introduccion",
    defAreaTitulo: "Que es el Area ?",
    defArea: "Area es la medida bidimensional de una superficie. Es entendida como el espacio o región que cubre la figura geométrica. Para representar el área se utilizan unidades cuadradas, ejemplo, m2 o cm2.",
    defPerimetroTitulo: "Que es el Perimetro ?",
    defPerimetro: "Perímetro corresponde a la longitud total de los lados de una figura, a la longitud de su contorno. Para calcularlo se requieren unidades de una sola dimensión.",
    
    defNotaTitulo: "Nota :",
    defNota: "No se debe olvidar que para determinar las áreas y perímetros de figuras, las fórmulas dependerán del tipo de figura y de las medidas correspondientes a cada una",
    defGuiaTitulo: "Forma de uso :",
    defGuia: "Con el boton de <span>Figuras</span>, seleccionas figuras geometricas basicas, mostrara formulas y calculadoras para areas y perimetros.<br>Con el boton <span>Menu</span> regrezaras al menu principal."
};
const trianguloObj = {
    id: "triangulo",
    imgFig: "../assets/triangulo_equilatero.png",

    titleArea: "Area del Triangulo",
    formulaArea: "Formula = Base * Altura / 2",
    inputArea: [
        {
            inputLabel: "Medida base",
            inputId: "winTriBaseA"
        },
        {
            inputLabel: "Medida altura",
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
            inputLabel: "Medida lado 1",
            inputId: "winTriSide1"
        },
        {
            inputLabel: "Medida lado 2",
            inputId: "winTriSide2"
        },
        {
            inputLabel: "Medida d base",
            inputId: "winTriBase"
        },
    ],
    resultClP: "resultPTri",
    btnClP: "btnResultPTri",
    funcionPerimetro: "pTriangle",
};
const cuadradoObj = {
    id: "cuadrado",
    imgFig: "../assets/cuadrado.png",

    titleArea: "Area del Cuadrado",
    formulaArea: "Formula = Lado * Lado",
    inputArea: [
        {
            inputLabel: "Medida lado",
            inputId: "winSqrArea"
        },
    ],
    resultClA: "resultASqr",
    btnClA: "btnResultASqr",
    funcionArea: "aSquare",

    titlePerimetro: "Perimetro del Cuadrado",
    formulaPerimetro: "Formula = 4 * Lado",
    inputPerimetro: [
        {
            inputLabel: "Medida lado",
            inputId: "winSqrPerimeter"
        }
    ],
    resultClP: "resultPSqr",
    btnClP: "btnResultPSqr",
    funcionPerimetro: "pSquare",
};
const rectanguloObj = {
    id: "rectangulo",
    imgFig: "../assets/rectangulo.png",

    titleArea: "Area del Rectangulo",
    formulaArea: "Formula = Base * Altura",
    inputArea: [
        {
            inputLabel: "Medida base",
            inputId: "winRecABase"
        },
        {
            inputLabel: "Medida altura",
            inputId: "winRecAAltura"
        }
    ],
    resultClA: "resultARec",
    btnClA: "btnResultARec",
    funcionArea: "aRectangulo",

    titlePerimetro: "Perimetro del Rectangulo",
    formulaPerimetro: "Formula = (2 * Base) + (2 * Lado)",
    inputPerimetro: [
        {
            inputLabel: "Medida base",
            inputId: "winRecPBase"
        },
        {
            inputLabel: "Medida lado",
            inputId: "winRecPLado"
        }
    ],
    resultClP: "resultPRec",
    btnClP: "btnResultPRec",
    funcionPerimetro: "pRectangulo",
};
const paralelogramoObj = {
    id: "paralelogramo",
    imgFig: "../assets/paralelogramo.png",

    titleArea: "Area del Paralelogramo",
    formulaArea: "Formula = base * altura",
    inputArea: [
        {
            inputLabel: "Medida de base",
            inputId: "winParABase"
        },
        {
            inputLabel: "Medida de altura",
            inputId: "winParAltura"
        }
    ],
    resultClA: "resultAPar",
    btnClA: "btnResultAPar",
    funcionArea: "aParalelogramo",

    titlePerimetro: "Perimetro del Paralelogramo",
    formulaPerimetro: "Formula = 2 x (b + L)",
    inputPerimetro: [
        {
            inputLabel: "Medida de base",
            inputId: "winParPBase"
        },
        {
            inputLabel: "Medida de lado",
            inputId: "winParPAltura"
        }
    ],
    resultClP: "resultPPar",
    btnClP: "btnResultPPar",
    funcionPerimetro: "pParalelogramo",
};
const trapecioObj = {
    id: "trapecio",
    imgFig: "../assets/trapecio.png",

    titleArea: "Area del Trapecio",
    formulaArea: "Formula = ((B + b) * h) / 2",
    inputArea: [
        {
            inputLabel: "Medida de B",
            inputId: "winTrapAB"
        },
        {
            inputLabel: "Medida de b",
            inputId: "winTrapAb"
        },
        {
            inputLabel: "Medida de h",
            inputId: "winTrapAa"
        }
    ],
    resultClA: "resultATrapecio",
    btnClA: "btnResultATrapecio",
    funcionArea: "aTrapecio",

    titlePerimetro: "Perimetro del Trapecio",
    formulaPerimetro: "Formula = B + b + L1 + L2",
    inputPerimetro: [
        {
            inputLabel: "Medida B",
            inputId: "winL1PTrap"
        },
        {
            inputLabel: "Medida b",
            inputId: "winL2PTrap"
        },
        {
            inputLabel: "Medida L1",
            inputId: "winL3PTrap"
        },
        {
            inputLabel: "Medida L2",
            inputId: "winL4PTrap"
        }
    ],
    resultClP: "resultPTrap",
    btnClP: "btnResultPTrap",
    funcionPerimetro: "pTrapecio",
};
const romboObj = {
    id: "rombo",
    imgFig: "../assets/rombo.png",

    titleArea: "Area del Rombo",
    formulaArea: "Formula = D x d / 2",
    inputArea: [
        {
            inputLabel: "Medida D",
            inputId: "winD1A"
        },
        {
            inputLabel: "Medida d",
            inputId: "winD2A"
        },
    ],
    resultClA: "resultARombo",
    btnClA: "btnResultARombo",
    funcionArea: "aRombo",

    titlePerimetro: "Perimetro del Rombo",
    formulaPerimetro: "Formula = L1 + L2 + L3 + L4",
    inputPerimetro: [
        {
            inputLabel: "Medida L1",
            inputId: "winPRomL1"
        },
        {
            inputLabel: "Medida L2",
            inputId: "winPRomL2"
        },
        {
            inputLabel: "Medida L3",
            inputId: "winPRomL3"
        },
        {
            inputLabel: "Medida L4",
            inputId: "winPRomL4"
        }
    ],
    resultClP: "resultPRombo",
    btnClP: "btnResultPRombo",
    funcionPerimetro: "pRombo",
};
const pentagonoObj = {
    id: "pentagono",
    imgFig: "../assets/pentagono.png",

    titleArea: "Area del pentagono",
    formulaArea: "Formula = perimetro x apotema / 2",
    inputArea: [
        {
            inputLabel: "Medida perimetro",
            inputId: "winAPPent"
        },
        {
            inputLabel: "Medida apotema",
            inputId: "winAApotPent"
        }
    ],
    resultClA: "resultAPentagono",
    btnClA: "btnResultAPentagono",
    funcionArea: "aPentagono",

    titlePerimetro: "Perimetro del Pentagono",
    formulaPerimetro: "Formula = 5 x L",
    inputPerimetro: [
        {
            inputLabel: "Medida lado",
            inputId: "winPPenL"
        }
    ],
    resultClP: "resultPPentagono",
    btnClP: "btnResultPPentagono",
    funcionPerimetro: "pPentagono",
};
const hexagonoObj = {
    id: "hexagono",
    imgFig: "../assets/hexagono.png",

    titleArea: "Area del Hexagono",
    formulaArea: "Formula = (perimetro x apotema) / 2",
    inputArea: [
        {
            inputLabel: "Medida perimetro",
            inputId: "winAPHex"
        },
        {
            inputLabel: "Medida apotema",
            inputId: "winAApotHex"
        }
    ],
    resultClA: "resultAHexagono",
    btnClA: "btnResultAHex",
    funcionArea: "aHexagono",

    titlePerimetro: "Perimetro del Hexagono",
    formulaPerimetro: "Formula = 6 * Lado",
    inputPerimetro: [
        {
            inputLabel: "Medida lado",
            inputId: "winPHexL"
        }
    ],
    resultClP: "resultPHex",
    btnClP: "btnResultPHex",
    funcionPerimetro: "pHexagono",
};
const circuloObj = {
    id: "circulo",
    imgFig: "../assets/circulo.png",

    titleArea: "Area del Circulo",
    formulaArea: "Formula = pi x r2",
    inputArea: [
        {
            inputLabel: "Medida radio",
            inputId: "winCircArea"
        }
    ],
    resultClA: "resultACirc",
    btnClA: "btnResultACirc",
    funcionArea: "aCirculo",

    titlePerimetro: "Circunferncia",
    formulaPerimetro: "Formula = pi * diametro",
    inputPerimetro: [
        {
            inputLabel: "Medida radio",
            inputId: "winCircunferencia"
        }
    ],
    resultClP: "resultCircunferencia",
    btnClP: "btnResultCircunferencia",
    funcionPerimetro: "circunferencia",
};
const elipseObj = {
    id: "elipse",
    imgFig: "../assets/elipse.png",

    titleArea: "Area del Elipse",
    formulaArea: "Formula = pi x a x b",
    inputArea: [
        {
            inputLabel: "Medida Semieje H",
            inputId: "winElipSemiEjeH"
        },
        {
            inputLabel: "Medida Semieje V",
            inputId: "winElipSemiEjeV"
        }
    ],
    resultClA: "resultAElip",
    btnClA: "btnResultAElip",
    funcionArea: "aElipse",

    titlePerimetro: "Longitud Elipse",
    formulaPerimetro: "Formula = pi * diametro",
    inputPerimetro: [
        {
            inputLabel: "Medida radio",
            inputId: "winElipse"
        }
    ],
    resultClP: "resultElipse",
    btnClP: "btnResultElipse",
    funcionPerimetro: "elipse",
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
formulasArray.push(elipseObj);

