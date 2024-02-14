// -- funcion de formato en salida de numeros con espacios y comas
const formato = (number) => {
    const exp = /(\d)(?=(\d{3})+(?!\d))/g;
    const rep = '$1,';
    let arr = number.toString().split('.');
    arr[0] = arr[0].replace(exp,rep);
    return arr[1] ? arr.join('.'): arr[0];
};
// -- funcion bucar empleado regresa un obj con info del empleado si existe --
function buscarEmpleado(nomEmpleado){
    return SALARIES.find(nom => nom["name"] == nomEmpleado);
};
function primeraMayusc(nomEmpleado){
    const firstLetter = nomEmpleado.charAt(0);
    const firstMay = firstLetter.toUpperCase();
    const complement = nomEmpleado.slice(1);
    const nomConMayus = firstMay + complement;
    return nomConMayus;
    // return SALARIES.find(nom => nom["name"] == nomEmpleado);
};
// -- bucar trabajos con funcion buscarTrabajos regresa un array de objetos --
function buscarTrabajos(nomEmpleado){
    return buscarEmpleado(nomEmpleado)["works"];
};
// -- filtrando usando funcion regresa un array solo con cantidades de salario --
function buscarSueldos(nomEmpleado){
    const trab = buscarTrabajos(nomEmpleado);
    return trab.map((sueld) => Number(sueld["salary"]));
};
function buscarSueldoAct(nomEmpleado){
    const trab = buscarTrabajos(nomEmpleado);
    const arrayTrab = trab.map((sueld) => Number(sueld["salary"]));
    arrayTrab.sort((a,b) => a-b);
    const ultimoSueldo = arrayTrab.length -1;
    return arrayTrab[ultimoSueldo];
};
function buscarId(nomEmpleado){
    const obj = buscarEmpleado(nomEmpleado);
    const id = obj["id"]
    return id;
};
// -- funcion mediana regresa un valor numerico
function mediana(arrayNum){
    arrayNum.sort((a,b) => a - b);
    // -- constantes de cantidades --
    const tam = arrayNum.length;
    // -- condicional logica resultado retorno --
    if(tam % 2 === 0){
        const parA = (tam/2) - 1;
        const parB = tam/2;
        const sumResPar = (arrayNum[parA]) + (arrayNum[parB]);
        const divResPar = sumResPar / 2;
        return divResPar;
    }else{
        const imp = tam - 1;
        const resImp = imp / 2;
        const resultadoImp = arrayNum[resImp];
        return resultadoImp;
    }
};
// -----------------------------------------------------
// -- analisis empresarial --
// -----------------------------------------------------
function empresas(){
    const analisisEmpresarial = {};
    SALARIES.forEach((empleado) => {
        empleado["works"].forEach((comp) => {
            if(!analisisEmpresarial[comp["company"]]){
                analisisEmpresarial[comp["company"]] = {};
            };
            if(!analisisEmpresarial[comp["company"]][comp["year"]]){
                analisisEmpresarial[comp["company"]][comp["year"]] = [];
            };
            analisisEmpresarial[comp["company"]][comp["year"]].push(comp["salary"]);
        })
    }) 
    return analisisEmpresarial;
};
function proyeccEmprMed(empresa){
    const arrayMed = [];
    const empre = empresas();
    if(!empre[empresa]){
        console.log("Empresa no existe");
    }else{
        for(year in empre[empresa]){
            arrayMed.push(mediana(empre[empresa][year]))    
        }
    }
    return arrayMed;
}
function proyeccEmprRan(){

}