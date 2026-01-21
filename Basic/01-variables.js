/*
Clase 16 - Variables
Vídeo: https://youtu.be/1glVfFxj8a4?t=3049
*/

// var

var helloWorld = "¡Hola, JavaScript!"
console.log(helloWorld)

helloWorld = "¡Hola de nuevo, JavaScript!"
console.log(helloWorld)

// let

let helloWorld2 = "¡Hola, JavaScript 2!"
console.log(helloWorld2)

helloWorld2 = "¡Hola de nuevo, JavaScript 2!"
console.log(helloWorld2)

// const

const helloWorld3 = "¡Hola, JavaScript 3!"
console.log(helloWorld3)

// Error
// helloWorld3 = "¡Hola de nuevo, JavaScript 2!"
// console.log(helloWorld3)

/*
Notas:
Almacenar en memoria valores y/o referencias para comenzar a trabajar con ellos.
Variable es la capacidad de poder guardar un valor o referencia a un objecto.
lowerCamel case es lo estandar para asignar un nombre a la variable.
var fue la forma original que se utilizaba en JavaScript para guardar variables.
Las formas principales (del presente) de declarar variables y asignar valores a memoria es con let y const.
Las variables declaradas con let solo son accesibles dentro de un bloque o un lugar acotado donde se ejecuta el codigo y por lo tanto las variables let solo tienen efecto dentro de ello, en cambio las variables var no tienen esta limitacion.
Las variables declaradas con const son accesibles dentro del bloque de ejecucion pero su valor es constante. Es decir, el valor que le asigne en el momento de su declaracion es constante y no puede ser reasignada.
Ojo porque no significa que const sea inmutable, si const lo utilizamos con referencias, estas si que pueden ir variando porque la referencia sigue siento la misma pero lo que esta cambiando es el contenido.
Podemos definir propiedades asociadas a memoria principalmente con "let" cuando varian y con "const" cuando no varian.
*/
