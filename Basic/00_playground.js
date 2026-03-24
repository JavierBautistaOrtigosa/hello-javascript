// Creating a class while extending Error
class SumZeroIntegerError extends Error {
      constructor(message, a, b) {
            super(message)
            this.a = a
            this.b = b
      }
      printNumbers() {
            console.log(this.a, ' + ', this.b)
      }
}

// 1. Error example

// let myObject
// console.log(myObject) // undefined
// console.log(myObject.email) // error

// 2. try / catch - Capture errors

// try {
//       console.log(myObject.email)
//       // console.log(myObject)
//       console.log('No errors found.')
// } catch {
//       console.log('There was an error.')
// }

// 3. Catch the object error

// try {
//       console.log(myObject.email)
//       // console.log(myObject)
//       console.log('No errors found.')
// } catch (error) {
//       console.log('There was an error.')
//       console.log(error.message)
//       console.log(error.name)
//       console.log(error.stack)
// }

// 4. finally - Siempre se ejecuta

// try {
//       console.log(myObject.email)
// } catch (error) {
//       console.log('Error: ', error.message)
// } finally {
//       console.log('This code will always be executed')
// }

// 5. throw - Lanzar tus propios errores

function sumIntegers(a, b) {
      if (typeof a !== 'number' || typeof b !== 'number') {
            throw new TypeError('***** Custom TypeError message by Javier')
      }
      if (!Number.isInteger(a) || !Number.isInteger(b)) {
            throw new Error('***** Custom Error message by Javier')
      }
      if (a == 0 || b == 0) {
            throw new SumZeroIntegerError('***** Trying to add zero', a, b)
      }
      return a + b
}

console.log(sumIntegers(2, '2')) // throw new TypeError('***** Custom TypeError message by Javier')
console.log(sumIntegers(1.5, 0)) // throw new Error('***** Custom Error message by Javier')
console.log(sumIntegers(0, 0)) // throw new SumZeroIntegerError('***** Trying to add zero', a, b)
