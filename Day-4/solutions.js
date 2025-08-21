//1. Switch Case Output
switch (day) {
  case "monday": // Case is lowercase while input is "Monday" (case-sensitive)
    console.log("It's the start of the week.");
    break;
  default: // This will execute because no case matches
    console.log("It's a normal day.");
}

// Output: "It's a normal day."
// Explanation: JavaScript switch cases are case-sensitive.
// "Monday" ≠ "monday", so default case runs

// 2. ATM Cash Withdrawal System

let withdrawalAmount = 500; // Try changing this value to test

// Check if amount is multiple of 100 using modulo operator
console.log(
  withdrawalAmount % 100 === 0 ? "Withdrawal successful" : "Invalid amount"
);

/* Explanation:
- % gives remainder after division by 100
- If remainder is 0 → amount is multiple of 100 → valid
- Otherwise → invalid
*/

// 3. Calculator with switch-case

let num1 = 10,
  num2 = 5;
let operator = "+";

switch (operator) {
  case "+":
    console.log(num1 + num2);
    break;
  case "-":
    console.log(num1 - num2);
    break;
  case "*":
    console.log(num1 * num2);
    break;
  case "/":
    console.log(num1 / num2);
    break;
  case "%":
    console.log(num1 % num2);
    break;
  default:
    console.log("Invalid operator");
}

// 4. Movie Ticket Pricing

let age = 25;

switch (true) {
  case age < 18:
    console.log("$3");
    break;
  case age >= 18 && age <= 60:
    console.log("$10");
    break;
  default:
    console.log("$8");
}

//5. Horoscope Sign Checker

let month = "April";

switch (month.toLowerCase()) {
  case "march":
  case "april":
    console.log("Aries");
    break;
  case "april":
  case "may":
    console.log("Taurus");
    break;
  case "may":
  case "june":
    console.log("Gemini");
    break;
  // Add remaining months similarly...
  default:
    console.log("Invalid month");
}

// 6. Triangle Type Checker

let side1 = 5,
  side2 = 5,
  side3 = 5; // Change these values to test

// First check if it's a valid triangle
if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
  // Then determine type
  if (side1 === side2 && side2 === side3) {
    console.log("Equilateral Triangle");
  } else if (side1 === side2 || side1 === side3 || side2 === side3) {
    console.log("Isosceles Triangle");
  } else {
    console.log("Scalene Triangle");
  }
} else {
  console.log("Not a valid triangle");
}

/* Explanation:
1. First validates triangle (sum of any two sides > third side)
2. Checks for Equilateral (all sides equal)
3. Then Isosceles (two sides equal)
4. Finally Scalene (all sides different)
5. Example tests:
   - 5,5,5 → Equilateral
   - 5,5,8 → Isosceles
   - 3,4,5 → Scalene
   - 1,2,3 → Not valid
*/
