/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea

// This is a single line comment.

// 2. Escribe un comentario en varias líneas

/*
This is a two
line comment.
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

let varNumber = 1
let varString = "Wednesday"
let varBool = true
let varUndefined = undefined
let varNull = null
let varBigInt = 2834087234871234123412344n
let varSymbol = Symbol("mySymbol")

// 4. Imprime por consola el valor de todas las variables

console.log(varNumber)
console.log(varString)
console.log(varBool)
console.log(varUndefined)
console.log(varNull)
console.log(varBigInt)
console.log(varSymbol)

// 5. Imprime por consola el tipo de todas las variables

console.log(typeof varNumber)
console.log(typeof varString)
console.log(typeof varBool)
console.log(typeof varUndefined)
console.log(typeof varNull)
console.log(typeof varBigInt)
console.log(typeof varSymbol)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

varNumber = 2
console.log(varNumber)

varString = "Thursday"
console.log(varString)

varBool = false
console.log(varBool)

varUndefined = undefined // undefined no tiene “otro valor del mismo tipo”
console.log(varUndefined === undefined) // Esto no cambia el valor, solo confirma que sigue siendo undefined.

varNull = null // null no tiene “otro valor del mismo tipo”
console.log(varNull === null) // Esto no cambia el valor, solo confirma que sigue siendo null.

varBigInt = 12345678910111213141516171819n
console.log(varBigInt)

varSymbol = Symbol("secondSymbol")
console.log(varSymbol)

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

varNumber = "Numero"
console.log(varNumber)

varString = 1
console.log(varString)

varBool = "Javier"
console.log(varBool)

varUndefined = true
console.log(varUndefined)

varNull = undefined
console.log(varNull)

varBigInt = 1234
console.log(varBigInt)

varSymbol = 100
console.log(varSymbol)

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

const varNumber2 = 1
const varString2 = "Friday"
const varBool2 = false
const varUndefined2 = undefined
const varBigInt2 = 98273897102709712087134087134n
const varSymbol2 = Symbol("mySymbol")

// 9. A continuación, modifica los valores de las constantes

// varNumber2 = 2 // TypeError: Assignment to constant variable.
// varString2 = "Monday" //TypeError: Assignment to constant variable.
// varBool2 = true // TypeError: Assignment to constant variable.
// varUndefined2 = undefined // TypeError: Assignment to constant variable.
// varBigInt2 = 98273897102709712087134087134n // TypeError: Assignment to constant variable.
// varSymbol2 = Symbol("mySymbol") // TypeError: Assignment to constant variable.

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse
