function celsiusToFahrenheit(celsius) {
  let result = (celsius * 9) / 5 + 32;
  return result;
}
function findMax(num1, num2) {
  return num1 > num2 ? num1 : num2;
}

//  Find Maximum of Two Numbers
function findMax(num1, num2) {
  return num1 > num2 ? num1 : num2;
}
// Palindrome Checker
function isPalindrome(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return str === reversed;
}
// Factorial Calculator
function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
//Vowel Counter
function countVowels(str) {
  let count = 0;
  const vowels = "aeiou";
  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) count++;
  }
  return count;
}
// Word Capitalizer
function capitalizeWords(sentence) {
  let words = sentence.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
}
// IIFE with Parameter
(function (lang) {
  console.log(`Hello, ${lang}!`);
})("JavaScript");
//Callback Function
function greet(name, callback) {
  callback(name);
}

greet("Alice", function (name) {
  console.log(`Hello, ${name}!`);
});

// Call Stack Diagram #1
// Call Stack:
// 1. f2()
// 2. f1() (called from f2)
// 3. (empty after f1 completes)

// Call Stack Diagram #2
// Call Stack:
// 1. f2()
// 2. (empty after f2 completes)
// 3. f3()
// 4. f1() (called from f3)
// 5. (empty after f1 completes)
// 6. f1() (direct call)
// 7. (empty after f1 completes)
