const formulasArray = [];

const intro = {
    defImg: "../assets/per_area_img.svg",
    defTitulo: "introducción",
    defAreaTitulo: "Qué es el Area ?",
    defArea: "Area es la medida bidimensional de una superficie. Es entendida como el espacio o región que cubre la figura geométrica. Para representar el área se utilizan unidades cuadradas, ejemplo, m2 o cm2.",
    defPerimetroTitulo: "Qué es el Perímetro ?",
    defPerimetro: "Perímetro corresponde a la longitud total de los lados de una figura, a la longitud de su contorno. Para calcularlo se requieren unidades de una sola dimensión.",
    
    defNotaTitulo: "Nota :",
    defNota: "Para determinar las áreas y perímetros de figuras, las fórmulas dependerán del tipo de figura y de las medidas correspondientes a cada una",
    defGuiaTitulo: "Forma de uso :",
    defGuia: "Con el boton de <span>Figuras</span> seleccionas figuras geométricas basicas, mostrará formulas y calculadoras para áreas y perímetros.<br>Con el boton <span>Menú</span> regrezaras al menú principal."
};
const trianguloObj = {
    id: "triángulo",
    titleFig: "Triángulo",
    imgFig: "../assets/triangulo_equilatero.png",

    titleArea: "Area del Triángulo",
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
    btn2ClA: "btnClearATri",
    funcionArea: "aTriangle",
    clearWindowA: "clearAFig",

    titlePerimetro: "Perímetro del Triángulo",
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
    btn2ClP: "btnClearPTri",
    funcionPerimetro: "pTriangle",
    clearWindowP: "clearPFig"
};
const cuadradoObj = {
    id: "cuadrado",
    titleFig: "Cuadrado",
    imgFig: "../assets/cuadrado.png",

    titleArea: "Area del Cuadrado",
    inputArea: [
        {
            inputLabel: "Medida lado",
            inputId: "winSqrArea"
        },
    ],
    resultClA: "resultASqr",
    btnClA: "btnResultASqr",
    btn2ClA: "btnClearASqr",
    funcionArea: "aSquare",
    clearWindowA: "clearAFig",

    titlePerimetro: "Perímetro del Cuadrado",
    inputPerimetro: [
        {
            inputLabel: "Medida lado",
            inputId: "winSqrPerimeter"
        }
    ],
    resultClP: "resultPSqr",
    btnClP: "btnResultPSqr",
    btn2ClP: "btnClearPSqr",
    funcionPerimetro: "pSquare",
    clearWindowP: "clearPFig"
};
const rectanguloObj = {
    id: "rectángulo",
    titleFig: "Rectángulo",
    imgFig: "../assets/rectangulo.png",

    titleArea: "Area del Rectángulo",
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
    btn2ClA: "btnClearARec",
    funcionArea: "aRectangulo",
    clearWindowA: "clearAFig",

    titlePerimetro: "Perímetro del Rectángulo",
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
    btn2ClP: "btnClearPRec",
    funcionPerimetro: "pRectangulo",
    clearWindowP: "clearPFig"
};
const paralelogramoObj = {
    id: "paralelogramo",
    titleFig: "Paralelogramo",
    imgFig: "../assets/paralelogramo.png",

    titleArea: "Area del Paralelogramo",
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
    btn2ClA: "btnClearAPar",
    funcionArea: "aParalelogramo",
    clearWindowA: "clearAFig",

    titlePerimetro: "Perímetro del Paralelogramo",
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
    btn2ClP: "btnClearPPar",
    funcionPerimetro: "pParalelogramo",
    clearWindowP: "clearPFig"
};
const trapecioObj = {
    id: "trapecio",
    titleFig: "Trapecio",
    imgFig: "../assets/trapecio.png",

    titleArea: "Area del Trapecio",
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
    btn2ClA: "btnClearATrapecio",
    funcionArea: "aTrapecio",
    clearWindowA: "clearAFig",

    titlePerimetro: "Perímetro del Trapecio",
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
    btn2ClP: "btnClearPTrap",
    funcionPerimetro: "pTrapecio",
    clearWindowP: "clearPFig",
};
const romboObj = {
    id: "rombo",
    titleFig: "Rombo",
    imgFig: "../assets/rombo.png",

    titleArea: "Area del Rombo",
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
    btn2ClA: "btnClearARombo",
    funcionArea: "aRombo",
    clearWindowA: "clearAFig",

    titlePerimetro: "Perímetro del Rombo",
    inputPerimetro: [
        {
            inputLabel: "Medida L",
            inputId: "winPRomL1"
        }
    ],
    resultClP: "resultPRombo",
    btnClP: "btnResultPRombo",
    btn2ClP: "btnClearPRombo",
    funcionPerimetro: "pRombo",
    clearWindowP: "clearPFig"
};
const pentagonoObj = {
    id: "pentágono",
    titleFig: "Pentágono",
    imgFig: "../assets/pentagono.png",

    titleArea: "Area del pentágono",
    inputArea: [
        {
            inputLabel: "Medida perímetro",
            inputId: "winAPPent"
        },
        {
            inputLabel: "Medida apotema",
            inputId: "winAApotPent"
        }
    ],
    resultClA: "resultAPentagono",
    btnClA: "btnResultAPentagono",
    btn2ClA: "btnClearAPentagono",
    funcionArea: "aPentagono",
    clearWindowA: "clearAFig",

    titlePerimetro: "Perímetro del Pentágono",
    inputPerimetro: [
        {
            inputLabel: "Medida lado",
            inputId: "winPPenL"
        }
    ],
    resultClP: "resultPPentagono",
    btnClP: "btnResultPPentagono",
    btn2ClP: "btnClearPPentagono",
    funcionPerimetro: "pPentagono",
    clearWindowP: "clearPFig"
};
const hexagonoObj = {
    id: "hexágono",
    titleFig: "Hexágono",
    imgFig: "../assets/hexagono.png",

    titleArea: "Area del Hexágono",
    inputArea: [
        {
            inputLabel: "Medida perímetro",
            inputId: "winAPHex"
        },
        {
            inputLabel: "Medida apotema",
            inputId: "winAApotHex"
        }
    ],
    resultClA: "resultAHexagono",
    btnClA: "btnResultAHex",
    btn2ClA: "btnClearAHex",
    funcionArea: "aHexagono",
    clearWindowA: "clearAFig",

    titlePerimetro: "Perímetro del Hexágono",
    inputPerimetro: [
        {
            inputLabel: "Medida lado",
            inputId: "winPHexL"
        }
    ],
    resultClP: "resultPHex",
    btnClP: "btnResultPHex",
    btn2ClP: "btnClearPHex",
    funcionPerimetro: "pHexagono",
    clearWindowP: "clearPFig"
};
const circuloObj = {
    id: "círculo",
    titleFig: "Círculo",
    imgFig: "../assets/circulo.png",

    titleArea: "Area del Círculo",
    inputArea: [
        {
            inputLabel: "Medida radio",
            inputId: "winCircArea"
        }
    ],
    resultClA: "resultACirc",
    btnClA: "btnResultACirc",
    btn2ClA: "btnClearACirc",
    funcionArea: "aCirculo",
    clearWindowA: "clearAFig",

    titlePerimetro: "Circunferencia",
    inputPerimetro: [
        {
            inputLabel: "Medida radio",
            inputId: "winCircunferencia"
        }
    ],
    resultClP: "resultCircunferencia",
    btnClP: "btnResultCircunferencia",
    btn2ClP: "btnClearCircunferencia",
    funcionPerimetro: "circunferencia",
    clearWindowP: "clearPFig"
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


