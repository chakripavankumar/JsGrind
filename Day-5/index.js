const rows = 5;

for (let i = 1; i <= rows; i++) {
  let pattern = "";
  for (let j = 1; j <= i; j++) {
    pattern += "* ";
  }
  console.log(pattern);
}

// const tbale = 2;
// for (let i = 0; i <= 12; i++) {
//   console.log(tbale * i);
// }

// let sum = 0;

// for (let i = 1; i <= 500; i += 2) {
//   sum += i;
// }
// console.log(`Sum of odd numbers from 1 to 500: ${sum}`);

for (let i = 0; i <= 20; i++) {
  if (i % 3 !== 0) {
    console.log(i);
  }
}
//5. Reverse Digits of a Number (Using while loop)

let num = 6789;
let reversed = 0;

while (num > 0) {
  reversed = reversed * 10 + (num % 10);
  num = Math.floor(num / 10);
}
console.log(`Reversed number: ${reversed}`);

/* Explanation:
1. Get last digit using num % 10
2. Add it to reversed (after shifting digits left)
3. Remove last digit from original number
4. Repeat until number becomes 0
Example:
Initial: 6789, reversed: 0
1st iter: 678, reversed: 9
2nd iter: 67, reversed: 98
3rd iter: 6, reversed: 987
4th iter: 0, reversed: 9876
*/

// 6. Loop Differences and Flowcharts

// for loop:
// Used when number of iterations is known Has initialization, condition, and increment in one line
//Syntax: for(init; condition; increment) { ... }
// while loop:
// Used when number of iterations is unknown
// Only has condition check
// May never execute if condition is false initially
// Syntax: while(condition) { ... }

// do-while loop:
// Similar to while but guaranteed to run at least once Condition checked after first execution
// Syntax: do { ... } while(condition)
//Flowcharts (Text Representation):

// for loop
