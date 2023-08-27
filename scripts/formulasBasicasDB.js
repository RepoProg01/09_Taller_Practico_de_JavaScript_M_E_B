const formulasArray = [];




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
    btnClP: "btnResultPTri"
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


formulasArray.push(trianguloObj);
formulasArray.push(cuadradoObj);
formulasArray.push(rectanguloObj);
formulasArray.push(paralelogramoObj);
formulasArray.push(trapecioObj);

