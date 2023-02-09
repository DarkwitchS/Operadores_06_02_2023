
//Math.ceil(x)
//Devuelve el entero más pequeño mayor o igual que un número.
let numeroCeil = 8.01;
let resultado = Math.ceil(numeroCeil);
let explicacion = "Math.ceil(x) --- El número que debería dar como resultado en el log es 9, ya que es el número mayor más cercano de 8,01 que es el valor de mi variable.";
console.log(`${explicacion} Math.ceil(8.01) = ${resultado}`);

/* Math.floor(x)
Devuelve el mayor entero menor que o igual a un número. */
let numeroFloor = 7.86;
resultado = Math.floor(numeroFloor);
explicacion = "Math.floor(x) --- El número que debería dar como resultado en el log es 7, ya que es el número menor más cercano de 7,86 que es el valor de mi variable.";
console.log(`${explicacion} Math.floor(7.86) = ${resultado}`);

/* Math.max()
Devuelve el mayor de cero o más números. */
let numero1 = 2, numero2 = 9, numero3 = 63;
resultado = Math.max(numero1,numero2,numero3);
explicacion = "Math.max(x,y...) --- El número que debería dar como resultado en el log es 63, ya que es el número mayor entre el grupo de valores proporcionados en el método";
console.log(`${explicacion} Math.max(2,9,63) = ${resultado}`);

/* Math.min()
Devuelve el más pequeño de cero o más números. */
numero1 = 2, numero2 = 9, numero3 = 63;
resultado = Math.min(numero1,numero2,numero3);
explicacion = "Math.min(x,y...) --- El número que debería dar como resultado en el log es 2, ya que es el número menor entre el grupo de valores proporcionados en el método";
console.log(`${explicacion} Math.min(2,9,63) = ${resultado}`);

/* Math.pow(x, y)
Las devoluciones de base a la potencia de exponente, que es, baseexponent. */
let base = 25, exponente = 2;
resultado = Math.pow(base,exponente);
explicacion = "Math.pow(x,y) --- El número que debería dar como resultado en el log es 625, ya que es el resultado de elevar la base = 25, por el exponente = 2 (25 x 25 = 625)";
console.log(`${explicacion} Math.pow(25,2) = ${resultado}`);

/* Math.random()
Devuelve un número pseudo-aleatorio entre 0 y 1. */
resultado = Math.floor(Math.random()*5);
explicacion = "Math.floor(Math.random()*5) --- El número que debería dar como resultado en el log es 0,1,2,3, o 4, ya que son las probabilidades que se manejan, el método floor me permite tomar el entero menor más cercano al valor que arroje el random, multiplicado por 5 en este caso";
console.log(`${explicacion} Math.floor(Math.random() * 5) = ${resultado}`);

/* Math.round(x)
Devuelve el valor de un número redondeado al número entero más cercano. */
let numeroRound = 2.5;
resultado = Math.round(numeroRound);
explicacion = "Math.round(x) --- El número que debería dar como resultado en el log es 3, ya que al ser un decimal .5 aproxima al número mayor entero más cercano; si fuera 2.4, sería 2.";
console.log(`${explicacion} Math.round(2.5) = ${resultado}`);

/* Math.sqrt(x)
Devuelve la raíz cuadrada positiva de un número. */
let numeroRaiz = 144;
resultado = Math.sqrt(numeroRaiz);
explicacion = "Math.sqrt(x) --- El número que debería dar como resultado en el log es 12, ya que es la raíz cuadrada positiva de 144.";
console.log(`${explicacion} Math.sqrt(144) = ${resultado}`);

/* Math.trunc(x)
Devuelve la parte entera del número x, la eliminación de los dígitos fraccionarios. */
let numeroFrac = 5.5665;
resultado = Math.trunc(numeroFrac);
explicacion = "Math.trunc(x) --- El número que debería dar como resultado en el log es 5, ya que es el número entero de la variable proporcionada";
console.log(`${explicacion} Math.trunc(5.5665) = ${resultado}`);

/* 6.265456.toFixed(x);
Devuelve la cantidad de números decimales según el valor de x */
let numerotoFix = 6.923871265;
resultado = numerotoFix.toFixed(3);
explicacion = "numero.toFixed(x) --- El número que debería dar como resultado en el log es 6.924, ya que es el número entero con los 3 decimales indicados en el paréntesis, se redondea para arriba, por eso 4 y no 3";
console.log(`${explicacion} 6.923871265.toFixed(3) = ${resultado}`);