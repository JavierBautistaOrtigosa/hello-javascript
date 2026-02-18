/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto

let nombre = "Javier"
let greeting = "Buenos dias, "
let greetingComplete = `${greeting}${nombre}`

console.log(greeting + nombre) // Buenos dias, Javier
console.log(`${greeting}${nombre}`) // Buenos dias, Javier
console.log(greetingComplete) // Buenos dias, Javier

// 2. Muestra la longitud de una cadena de texto

console.log(nombre.length) // 6
console.log(greeting.length) // 13
console.log(greetingComplete.length) // 19

// 3. Muestra el primer y último carácter de un string

console.log(greetingComplete[0]) // B
console.log(greetingComplete[20]) // undefined
console.log(greetingComplete[-1]) // undefined

// 4. Convierte a mayúsculas y minúsculas un string

console.log(greetingComplete.toUpperCase()) // BUENOS DIAS, JAVIER
console.log(greetingComplete.toLowerCase()) // buenos dias, javier

// 5. Crea una cadena de texto en varias líneas

console.log(
  `Hey,
me llamo
Javier`,
)

// 6. Interpola el valor de una variable en un string

let x = 2
let y = 2
let z = 2

console.log(`${x + y != z}`) // true

// 7. Reemplaza todos los espacios en blanco de un string por guiones

greetingComplete.replace(" ", "_") // .replace() does NOT modify the original string.
// Strings in JavaScript are immutable.
// creates a new string with the first space replaced…
// …but you never store it anywhere, so it’s immediately lost.

// The fix - Must assign the result back

greetingComplete = greetingComplete.replace(" ", "_")
console.log(greetingComplete) // Buenos_dias, Javier // .replace stops after the first match.

// The fix - Need to use a global regex which regular expression with the g flag

greetingComplete = greetingComplete.replace(/ /g, "_")
console.log(greetingComplete) // Buenos_dias,_Javier

// 8. Comprueba si una cadena de texto contiene una palabra concreta

console.log(greetingComplete.includes("Buenos")) // true

// 9. Comprueba si dos strings son iguales

let name1 = "Javier"
let name2 = "Miriam"

name1 === name2
  ? console.log(`${name1} and ${name2} are the same name string`)
  : console.log(`${name1} and ${name2} are not the same name string`)

// 10. Comprueba si dos strings tienen la misma longitud

let name1CharCount = name1.length
let name2CharCount = name2.length

name1CharCount === name2CharCount
  ? console.log(`${name1} and ${name2} "length" is the same`)
  : console.log(`${name1} and ${name2} "length" is not the same`)
