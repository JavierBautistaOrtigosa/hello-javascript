function greet(name) {
  console.log(`Hello ${name}`);
}

greet("Javi");

// let greet2 = function (name) {
//   console.log(`Hello ${name}`);
// };

// greet2("Javi");

function processGreeting(functionName, nombre) {
  functionName(nombre);
}

processGreeting(greet, "Miriam");

/*
- We can assign a function to a constant
- We can pass a function as a parameter from another function
- Functions are very important entities, to the level of objects and values.
- A function can return another function. See Key Concepts.
*/

function returnGreeting() {
  return greet; // Literally returns the function itself. DOESN'T call the function.
}

const greet2 = returnGreeting();
greet2("Liam"); // In JavaScript, if a variable holds a Function -> I can call it

// Key Concepts:

// const a = greet;
// const b = greet();

// What a and b actually contain
// 1️. const a = greet;
// a stores the function itself
// not the result of the function
// not a copy
// just another reference to the same function

// You can think of it like:

// js
// a === greet   // true
// So you can call:

// js
// a("Liam");
// because a is a function.

// 2️. const b = greet();
// Here you are calling the function.

// So:
// greet() runs immediately
// whatever greet() returns becomes the value of b
// If greet() doesn’t return anything, then:

// js
// b === undefined
// And you cannot call:

// js
// b("Liam"); // error
// because b is not a function — it’s the result of calling one.
