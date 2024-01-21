
// --- Funciones ---
function backGroundOn(){
    winResPromedio.classList.add("greyBG");
    winResMediana.classList.add("greyBG");
    winResModa.classList.add("greyBG"); 
}
function backGroundOff(){
    winResPromedio.classList.remove("greyBG");
    winResMediana.classList.remove("greyBG");
    winResModa.classList.remove("greyBG"); 
}
function btnResultDesable(){
    btnResult.classList.remove("btnR")
    btnResult.disabled = true;
}
function btnResultEnable(){
    btnResult.classList.add("btnR")
    btnResult.disabled = false;  
}
function clearWindow(){
    textA.value = "";
    winResPromedio.innerText = "";
    winResMediana.innerText = "";
    winResModa.innerText = "";
    btnResultEnable();
    textA.disabled = false;
    backGroundOn();
}


// --- funcion de condicionales y antes de rsultado ---
function resultWindow(){
    // --- Expresion regular solo numeros puntos y comas son aceptados ---
    var regex = /^[\d.,]+$/;
    if(regex.test(textA.value)){
        // --- Obteniendo datos de ventana de entrada como un solo strig ---
        const infoWindow = textA.value;
        // --- Separando cada valor del string y poniendolo en un array ---
        const arrayString = infoWindow.split(",");
        // --- Creando un nuevo array cambiando los strings a numbers ---
        const arrayNumber = [];
        arrayString.forEach(element => {
            arrayNumber.push(Number(element));
        });
        promedio(arrayNumber);
        mediana(arrayNumber);
        moda(arrayNumber);
        btnResultDesable();
        textA.disabled = true;
        backGroundOff();
    }else{
        textA.value = "Solo valores enteros y decimales separados por comas son permitidos";
        textA.disabled = true;
        btnResultDesable();
    };
};
// --- funciones de operaciones ---
function promedio(arrayNumber){
    const suma = arrayNumber.reduce((add,num) => add+=num);
    const cantidad = arrayNumber.length;
    const resPromedio = suma / cantidad;
    winResPromedio.innerText = resPromedio.toFixed(1);
}
function mediana(arrayNumber){
    const orden = arrayNumber.sort((a,b) => a-b);
    const cantidad = arrayNumber.length;
    let resMediana;
    if(cantidad % 2 == 0){
        const mitadP = cantidad / 2;
        resMediana = (orden[mitadP - 1] + orden[mitadP]) / 2;
    }else{
        const mitadI = (cantidad - 1) / 2;
        resMediana = orden[mitadI];
    }
    winResMediana.innerText = resMediana.toFixed(1);
}
function moda(arrayNumber){
    const orden = arrayNumber.sort((a,b) => a-b);
    const repetidos = orden.reduce((a,i) => (a[i] ? a[i] +=1 : a[i] = 1, a),{})
    // --- Orden de valores en objeto de mayor a menor a un array---
    let arrayOrdenado = Object.entries(repetidos);
    arrayOrdenado.sort((a, b) => b[1] - a[1]);
    // --- Creacion de objeto "modaNumbers" con solo el numero(s) que se repite(n) mas veces ---
    const arrayFiltrado = [];
    let valorTemp = 0;
    arrayOrdenado.forEach(index => {
        if(index[1] >= valorTemp){
            arrayFiltrado.push([index[0],index[1]])
            valorTemp = index[1]
        }
    });
    arrayFiltrado.sort((a,b)=>a[0]-b[0]);
    // --- Impresion de resultado en ventana ---
    arrayFiltrado.forEach((v, i) => {
        if(i < arrayFiltrado.length - 1){
            winResModa.innerHTML += v[0] + ", ";
        }else{
            winResModa.innerHTML += v[0];
        }
    })
}


// === Variables y Constantes ===
// --- Ventana de entrada de datos ---
const textA = document.querySelector("#winTextA");
// --- Ventanas de resultados ---
const winResPromedio = document.querySelector(".winResPromedio");
const winResMediana = document.querySelector(".winResMediana"); 
const winResModa = document.querySelector(".winResModa"); 
// --- botones de borrado y resultado ---
const btnClear = document.querySelector(".btnClear");
const btnResult = document.querySelector(".btnResult");
// --- Eventos de botones ---
btnClear.addEventListener("click", clearWindow);
btnResult.addEventListener("click", resultWindow);

clearWindow();
