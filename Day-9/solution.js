//  Temporal Dead Zone (TDZ) refers to the period of time during which a variable is inaccessible
//  in the scope where it is defined, until the point of declaration is reached.
//  This is particularly relevant for variables declared with let and const.
// JavaScript hoisting: moving declarations to the top
// solution 1
{
  // TDZ starts for a, b, c here

  // console.log(a); // ❌ ReferenceError
  // console.log(b); // ❌ ReferenceError
  // console.log(c); // ❌ ReferenceError

  let a = 10; // TDZ ends for a here
  const b = 20; // TDZ ends for b here
  var c = 30; // var is hoisted (no TDZ)

  console.log(a); // ✅ 10
  console.log(b); // ✅ 20
  console.log(c); // ✅ 30
}
// •	let and const are hoisted but not initialized → stay in TDZ until the line where they’re assigned.
// •	Accessing them before initialization → ReferenceError.
// •	var is hoisted and initialized to undefined → no TDZ.

// 2. Explain Variable and Function Hoisting with Example. Post the code as your answer

// Example of Variable Hoisting
console.log(x); // ✅ undefined (hoisted with default 'undefined')
var x = 5;

// Example of let/const (TDZ instead of hoisting)
try {
  console.log(y); // ❌ ReferenceError (TDZ)
} catch (err) {
  console.log(err.message);
}
let y = 10;

// Example of Function Hoisting
sayHello(); // ✅ Works (entire function hoisted)

function sayHello() {
  console.log("Hello from hoisted function!");
}

// Example of Function Expression (NOT hoisted)
try {
  sayHi(); // ❌ TypeError: sayHi is not a function
} catch (err) {
  console.log(err.message);
}
var sayHi = function () {
  console.log("Hi!");
};
