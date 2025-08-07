// 1. Odd or Even?
const number = 7;
console.log(`${number} is ${number % 2 === 0 ? "even" : "odd"}`);

//2. Do you have a Driving License?

const age = 18;
console.log(
  age >= 18
    ? "Eligible for driving license"
    : "Not eligible for driving license"
);

// 3. CTC with Bonus Calculation

const monthlySalary = 12300;
const annualSalary = monthlySalary * 12;
const bonus = annualSalary * 0.2;
const ctc = annualSalary + bonus;
console.log(`Annual CTC: ₹${ctc}`);

// 4. Traffic Light Simulation

const color = "red";
console.log(
  color === "red" ? "STOP" : color === "green" ? "GO" : "Invalid color"
);

// Electricity Bill Calculator

const unitsPerDay = 5;
const monthlyUnits = unitsPerDay * 30;
const monthlyBill = monthlyUnits * 150;
const annualBill = monthlyBill * 12 * 0.8; // 20% discount
console.log(`Monthly Bill: ₹${monthlyBill}`);
console.log(`Annual Bill (with 20% discount): ₹${annualBill}`);

//Leap Year Checker

const year = 2025;
console.log(
  (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
    ? `${year} is a leap year`
    : `${year} is not a leap year`
);

// 7. Max of Three Numbers

const p = 10,
  q = 20,
  r = 15;
const max = p > q ? (p > r ? p : r) : q > r ? q : r;
console.log(`Maximum number is ${max}`);

//Nested ternary comparisons:
// First compares p and q
// Then compares the larger with r
// Finds absolute maximum in 2 steps

//8. Bitwise Doubling

javascript;
let count = 5;
count = count << 1;
console.log(`Doubled: ${count}`);
//eft shift operator (<<) moves bits left
//Each left shift multiplies by 2 (binary)
//5 in binary: 101
//Shift left: 1010 (which is 10 in decimal)
//Most efficient way to double using bit operations
