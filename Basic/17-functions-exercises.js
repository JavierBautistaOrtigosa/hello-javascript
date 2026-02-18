/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma

// function sum(a, b) {
//   return a + b
// }

// console.log(sum(2, 3))

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

// let numList = [1, 2, 6, 3, 4, 5]

// function numBiggest(arr) {
//       let counter = 0
//       for (let i = 0; i < numList.length; i++) {
//             if (numList[i] >= counter) {
//                   counter = numList[i]
//             }
//       }
//       console.log(counter)
// }

// numBiggest(numList)

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
// Hint: If vocals includes any character from the string "Australia", print the character.

// let word = "Australia"
// let vocals = ["a", "e", "i", "o", "u"]
// let counter = 0

// function printVocals(string) {
//   for (let i = 0; i < word.length; i++) {
//     if (vocals.includes(word[i])) {
//       counter++
//     }
//   }
//   console.log(counter)
// }

// printVocals(word)

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

// let words = ["Australia", "Spain", "Japan", "China"]

// for (let i = 0; i < words.length; i++) {
//   let wordsNew = words[i].toUpperCase()
//   console.log(wordsNew)
// }

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

// let num = 4
// let isEven = undefined

// function checkEven(number) {
//   if (num % 2 == 0) {
//     isEven = true
//   } else {
//     isEven = false
//   }
//   console.log(isEven)
// }

// checkEven(num)

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
// Hint: We are checking for intersection and duplication.

// let arr1 = [1, 1, 1, 2, 3, 4, 5]
// let arr2 = [1, 2, 7, 6, 5]
// let arr3 = []

// function checkCommon(arr1, arr2, arr3) {
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr2.includes(arr1[i]) && !arr3.includes(arr1[i])) {
//       arr3.push(arr1[i])
//     }
//   }
//   return arr3
// }

// console.log(checkCommon(arr1, arr2, arr3))

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

// let numList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// function operation(numList) {
//   let numEven = []
//   let sumResult = 0
//   for (let i = 0; i < numList.length; i++) {
//     if (numList[i] % 2 == 0) {
//       numEven.push(numList[i])
//     }
//   }
//   for (let i = 0; i < numEven.length; i++) {
//     sumResult = sumResult + numEven[i]
//   }

//   return sumResult
// }

// console.log(operation(numList))

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

let numList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let numListExp2 = []

function numExp2(numList) {
      let i = 0
      while (i < numList.length) {
            numListExp2.push(Math.pow(numList[i], 2))
            i++
      }
      return numListExp2
}

numExp2(numList)
console.table(numListExp2)

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

// 10. Crea una función que calcule el factorial de un número dado
