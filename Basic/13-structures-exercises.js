/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales

let animales = ["Perro", "Gato", "Pajaro", "Toro", "Vaca"]
// console.log(animales)

// 2. Añade dos más. Uno al principio y otro al final

// animales.push("Cocodrilo")
// animales.unshift("Cuervo")
// console.log(animales)

// 3. Elimina el que se encuentra en tercera posición

animales.splice(3, 1) // Elimina elementos basado en su índice (posición) y cantidad a eliminar.
console.log(animales)

// 4. Crea un set que almacene cinco libros

let mySet = new Set(["Fuego", "Agua", "Aventura", "Infierno", "La Paz"])

console.log(Set)
console.log(mySet)

// 5. Añade dos más. Uno de ellos repetido

mySet.add("Viento") // Añade Viento al final del set
mySet.add("Fuego") // No añade nada
console.log(mySet)

// Extra: Encadenar add() ya que este solo acepta un argumento a la vez

mySet.add("Escalofrio").add("Eden")
console.log(mySet)

// 6. Elimina uno concreto a tu elección

mySet.delete("Escalofrio")
console.log(mySet)

// 7. Crea un mapa que asocie el número del mes a su nombre

let myMap = new Map([
  [1, "Enero"],
  [2, "Febrero"],
  [3, "Marzo"],
  [4, "Abril"],
  [5, "Mayo"],
  [6, "Junio"],
  [7, "Julio"],
  [8, "Agosto"],
  [9, "Septiembre"],
  [10, "Octubre"],
  [11, "Noviembre"],
  [12, "Diciembre"],
])

console.log(myMap)

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

console.log(myMap.has(5))

// 9. Añade al mapa una clave con un array que almacene los meses de verano

let mesesVerano = ["Junio", "Julio", "Agosto"]

myMap.set("Meses Verano:", mesesVerano)
console.log(myMap)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

let myArray = ["Javier", "Miriam", "Liam", "Maia"]
let mySet2 = new Set(myArray)

console.log(myArray)
console.log(mySet2)

// Test: Probando métodos de map()

console.log("\n\n")

let newMap = new Map([
  ["Nombre:", "Javier"],
  ["Edad:", 38],
  ["Profesion:", "Developer"],
])

console.log(newMap)
console.log(newMap.size) // 3
console.log(newMap.set("Hobbies:", "Guitarra")) // Añade e imprime el map entero
console.log(newMap.get("Nombre:")) // Javier
console.log(newMap.has("Nombre:")) // true
console.log(newMap.size) // 4
console.log(newMap.keys()) // { 'Nombre:', 'Edad:', 'Profesion:', 'Hobbies:' }
console.log(newMap.values()) // { 'Javier', 38, 'Developer', 'Guitarra' }
console.log(newMap.entries()) // Imprime el map entero
