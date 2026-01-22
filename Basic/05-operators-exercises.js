/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética

let a = 5
let b = 5

let sum = a + b
console.log(sum) //10

let substract = a - b
console.log(substract) // 0

let multiply = a * b
console.log(multiply) // 25

let divide = a / b
console.log(divide) // 1

let remainder = a % b
console.log(remainder) // 0

let exponential = a ** b
console.log(exponential) // 3125

a++
console.log(a) // 6

a--
console.log(a) // 5

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

console.log("---")
let sumAssignment = (a += b)
console.log(sumAssignment) // 10

let substractionAssignment = (a -= b)
console.log(substractionAssignment) // 5

let multiplicationAssignment = (a *= b)
console.log(multiplicationAssignment) // 25

let divisionAssignment = (a /= b)
console.log(divisionAssignment) // 5

let remainderAssignment = (a %= b)
console.log(remainderAssignment) // 0

let exponentiationAssignment = (a **= b)
console.log(exponentiationAssignment) // 0

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

a = 2
b = 5
console.log("---")
console.log(a)
console.log(b)

console.log(a === a) // true
// - Strict equality
// - Same value and same type

console.log(a == a) // true
// Loose equality
// - JavaScript does type coercion first
// - Type coercion:
// - When JavaScript sees two values of different types being compared or operated on,
//   it may try to convert one or both values so the operation makes sense.

console.log(a < b) // true
console.log(b > a) // true
console.log(a != b) // true
// - Loose inequality
// - They are clearly different values.

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log("---")
console.log(a > b) // false
console.log(b < a) // false
console.log(a >= b) // false
console.log(a === b) // false
console.log(!(a != b)) // false

// 5. Utiliza el operador lógico and
// - Solo necesita almenos un false para computar como false

console.log("---")
console.log(2 === 2 && 2 === 2) // true && true = true
console.log(2 === 3 && 2 === 2) // false && true = false
console.log(2 === 3 && 2 === 3) // false && false = false
console.log(2 === 3 && 2 === 3 && 2 === 3) // false && false && false = false
console.log(2 === 3 && 2 === 3 && 2 === 2) // false && false && true = false
console.log(2 === 3 && 2 === 2 && 2 === 2) // false && true && true = false
console.log(2 === 2 && 2 === 2 && 2 === 2) // true && true && true = true

// 6. Utiliza el operador lógico or
// - Solo necesita almenos un true para computar como true

console.log("---")
console.log(2 === 2 || 2 === 2) // true || true = true
console.log(2 === 3 || 2 === 2) // false || true = true
console.log(2 === 3 || 2 === 3) // false || false = false
console.log(2 === 3 || 2 === 3 || 2 === 3) // false || false || false = false
console.log(2 === 3 || 2 === 3 || 2 === 2) // false || false || true = true
console.log(2 === 3 || 2 === 2 || 2 === 2) // false || true || true = true
console.log(2 === 2 || 2 === 2 || 2 === 2) // true || true || true = true

// 7. Combina ambos operadores lógicos

console.log("---")
console.log((2 === 2 && 2 === 2) || 2 === 2) // (true && true) || true = true
console.log((2 === 2 && 2 === 2) || 2 === 3) // (true && true) || false = true
console.log((2 === 2 && 2 === 3) || 2 === 2) // (true && false) || true = true
console.log((2 === 2 && 2 === 3) || 2 === 3) // (true && false) || false = false
console.log((2 === 3 && 2 === 3) || 2 === 3) // (false && false) || false = false
console.log((2 === 3 && 2 === 3) || 2 === 2) // (false && false) || true = true

// 8. Añade alguna negación

console.log("---")
console.log((2 === 2 && 2 === 2) || !2 === 2) // (true && true) || false = true // Solo necesita un true para computar true

// 9. Utiliza el operador ternario
// - Formula: condicion ? expresion si true : expresion si false

console.log("---")
let strictEquality = 2 === 2
strictEquality ? console.log("Equal") : console.log("Not equal")

// 10. Combina operadores aritméticos, de comparáción y lógicas

let x = 1
let y = 2
let z = 3

console.log("---")
console.log(x < y && y < z) // true
console.log(!(x < y && y < z)) // false
console.log(x < y && y < z && !(x < y && y < z)) // false
console.log((x < y && y < z) || !(x < y && y < z)) // true
