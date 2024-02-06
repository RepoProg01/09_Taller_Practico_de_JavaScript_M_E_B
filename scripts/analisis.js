
function buscar(nomEmpleado){
    return SALARIES.find(nom => nom["name"] == nomEmpleado);
};
function medianaPersona(nomPersona){
    // -- bucar persona con funcion buscar usando find --
    const trab = buscar(nomPersona)["works"];
    // -- filtrando usando map para un array solo de salarios --
    const sueldos = trab.map((sueld) => sueld["salary"]);
    // -- ordenar el array de menor a mayor ---
    const ordenada =sueldos.sort((a,b) => a - b);
    // -- constantes de cantidades --
    const tam = ordenada.length;
    const parA = (tam/2)-1;
    const parB = (tam/2);
    // -- condicional logica resultado retorno --
    if(tam % 2 == 0){
        const resultadoPar = ((ordenada[parA]) + (ordenada[parB])) / 2;
        return resultadoPar;
    }else{
        const resultadoImpar = ordenada[parB];
        return resultadoImpar;
    }
}
// -- impresion --
console.log(medianaPersona("Armando"));
