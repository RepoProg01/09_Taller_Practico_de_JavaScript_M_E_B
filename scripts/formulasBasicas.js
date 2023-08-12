// ################## containerFig ##################
// ----------------- PerimeterSquare -----------------
const winSqrPerimeter = document.querySelector("#winSqrPerimeter");
const resultPSqr = document.querySelector(".resultPSqr");
const btnResultPSqr = document.querySelector(".btnResultPSqr");

btnResultPSqr.addEventListener("click", pSquare);

function pSquare(){
    if(winSqrPerimeter.value > 0){
        const lado = Number(winSqrPerimeter.value);
        const result = lado * 4;
        resultPSqr.innerHTML = `Perimetro = ${result} cm`;
    }
    else{
        resultPSqr.innerHTML = "El numero debe de ser mayor a 0";
    }
}

// ----------------- AreaSquare -----------------
const winSqrArea = document.querySelector("#winSqrArea");
const resultASqr = document.querySelector(".resultASqr");
const btnResultASqr = document.querySelector(".btnResultASqr");

btnResultASqr.addEventListener("click", aSquare);

function aSquare(){
    if(winSqrArea.value > 0){
        const lado = Number(winSqrArea.value);
        const result = lado * lado;
        resultASqr.innerHTML = `Area = ${result} cm2`;
    }
    else{
        resultASqr.innerHTML = "El numero debe de ser mayor a 0";
    }
}



// ------------------triangulo-------------------
// ------------- PerimeterTriangle -------------

const winTriSide1 = document.querySelector("#winTriSide1");
const winTriSide2 = document.querySelector("#winTriSide2");
const winTriBase = document.querySelector("#winTriBase");
const resultPTri = document.querySelector(".resultPTri");
const btnResultPTri = document.querySelector(".btnResultPTri");

btnResultPTri.addEventListener("click", pTriangle);

function pTriangle(){
    if(winTriSide1.value > 0 && winTriSide2.value > 0 && winTriBase.value > 0 ){
        const lado1 = Number(winTriSide1.value);
        const lado2 = Number(winTriSide2.value);
        const base = Number(winTriBase.value);

        const result = lado1 + lado2 + base;
        resultPTri.innerHTML = `Perimetro = ${result} cm`;
    }
    else{
        resultPTri.innerHTML = "El numero debe de ser mayor a 0";
    }
}

// ------------- AreaTriangle -------------
const winTriBaseA = document.querySelector("#winTriBaseA");
const winTriHeight = document.querySelector("#winTriHeight");
const resultATri = document.querySelector(".resultATri");
const btnResultATri = document.querySelector(".btnResultATri");

btnResultATri.addEventListener("click", aTriangle);

function aTriangle(){
    if(winTriBaseA.value > 0 && winTriHeight.value > 0){
        const base = Number(winTriBaseA.value);
        const height = Number(winTriHeight.value);

        const result = (base * height) / 2;
        resultATri.innerHTML = `Area = ${result} cm2`;
    }
    else{
        resultATri.innerHTML = "El numero debe de ser mayor a 0";
    }
}




// ----------------------------circulo-----------------------------------------
// Perimetro cicunferencia
console.group("circulo");
const pi = 3.1416;
let radio = 3;
let diametroO = radio * 2;

const circunferencia = diametroO * pi;
console.log(`El perimetro de la circunferencia es : ${circunferencia}`);

// Area del cicunferencia
const areaCirculo = pi * (radio ** 2);
console.log(`El area del circulo es : ${areaCirculo}`);

function circunferenciaAP(radio){
    const diametroI = radio ** 2;
    const radioAlCuadrado = Math.pow(radio, 2);

    return {
        circunferencia_ : diametroI * Math.PI.toFixed(4),
        area_circulo : Math.PI.toFixed(4) * radioAlCuadrado
    }
};
console.log(circunferenciaAP(3));
console.groupEnd("circulo");

// ----------------------------altura de triangulo isosceles-----------------------------------------
// h = a la raiz cuadrada de (lado1 al cuadrado  - base al cuadrado / 4)

console.group("isosceles");
function alturaTIso(lado1, lado2, base){
    if(lado1 === lado2 && base !== lado1 && lado2){
        const altura = Math.sqrt( (Math.pow(lado1,2)) - (Math.pow( (base/2), 2)) );
        return `La altura del triangulo isosceles es : ${altura.toFixed(1)}`;
    }else{
        console.warn("Los lados deben de ser iguales en medida y diferente a la base recuerda que es un triangulo isosceles");
    }
}
console.log(alturaTIso(6,6,4));
console.groupEnd("isoceles");

// ----------------------------altura de triangulo escaleno -----------------------------------------
console.group("escaleno");
function alturaEscaleno(side1, side2, side3){
    const semiPerimeter = (side1 + side2 + side3) / 2;
    const desestruc = [side1, side2, side3];
    const [a,b,c] = desestruc.sort((a,b) => b - a);
    const result = (2 / a) * Math.sqrt(semiPerimeter * (semiPerimeter - a) * (semiPerimeter - b) * (semiPerimeter - c));
    const info = {a,b,c, semiPerimeter};
    console.log(info);
    return `La altura del triangulo escaleno es : ${result.toFixed(1)}`;
}
console.log(alturaEscaleno(3,3.5,5));
console.groupEnd("escaleno");