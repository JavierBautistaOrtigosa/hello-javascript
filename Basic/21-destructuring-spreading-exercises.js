/*
Clase 36 - Ejercicios: Desestructuración y propagación
Vídeo: https://youtu.be/1glVfFxj8a4?t=16802
*/

// 1. Usa desestructuración para extraer los dos primeros elementos de un array

let countryList = ['Australia', 'Spain', 'France', 'Germany']

let [country1, country2] = countryList

console.log(country1)
console.log(country2)

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable

let carList = ['Mazda']

let [car1, car2 = 'Nissan'] = carList

console.log(carList)
console.log(car1)
console.log(car2)

// 3. Usa desestructuración para extraer dos propiedades de un objeto

let carSpecs = {
      brand: 'Mazda',
      model: 'Neo',
      year: '2016'
}

let { brand, model } = carSpecs

console.log(brand)
console.log(model)

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes

let pizza = {
      type: 'Napolitana',
      ingredients: 5,
      difficulty: 'Medium'
}

let { type: pizzaType, ingredients: pizzaIngredients } = pizza

console.log(pizzaType)
console.log(pizzaIngredients)

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado

let device = {
      type: 'Laptop',
      deviceBrand: 'Lenovo',
      deviceModel: 'Yoga',
      year: 2025,
      competitors: {
            deviceBrand: 'HP',
            deviceModel: 'Ommnibook',
            year: 2025
      }
}

console.log(device)

let {
      competitors: {
            deviceBrand: competitorBrand,
            deviceModel: competitorModel,
            year: competitorYear
      }
} = device

console.log(competitorBrand)
console.log(competitorModel)
console.log(competitorYear)

// 6. Usa propagación para combinar dos arrays en uno nuevo

let foodList = ['Banana', 'Apple', 'Orange']
let foodList2 = ['Watermelon', 'Lemons', 'Berries']

let combinedList = [...foodList, ...foodList2]

console.log(combinedList)

// 7. Usa propagación para crear una copia de un array

let weeklyTasks = ['Clean Kitchen', 'Clean car', 'Study', 'Workout']

let finishedTasks = [...weeklyTasks]

// 8. Usa propagación para combinar dos objetos en uno nuevo

let car = {
      brand: 'Nissan',
      model: 'Patrol'
}

let Specs = {
      engine: 'Manual',
      fuelType: 'Petrol'
}

let fullCarSpecs = { ...car, ...Specs }

console.log(fullCarSpecs)

// 9. Usa propagación para crear una copia de un objeto

let fullCarSpecsCopy = { ...fullCarSpecs }

console.log(fullCarSpecsCopy)

// 10. Combina desestructuración y propagación

let carExtraSpecs = {
      colour: 'Red',
      year: 2026
}

let fullCarSpecsWithExtras = {
      ...fullCarSpecsCopy,
      ...carExtraSpecs
}

let {
      brand: carBrand,
      model: carModel,
      engine: carEngine,
      fuelType: carFuelType,
      colour: carColour,
      year: carYear
} = fullCarSpecsWithExtras

console.log(carBrand)
console.log(carModel)
console.log(carEngine)
console.log(carFuelType)
console.log(carColour)
console.log(carYear)
