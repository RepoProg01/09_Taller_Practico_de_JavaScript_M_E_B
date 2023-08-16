const listIndex = document.querySelector(".listIndex");
const figuras = document.querySelector(".figuras");
figuras.addEventListener("click", menu);

function menu(){
    listIndex.classList.toggle("listIndexShow");
}

 const seleccion = document.querySelectorAll(".seleccion");
 seleccion.forEach(element => {
    element.addEventListener("click", selectF);
 });

 function selectF(){
    listIndex.classList.remove("listIndexShow");
 }


// =================================== containerFig ===================================

// #################################### triangulo ####################################
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

// #################################### cuadrado ####################################
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

// #################################### Rectangulo ####################################
// ----------------- AreaRectangulo -----------------
const winRecABase = document.querySelector("#winRecABase");
const winRecAAltura = document.querySelector("#winRecAAltura");

const resultARec = document.querySelector(".resultARec");
const btnResultARec = document.querySelector(".btnResultARec");
btnResultARec.addEventListener("click", aRectangulo);

function aRectangulo(){
    if(winRecABase.value > 0 && winRecAAltura.value > 0){
        const base = Number(winRecABase.value);
        const altura = Number(winRecAAltura.value);
        const result = base * altura;
        resultARec.innerHTML = `Area = ${result} cm2`;
    }
    else{
        resultARec.innerHTML = "Lados deben de ser mayores a 0";
    }
}
// ----------------- PerimeterRectangulo -----------------
const winRecPBase = document.querySelector("#winRecPBase");
const winRecPLado = document.querySelector("#winRecPLado");

const resultPRec = document.querySelector(".resultPRec");
const btnResultPRec = document.querySelector(".btnResultPRec");
btnResultPRec.addEventListener("click", pRectangulo);

function pRectangulo(){
    if(winRecPBase.value > 0 && winRecPLado.value > 0) {
        const base = Number(winRecPBase.value);
        const lado = Number(winRecPLado.value);
        const result = (base * 2) + (lado * 2);
        resultPRec.innerHTML = `Perimetro = ${result} cm`;
    }
    else{
        resultPRec.innerHTML = "Lados deben de ser mayores a 0";
    }
}

// #################################### Paralelogramo ####################################
// ----------------- AreaParalelogramo -----------------
const winParABase = document.querySelector("#winParABase");
const winParAltura = document.querySelector("#winParAltura");

const resultAPar = document.querySelector(".resultAPar");
const btnResultAPar = document.querySelector(".btnResultAPar");
btnResultAPar.addEventListener("click", aParalelogramo);

function aParalelogramo(){
    if(winParABase.value > 0 && winParAltura.value > 0){
        const base = Number(winParABase.value);
        const altura = Number(winParAltura.value);
        const result = base * altura;
        resultAPar.innerHTML = `Area = ${result} cm2`;
    }
    else{
        resultAPar.innerHTML = "Lados deben de ser mayores a 0";
    }
}
// ----------------- PerimeterParalelogramo -----------------
const winParPBase = document.querySelector("#winParPBase");
const winParPAltura = document.querySelector("#winParPAltura");

const resultPPar = document.querySelector(".resultPPar");
const btnResultPPar = document.querySelector(".btnResultPPar");
btnResultPPar.addEventListener("click", pParalelogramo);

function pParalelogramo(){
    if(winParPBase.value > 0 && winParPAltura.value > 0) {
        const base = Number(winParPBase.value);
        const lado = Number(winParPAltura.value);
        const result = 2 * (base + lado);
        resultPPar.innerHTML = `Perimetro = ${result} cm`;
    }
    else{
        resultPPar.innerHTML = "Lados deben de ser mayores a 0";
    }
}

// #################################### Trapecio ####################################
// ----------------- AreaTrapecio -----------------
const winTrapAB = document.querySelector("#winTrapAB");
const winTrapAb = document.querySelector("#winTrapAb");
const winTrapAa = document.querySelector("#winTrapAa");

const resultATrapecio = document.querySelector(".resultATrapecio");
const btnResultATrapecio = document.querySelector(".btnResultATrapecio");
btnResultATrapecio.addEventListener("click", aTrapecio);

function aTrapecio(){
    if(winTrapAB.value > 0 && winTrapAb.value > 0 && winTrapAa.value > 0){
        const baseM = Number(winTrapAB.value);
        const basem = Number(winTrapAb.value);
        const altura = Number(winTrapAa.value);
        const result = ((baseM + basem) /2) * altura;
        resultATrapecio.innerHTML = `Area = ${result} cm2`;
    }
    else{
        resultATrapecio.innerHTML = "Lados deben de ser mayores a 0";
    }
}
// ----------------- PerimeterTrapecio -----------------
const winL1PTrap = document.querySelector("#winL1PTrap");
const winL2PTrap = document.querySelector("#winL2PTrap");
const winL3PTrap = document.querySelector("#winL3PTrap");
const winL4PTrap = document.querySelector("#winL4PTrap");

const resultPTrap = document.querySelector(".resultPTrap");
const btnResultPTrap = document.querySelector(".btnResultPTrap");
btnResultPTrap.addEventListener("click", pTrapecio);

function pTrapecio(){
    if(winL1PTrap.value > 0 && winL2PTrap.value > 0 && winL3PTrap.value > 0 && winL4PTrap.value > 0) {
        const l1 = Number(winL1PTrap.value);
        const l2 = Number(winL2PTrap.value);
        const l3 = Number(winL3PTrap.value);
        const l4 = Number(winL4PTrap.value);
        const result = l1 + l2 + l3 + l4;
        resultPTrap.innerHTML = `Perimetro = ${result} cm`;
    }
    else{
        resultPTrap.innerHTML = "Lados deben de ser mayores a 0";
    }
}

// #################################### rombo ####################################
// ----------------- AreaRombo -----------------
const winD1A = document.querySelector("#winD1A");
const winD2A = document.querySelector("#winD2A");
const resultARombo = document.querySelector(".resultARombo");
const btnResultARombo = document.querySelector(".btnResultARombo");
btnResultARombo.addEventListener("click", arombo);

function arombo(){
    if(winD1A.value > 0 && winD2A.value > 0){
        const d1 = Number(winD1A.value);
        const d2 = Number(winD2A.value);
        const result = (d1 * d2) / 2;
        resultARombo.innerHTML = `Area = ${result} cm2`;
    }
    else{
        resultARombo.innerHTML = "Lados deben de ser mayores a 0";
    }
}
// ----------------- PerimeterRombo -----------------
const winPRomL1 = document.querySelector("#winPRomL1");
const winPRomL2 = document.querySelector("#winPRomL2");
const winPRomL3 = document.querySelector("#winPRomL3");
const winPRomL4 = document.querySelector("#winPRomL4");

const resultPRombo = document.querySelector(".resultPRombo");
const btnResultPRombo = document.querySelector(".btnResultPRombo");
btnResultPRombo.addEventListener("click", pRombo);

function pRombo(){
    if(winPRomL1.value > 0 && winPRomL2.value > 0 && winPRomL3.value > 0 && winPRomL4.value > 0) {
        const l1 = Number(winPRomL1.value);
        const l2 = Number(winPRomL2.value);
        const l3 = Number(winPRomL3.value);
        const l4 = Number(winPRomL4.value);
        const result = l1 + l2 + l3 + l4;
        resultPRombo.innerHTML = `Perimetro = ${result} cm`;
    }
    else{
        resultPRombo.innerHTML = "Lados deben de ser mayores a 0";
    }
}

// #################################### Pentagono ####################################
// ----------------- AreaPentagono -----------------
const winAPPent = document.querySelector("#winAPPent");
const winAApotPent = document.querySelector("#winAApotPent");

const resultAPentagono = document.querySelector(".resultAPentagono");
const btnResultAPentagono = document.querySelector(".btnResultAPentagono");
btnResultAPentagono.addEventListener("click", aPentagono);

function aPentagono(){
    if(winAPPent.value > 0 && winAApotPent.value > 0){
        const perim = Number(winAPPent.value);
        const apotem = Number(winAApotPent.value);
        const result = (perim * apotem) / 2;
        resultAPentagono.innerHTML = `Area = ${result} cm2`;
    }
    else{
        resultAPentagono.innerHTML = "Lados deben de ser mayores a 0";
    }
}
// ----------------- PerimeterPentagono -----------------
const winPPenL = document.querySelector("#winPPenL");

const resultPPentagono = document.querySelector(".resultPPentagono");
const btnResultPPentagono = document.querySelector(".btnResultPPentagono");
btnResultPPentagono.addEventListener("click", pPentagono);

function pPentagono(){
    if(winPPenL.value > 0) {
        const lado = Number(winPPenL.value);
        const result = 5 * lado;
        resultPPentagono.innerHTML = `Perimetro = ${result} cm`;
    }
    else{
        resultPPentagono.innerHTML = "Lados deben de ser mayores a 0";
    }
}

// #################################### Hexagono ####################################
// ----------------- AreaHexagono -----------------
const winAPHex = document.querySelector("#winAPHex");
const winAApotHex = document.querySelector("#winAApotHex");

const resultAHexagono = document.querySelector(".resultAHexagono");
const btnResultAHex = document.querySelector(".btnResultAHex");
btnResultAHex.addEventListener("click", aHexagono);

function aHexagono(){
    if(winAPHex.value > 0 && winAApotHex.value > 0){
        const perim = Number(winAPHex.value);
        const apotem = Number(winAApotHex.value);
        const result = (perim * apotem) / 2;
        resultAHexagono.innerHTML = `Area = ${result} cm2`;
    }
    else{
        resultAHexagono.innerHTML = "Lados deben de ser mayores a 0";
    }
}
// ----------------- PerimeterHexagono -----------------
const winPHexL = document.querySelector("#winPHexL");

const resultPHex = document.querySelector(".resultPHex");
const btnResultPHex = document.querySelector(".btnResultPHex");
btnResultPHex.addEventListener("click", pHexagono);

function pHexagono(){
    if(winPHexL.value > 0) {
        const lado = Number(winPHexL.value);
        const result = 6 * lado;
        resultPHex.innerHTML = `Perimetro = ${result} cm`;
    }
    else{
        resultPHex.innerHTML = "Lados deben de ser mayores a 0";
    }
}


// #################################### Circunferencia ####################################
// ----------------- AreaCirculo -----------------
const winCircArea = document.querySelector("#winCircArea");
const resultACirc = document.querySelector(".resultACirc");
const btnResultACirc = document.querySelector(".btnResultACirc");

btnResultACirc.addEventListener("click", aCirculo);

function aCirculo(){
    if(winCircArea.value > 0){
        const radio = Number(winCircArea.value);
        const PI = Math.PI.toFixed(2)
        const result = Math.pow(radio, 2) * PI;
        resultACirc.innerHTML = `Area = ${result} cm2`;
    }
    else{
        resultACirc.innerHTML = "Radio debe de ser mayor a 0";
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
        const result = PI * (radio * 2);
        resultCircunferencia.innerHTML = `Circunferencia = ${result} cm`;
    }
    else{
        resultCircunferencia.innerHTML = "Radio debe ser mayor a 0";
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
// ------------------------ Alturas --------------------------
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

