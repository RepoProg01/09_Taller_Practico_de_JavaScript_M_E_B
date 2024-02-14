// -- constantes ---
const infoName = document.querySelector(".nombreCl");
const infoId = document.querySelector(".identificacionCl");
const infoMs = document.querySelector(".medSalCl");
const infoMincr = document.querySelector(".medIncPCl");
const infoSalAc = document.querySelector(".salActCl");
const menssage = document.querySelector(".mensaje");
const infoProySueld = document.querySelector(".proySueld");
const btn = document.querySelector(".btn");
const btnC = document.querySelector(".btnC");
// -- listeners --
btn.addEventListener("click", logica);
btnC.addEventListener("click", clear);
// -- funcion busqueda --
function logica(){
    const namVal = infoName.value;
    if(!namVal == ""){
        const name = primeraMayusc(namVal);
        if(buscarEmpleado(name)){
            console.log(buscarEmpleado(name))
            obtId(name);
            medianaPersona(name);
            proyeccionPersona(name);
            sueldoAct(name);
            infoName.disabled = true;
            btn.disabled = true;
            btn.classList.remove("btnAtrib");
            menssage.innerHTML = `El empleado ${name} ha sido encontrado en la base de datos`;
        }else{
            menssage.innerHTML = `${name} no se encuentra en la base de datos`;
        }
    }else{
        menssage.innerHTML = "Inserte el nombre del empleado que desea buscar";
    }

}
// -- funciones de logica --
function obtId(nomEmpleado){
    const resId = buscarId(nomEmpleado);
    infoId.innerHTML = resId;
}
function medianaPersona(nomEmpleado){
    // -- filtrando usando funcion regresa un array solo con cantidades de salary --
    const sueldos = buscarSueldos(nomEmpleado);
    // -- operacion mediana retorna la mediana en numero ---
    const medSalario = mediana(sueldos);
    // -- agregando 2 posiciones despues del punto --
    const resMedFixed = Number(medSalario);
    // -- agregando espacios y comas --
    const resMedFormat = formato(resMedFixed.toFixed(2));
    // --- impresion --
    infoMs.innerHTML = `$ ${resMedFormat}`;
}
function proyeccionPersona(nomEmpleado){
    // -- filtrando usando funcion regresa un array solo con cantidades de salario --
    const salarios = buscarSueldos(nomEmpleado);
    const arrayPorcIncrem = [];
    for(let i=1; i<salarios.length; i++){
        const incr = salarios[i] - salarios[i-1];
        const porc = incr * 100 / salarios[i-1];
        arrayPorcIncrem.push(Number(porc));
    }
    const medPorc = mediana(arrayPorcIncrem);
    const ultimSal = buscarSueldoAct(nomEmpleado);
    const incrCant = (ultimSal * medPorc) / 100 
    const proyecion = ultimSal + incrCant;

    infoMincr.innerHTML = `${formato(medPorc.toFixed(2))} %`;
    infoProySueld.innerHTML =`$ ${formato(proyecion.toFixed(2))}`;
}
function sueldoAct(nomEmpleado){
    const sueldAct = buscarSueldoAct(nomEmpleado);
    const centecimas = Number(sueldAct).toFixed(2);
    infoSalAc.innerHTML = `$ ${formato(centecimas)}`;
};
function clear(){
    infoName.disabled = false;
    infoName.value = "";
    infoId.innerHTML = "";
    infoMs.innerHTML = "";
    infoMincr.innerHTML = "";
    infoSalAc.innerHTML = "";
    menssage.innerHTML = "";
    infoProySueld.innerHTML = "";
    btn.disabled = false;
    btn.classList.add("btnAtrib");
}
// -------------------------------------------------------
// -- funciones analisis empresarial --
// -------------------------------------------------------
function medianaEmpresa(empresa, year){
    const emp = empresas();
    if(!emp[empresa]){
        console.log("Empresa no existe");
    }
    else if(!emp[empresa][year]){
        console.log("year no encontrado");
    }
    else{
        console.log(mediana(emp[empresa][year]));
    }
}
function proyeccionEmpresaMed(empresa){
    const arrayPorc = [];
    const medias = proyeccEmprMed(empresa);
    for(let i=1; i<medias.length; i++){
        const incre = medias[i] - medias[i-1];
        const porc = incre * 100 / medias[i-1];
        arrayPorc.push(porc);
    }
    const actual = medias[medias.length-1];
    const incremento = mediana(arrayPorc) * actual / 100;
    const proyeccion = actual + incremento;
    console.log(proyeccion);
}

