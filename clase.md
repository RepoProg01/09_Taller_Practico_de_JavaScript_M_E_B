### Para corregir la descripción del commit (y otras cosas) se puede usar el comando:

> git commit --amend

### Ejamplo poniendo area y perimetro del triangulo en codigo y funcion

```javascript
// Perimetro triangulo
console.group("triangulo");
let lado1T = 6;
let lado2T = 6;
let baseT = 4;
let alturaT = 5.5;
const perimetroT = lado1T + lado2T + baseT;
console.log(`El perimetro del triangulo es ${perimetroT} cm`);

// Area del triangulo
const areaT = (baseT * alturaT) / 2;
console.log(`El area del triangulo es ${areaT} cm2`);

function perimetroTriangulo(lado1, lado2, base, altura){
    return {
        perimetro_triangulo : lado1 + lado2 + base,
        area_triangulo : (base * altura) / 2
    }
};
console.log(perimetroTriangulo(6,6,4,5.5));
console.groupEnd("triangulo");


// triangulo
//   El perimetro del triangulo es 16 cm
//   El area del triangulo es 11 cm2
//   { perimetro_triangulo: 16, area_triangulo: 11 }
```

## Teorema de Pitagoras
### El cuadrado de la Hipotenusa es igual a la suma de los cuadrados de los catetos

### Diferencia de Math.ceil y Math.round

* Math.round permite obtener el número entero resultado del redondeo de un número. Si el número es menor a .5, redondeará el número entero anterior y si es mayor, al número entero posterior.

* Math.ceil permite obtener el número entero mayor de un número.

### .toFixed(4)
Controla el numero de decimales que queremos mostrar

### Math.PI
3.1416............

### Math.pow(3,2)  elevacion
El primer valor es el numero que se quiere elevar a una potencia y el segundo valor es el exponente que se desea

### Math.sqrt() Raiz cuadrada

### Ejemplo de una funcion para obtener la altura de un triangulo isosceles
```javascript
function alturaTIso(lado1, lado2, base){
    if(lado1 === lado2 && base !== lado1 && lado2){
        const altura = Math.sqrt( (Math.pow(lado1,2)) - (Math.pow( (base/2), 2)) );
        return `La altura del triangulo isosceles es : ${altura.toFixed(1)}`;
    }else{
        console.warn("Los lados deben de ser iguales en medida y diferente a la base recuerda que es un triangulo isosceles");
    }
}
console.log(alturaTIso(6,6,4));

// La altura del triangulo isosceles es : 5.7
```

### Ejemplo de una funcion para obtener la altura de un triangulo escaleno

```javascript
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

// {
//     a: 5, 
//     b: 3.5, 
//     c: 3, 
//     semiPerimeter: 5.75
// }
// La altura del triangulo escaleno es : 2.1
```

### Funcion para convertir el formato de una catidad de dinero usando REGEX

>const miRegEx = /(?=(\d{3})+(?!\d))/g;

```javascript
const conversion = (amount) => {
    const number = amount.toFixed(2);
    const exp = /(\d)(?=(\d{3})+(?!\d))/g;
    const rep = '$1,';
    return `$ ${number.toString().replace(exp,rep)}`;
}

const num = 123454356.7655
conversion(num);

// $ 123,454,356.76
```

En esta expresión regular se hace un positive lookahead (?=), buscando uno o varios (+) grupos de 3 dígitos ((\d{3})+), si los hay devuelve match junto con los valores agrupados en 3. Luego, se realiza un negative lookahead ((?!)) para descartar cualquier dígito que no sea agrupado por el primer grupo de captura (en este caso 1 o 2 dígitos). Puedes leer más sobre lookahead en Regex Lookahead.

Usaremos el método replace del objeto String, el cual acepta una expresión regular (la cual ya tenemos) y un parámetro de tipo String con el siguiente formato:

>$n ó $nn Donde n o nn son dígitos decimales positivos menores a 100, inserta la subcadena emparejada de orden n del paréntesis, proporcionado por el primer argumento del objeto RegExp.

Así, nuestro parámetro será el siguiente:

>$1,

Donde $1 representa el primer argumento: nuestra expresión regular, y , es el símbolo de separación de miles que usaremos para este caso.

Por último, debemos tomar la decisión de si utilizamos siempre este método para sustituir el método toLocaleString() o podemos combinar ambos.

Supongamos que vamos a usar siempre este método para cualquier valor numérico válido:

```javascript
const numero = 123.456789;
const numero2 = 1234.56789;
const numero3 = 123456.789;
const numero4 = 1234567.89;

const formatoMexico = (number) => {
  const exp = /(\d)(?=(\d{3})+(?!\d))/g;
  const rep = '$1,';
  return number.toString().replace(exp,rep);
}

console.log(formatoMexico(numero));  // 123.456,789  <= NO VALIDO
console.log(formatoMexico(numero2)); // 1,234.56,789 <= NO VALIDO
console.log(formatoMexico(numero3)); // 123,456.789
console.log(formatoMexico(numero4)); // 1,234,567.89
```
Claramente tenemos un grave problema, ya que hay resultados no válidos.

El problema está en que el reemplazo se realiza sin tomar en cuenta que las posiciones decimales no deberían ser parte del reemplazo.

Para solucionar este problema tenemos algunas opciones, y como dije anteriormente: para gustos, los colores.

Como un número en Javascript sólo puede contener un carácter . o ninguno, usaremos esto para aplicar nuestra función sólo sobre la parte entera del número.

Vamos a separar la parte entera de la parte decimal, aplicamos el formato a la parte entera y luego concatenaremos nuevamente todo en un String.

```javascript
const numero = 123;
const numero2 = 1234;
const numero3 = 123.456789;
const numero4 = 1234.56789;
const numero5 = 123456.789;
const numero6 = 1234567.89;

const formatoMexico = (number) => {
  const exp = /(\d)(?=(\d{3})+(?!\d))/g;
  const rep = '$1,';
  let arr = number.toString().split('.');
  arr[0] = arr[0].replace(exp,rep);
  return arr[1] ? arr.join('.'): arr[0];
}

console.log(formatoMexico(numero));  // 123
console.log(formatoMexico(numero2)); // 1,234
console.log(formatoMexico(numero3)); // 123.456789
console.log(formatoMexico(numero4)); // 1,234.56789
console.log(formatoMexico(numero5)); // 123,456.789
console.log(formatoMexico(numero6)); // 1,234,567.89
```
## Regex para que un input solo reciba numeros enteros decimales y comas.

```javascript
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
}else{
    textA.value = "Solo valores enteros y decimales separados por comas son permitidos";
};
```
## Funcion para sumar todos los numeros dentro de un array
```javascript
const arrayNumber = [1,2,3,4,5];

function promedio(arrayNumber){
    const suma = arrayNumber.reduce((add,num) => add+=num);
    const cantidad = arrayNumber.length;
    const resPromedio = suma / cantidad;
    winResPromedio.innerText = resPromedio.toFixed(1);
}
// -- 15
```
## Creacion de objeto "repetidos" con el numero de repeticiones de cada elemento usando reduce en una linea, en varias lineas o con un forEach

```javascript
const orden = [1,2,2,3,4,4];

// -- Usando reduce en una sola linea ---
const repetidos = orden.reduce( (a,b) => (a[b] ? a[b] +=1 : a[b] = 1, a), {});
 
// {
//  1: 1
//  2: 2
//  3: 1
//  4: 2
// }

// -- Usando reduce en varias lineas ---
const repetidos = orden.reduce((obAcum,elemArray) => {
if(obAcum[elemArray]){
    obAcum[elemArray] += 1;
}else{
    obAcum[elemArray] = 1;
}
return obAcum
},{});

// {
//  1: 1
//  2: 2
//  3: 1
//  4: 2
// }

// -- Usando un forEach --
const repetidos = {};
orden.forEach(elemento => {
    if(repetidos[elemento]){
        repetidos[elemento] += 1;
    }else{
        repetidos[elemento] = 1;
    }
});

// {
//  1: 1
//  2: 2
//  3: 1
//  4: 2
// }
```
## Para centrar el texto dentro de un textarea tanto vertical como horizontalmente en CSS, puedes usar las siguientes propiedades y valores:

```css
textarea {
  width: 300px; /* Ajusta el ancho según tus necesidades */
  height: 150px; /* Ajusta la altura según tus necesidades */
  display: block;
  margin: auto; /* Centra horizontalmente */
  resize: none; /* Evita que el usuario redimensione el textarea */
  text-align: center; /* Centra el texto horizontalmente */
  line-height: 150px; /* Ajusta la altura del texto para centrarlo verticalmente */
}
```