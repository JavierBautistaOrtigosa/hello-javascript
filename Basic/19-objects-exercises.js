/*
Clase 34 - Ejercicios: Objetos
Vídeo: https://youtu.be/1glVfFxj8a4?t=15675
*/

// 1. Crea un objeto con 3 propiedades

let car = {
      brand: "Nissan",
      model: "QASHQAI",
      year: 2026,
}

// 2. Accede y muestra su valor

console.log(car.brand)
console.log(car.model)
console.log(car.year)

// 3. Agrega una nueva propiedad

car.colour = "Red"
console.log(car)

// 4. Elimina una de las 3 primeras propiedades
delete car.year
console.log(car)

// 5. Agrega una función e invócala

car.engineType = function () {
      console.log(`The car is manual`)
}

console.log(car)
car.engineType()

// 6. Itera las propiedades del objeto

for (let key in car) {
      console.log(key)
      // console.log(car[key])
}

// 7. Crea un objeto anidado

car.competitor = {
      brand: "Mazda",
      model: "CX5",
      colour: "Blue",
      engineType: function () {
            console.log(`The car is manual`)
      },
}

// 8. Accede y muestra el valor de las propiedades anidadas

console.log("---")
console.log(car.competitor.brand)
console.log(car.competitor.model)
console.log(car.competitor.colour)
car.competitor.engineType()

// 9. Comprueba si los dos objetos creados son iguales

console.log(car === car.competitor)

// 10. Comprueba si dos propiedades diferentes son iguales

console.log(car.colour === car.competitor.colour)
