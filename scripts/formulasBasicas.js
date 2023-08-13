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
        resultPSqr.innerHTML = "Lados deben de ser mayores a 0";
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
        resultASqr.innerHTML = "Lados deben de ser mayores a 0";
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
        resultPTri.innerHTML = "Lados deben de ser mayores a 0";
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
        resultATri.innerHTML = "Lados deben de ser mayores a 0";
    }
}

// ------------- altura de triangulo isosceles -------------

const winHTriSide1 = document.querySelector("#winHTriSide1");
const winHTriSide2 = document.querySelector("#winHTriSide2");
const winHTriBase = document.querySelector("#winHTriBase");
const resultHTri = document.querySelector(".resultHTri");
const btnResultHTri = document.querySelector(".btnResultHTri");

btnResultHTri.addEventListener("click", hTriangle);

function hTriangle(){
    if(winHTriSide1.value > 0 && winHTriSide2.value > 0 && winHTriBase.value > 0 && winHTriSide1.value === winHTriSide2.value){
        const lado1 = Number(winHTriSide1.value);
        const lado2 = Number(winHTriSide2.value);
        const base = Number(winHTriBase.value);

        const result = Math.sqrt(Math.pow(lado1,2) - Math.pow( (base/2), 2) );
        resultHTri.innerHTML = `Altura = ${result.toFixed(1)} cm`;
    }
    else{
        resultHTri.innerHTML = "Lados deben de ser mayores a 0 <br>lado1 y lado2 iguales";
    }
}

// ------------- altura de triangulo escaleno -------------
const winHTriSSide1 = document.querySelector("#winHTriSSide1");
const winHTriSSide2 = document.querySelector("#winHTriSSide2");
const winHTriSBase = document.querySelector("#winHTriSBase");
const resultHTriS = document.querySelector(".resultHTriS");
const btnResultHTriS = document.querySelector(".btnResultHTriS");

btnResultHTriS.addEventListener("click", hTriangleS);

function hTriangleS(){
    if(winHTriSSide1.value > 0 && winHTriSSide2.value > 0 && winHTriSBase.value > 0){
        const lado1 = Number(winHTriSSide1.value);
        const lado2 = Number(winHTriSSide2.value);
        const base = Number(winHTriSBase.value);

        const semiPerimeter = (lado1 + lado2 + base) / 2;
        const desestruc = [lado1, lado2, base];
        const [a,b,c] = desestruc.sort((a,b) => b - a);
        const process =  (2/a) * Math.sqrt((semiPerimeter * (semiPerimeter - a) * (semiPerimeter - b) * (semiPerimeter - c))); 
        const result =  process;
        resultHTriS.innerHTML = `Altura = ${result.toFixed(1)} cm`;
    }
    else{
        resultHTriS.innerHTML = "Lados deben de ser mayores a 0";
    }
}

// ----------------- Circunferencia -----------------
const winCircunferencia = document.querySelector("#winCircunferencia");
const resultCircunferencia = document.querySelector(".resultCircunferencia");
const btnResultCircunferencia = document.querySelector(".btnResultCircunferencia");

btnResultCircunferencia.addEventListener("click", circunferencia);

function circunferencia(){
    if(winCircunferencia.value > 0){
        const radio = Number(winCircunferencia.value);
        const PI = Math.PI.toFixed(2);
        const result = PI * Math.pow(radio, 2);
        resultCircunferencia.innerHTML = `Circunferencia = ${result} cm`;
    }
    else{
        resultCircunferencia.innerHTML = "Radio debe ser mayor a 0";
    }
}

// ----------------- AreaCirculo -----------------
const winCircArea = document.querySelector("#winCircArea");
const resultACirc = document.querySelector(".resultACirc");
const btnResultACirc = document.querySelector(".btnResultACirc");

btnResultACirc.addEventListener("click", aCirculo);

function aCirculo(){
    if(winCircArea.value > 0){
        const radio = Number(winCircArea.value);
        const PI = Math.PI.toFixed(2)
        const result = (radio * 2) * PI;
        resultACirc.innerHTML = `Area = ${result} cm2`;
    }
    else{
        resultACirc.innerHTML = "Radio debe de ser mayor a 0";
    }
}
