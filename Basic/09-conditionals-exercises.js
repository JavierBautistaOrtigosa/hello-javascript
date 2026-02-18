/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor

let myName = "Javier"

if (myName == "Javier") {
  console.log(`Your name is ${myName}`)
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

let usuario = "Javier"
let password = 1234

if (usuario == "Javier" && password == 1234) {
  console.log("You are logged in")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

let number = -2

if (number > 0) {
  console.log(`${number} is positive`)
} else if (number < 0) {
  console.log(`${number} is negative`)
} else {
  console.log(`${number} is zero`)
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let age = 6

if (age >= 18) {
  console.log("You can vote")
} else {
  console.log(`You will be able to vote in ${18 - age} years`)
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad

// Condition ? true : false

let isAdult = 18

isAdult >= 18 ? (isAdult = "adulto") : (isAdult = "menor")

console.log(isAdult)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
/*
Recuerda: 
- Una string literal sola siempre es truthy,
- por lo tanto y para que el programa no se pare hay que tener en cuenta lo siguiente:
- else if (mes == "abril" || mes == "mayo") - Esta linea funciona
- else if (mes == "abril" || "mayo") - Esta linea no funciona puesto que "mayo" siempre va a evaluarse como truthy y el programa se para.
*/
let mes = "agosto"

if (mes == "marzo") {
  console.log("Final de invierno, principio de primavera")
} else if (mes == "abril" || mes == "mayo") {
  console.log("Primavera")
} else if (mes == "junio") {
  console.log("Final de primavera, principio de verano")
} else if (mes == "julio" || mes == "agosto") {
  console.log("Verano")
} else if (mes == "Septiembre") {
  console.log("Final de verano, principio de otoño")
} else if (mes == "octubre" || mes == "noviembre") {
  console.log("Otoño")
} else if (mes == "diciembre") {
  console.log("Final de otoño, principio de invierno")
} else if (mes == "enero" || mes == "febrero") {
  console.log("Invierno")
} else {
  console.log("Inserta el mes del año que quieras evaluar en minusculas")
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

// switch

let month = "noviembre"
let daysEachMonth

switch (month) {
  case "enero":
    daysEachMonth = console.log(`${month}: tiene 31 dias`)
    break
  case "febrero":
    daysEachMonth = console.log(`${month}: tiene 28 dias`)
    break
  case "marzo":
    daysEachMonth = console.log(`${month}: tiene 31 dias`)
    break
  case "abril":
    daysEachMonth = console.log(`${month}: tiene 30 dias`)
    break
  case "mayo":
    daysEachMonth = console.log(`${month}: tiene 31 dias`)
    break
  case "junio":
    daysEachMonth = console.log(`${month}: tiene 30 dias`)
    break
  case "julio":
    daysEachMonth = console.log(`${month}: tiene 31 dias`)
    break
  case "agosto":
    daysEachMonth = console.log(`${month}: tiene 31 dias`)
    break
  case "septiembre":
    daysEachMonth = console.log(`${month}: tiene 30 dias`)
    break
  case "octubre":
    daysEachMonth = console.log(`${month}: tiene 31 dias`)
    break
  case "noviembre":
    daysEachMonth = console.log(`${month}: tiene 30 dias`)
    break
  case "diciembre":
    daysEachMonth = console.log(`${month}: tiene 31 dias`)
    break

  default:
    console.log("El input debe de ser uno de los meses en minusculas")
}

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let language = "ingles"

switch (language) {
  case "espanol":
    console.log("Hola")
    break
  case "ingles":
    console.log("Hello")
    break
  case "italiano":
    console.log("Ciao")
    break
  default:
    console.log("Elige entre Español, Inglés o Italiano")
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6

let mesPresente = "agosto"

switch (mesPresente) {
  case "diciembre":
  case "enero":
  case "febrero":
    console.log("Invierno")
    break
  case "marzo":
  case "abril":
  case "mayo":
    console.log("Primavera")
    break
  case "junio":
  case "julio":
  case "agosto":
    console.log("Verano")
    break
  case "septiembre":
  case "octubre":
  case "noviembre":
    console.log("Otono")
    break
  default:
    console.log("El input debe ser un mes del ano en español y minúsculas")
}

// 10. Usa un switch para hacer de nuevo el ejercicio 7

let monthOfTheYear = "enero"

switch (monthOfTheYear) {
  case "enero":
  case "marzo":
  case "mayo":
  case "julio":
  case "agosto":
  case "octubre":
  case "diciembre":
    console.log("Este mes tiene 31 días")
    break

  case "abril":
  case "junio":
  case "septiembre":
  case "noviembre":
    console.log("Este mes tiene 30 días")
    break

  case "febrero":
    console.log("Este mes tiene 28 días")
    break

  default:
    console.log("Introduce el mes en minúsculas")
}
