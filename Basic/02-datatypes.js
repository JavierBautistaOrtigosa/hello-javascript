/*
Clase 17 - Tipos de datos
Vídeo: https://youtu.be/1glVfFxj8a4?t=3599
*/

// Tipos de datos primitivos

// Cadenas de texto (string)
let myName = "Brais Moure"
let alias = "MoureDev"
let email = `braismoure@mouredev.com`

// Números (number)
let age = 37 // Entero
let height = 1.77 // Decimal

// Booleanos (boolean)
let isTeacher = true
let isStudent = false

// Undefined
let undefinedValue
console.log(undefinedValue)

// Null
let nullValue = null

// Symbol

let mySymbol = Symbol("mysymbol")

// BigInt

let myBigInt = BigInt(817239871289371986589716389471628379612983761289376129)
let myBigInt2 = 817239871289371986589716389471628379612983761289376129n

// Mostramos los tipos de datos
console.log(typeof myName)
console.log(typeof alias)
console.log(typeof email)

console.log(typeof age)
console.log(typeof height)

console.log(typeof isTeacher)
console.log(typeof isStudent)

console.log(typeof undefinedValue)

console.log(typeof nullValue)

console.log(typeof mySymbol)

console.log(typeof myBigInt)
console.log(typeof myBigInt2)

/*
Notas:
Cualquier lenguaje de programacion trabaja con datos y hay diferentes tipos de datos.
Por un lado tenemos los datos primitivos y por otro lado tenemos ...

Los tipos de datos llamados primitivos, son los datos en los que se fundamenta nuestra interaccion con el lenguaje, son datos basicos, inmutables y representan un solo valor.
Los dato de tipo primitivos representan un solo valor y no son objectos ni tienen funciones o metodos. En JavaScript tenemeos 7 typos de datos primitivos.

Los booleans son utilizados para saber si algo es verdadero o falso y saber como acaba actuando nuestro programa.

El tipo de dato undefined es un tipo de dato no definido. Es una variable que se ha declarada pero no se ha inicializada.

El tipo de variable null es cuando queremos asignar valor nulo a una variable.

El tipo de variable symbol se utiliza para representar identificadores unicos.
El big int en un nuero entero grande.

*/
