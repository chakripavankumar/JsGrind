//What will be the output of the following code and why?  Bob  Alice
let user = "Alice";
function outer() {
  function inner() {
    console.log(user);
  }
  let user = "Bob";
  inner();
}
outer();

//2. What is the mistake in the code below? We should avoid global variables because they make code less predictable and harder to debug. Instead, functions should either return results directly or manage state locally
let total = 0;
function add(num) {
  total += num;
}
add(5);
add(10);
console.log(total);
// 3. Create a function with a nested function and log a variable from the parent function
// parentFunction is called → execution context for parentFunction is created. ->Inside it, a variable message is declared. -> childFunction is defined (nested function). ->When childFunction is invoked, it looks for message. -> It doesn’t find it in its own scope → moves up the scope chain → finds message in the parent’s scope.

function parentFunction() {
  let message = "Hello from the parent function!";
  function childFunction() {
    console.log(message); // accessing parent's variable
  }
  childFunction();
}
parentFunction();

// 4. Use a loop inside a function and declare a variable inside the loop. Can you access it outside?
// When you declare a variable with let or const inside a loop block {}, it is block-scoped. -> That means the variable exists only within that loop iteration’s block. ->	Once the iteration ends, the variable is destroyed. -> Trying to access it outside → ❌ ReferenceError.
function testLoop() {
  for (let i = 0; i < 3; i++) {
    let message = "Hello " + i;
    console.log("Inside loop:", message);
  }
  try {
    console.log("Outside loop:", message);
  } catch (err) {
    console.log("Error:", err.message);
  }
}
testLoop();

// Write a function that tries to access a variable declared inside another function
// Outer cannot access inner’s variables. -> Inner can access outer’s variables (thanks to lexical scoping & closures).
function outer() {
  let secret = "I'm a secret!";
  function inner() {
    console.log(secret);
  }
  inner();
}
outer();

//What will be the output and why?
// Hoisting happens: The variable a is hoisted to the top of the scope because it’s declared with let. -> But unlike var, it is not initialized to undefined. Instead, it remains in a Temporal Dead Zone (TDZ) from the start of the scope until the declaration line.
// Execution starts: The engine hits console.log(a) while a is still in the TDZ. -> Accessing it here throws a ReferenceError.
// Initialization happens later: Only after the line let a = 10; executes, a is assigned the value 10. -> But by then, the console.log(a) line has already failed.

console.log(a); // ReferenceError: Cannot access 'a' before initialization
let a = 5;

// 10W hat will be the output and why?
// Because of closure, the count variable is not recreated each time. -> Instead, it persists across multiple calls to reduce(). ->Each call modifies the same count in that preserved lexical environment.

function counter() {
  let count = 0;
  return function () {
    count--;
    console.log(count);
  };
}
const reduce = counter();
reduce();
reduce();
