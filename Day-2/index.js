// Task 1: Declare variables for a person’s name, age, isStudent status, and favorite programming language.

const name = "Alice";
let age = 25;
let isStudent = true;
let favoriteProgrammingLanguage = "JavaScript";

// Task 2: Print the values to the console.
console.log("Name:", name);
console.log("Age:", age);
console.log("Is Student:", isStudent);
console.log("Favorite Programming Language:", favoriteProgrammingLanguage);

//Task 3: Try reassigning values to let and const variables and observe errors.

age = 26;
console.log("Updated Age:", age);

try {
  name = "Bob";
} catch (error) {
  console.log("Error when trying to reassign const:", error.message);
}
//Task 4: Create an object and an array, assign them to new variables, modify, and observe changes.

const person = {
  name: "Alice",
  age: 25,
  isStudent: true,
};

const languages = ["JavaScript", "Python", "Java"];
const newPerson = person;
const newLanguages = languages;
newPerson.age = 26;
newLanguages.push("C++");

console.log("Original person:", person); // age is now 26
console.log("Original languages:", languages); // now includes "C++"

// Note: For true copies that don't affect originals, you would need to:
// For objects: const trueCopyPerson = {...person};
// For arrays: const trueCopyLanguages = [...languages];
