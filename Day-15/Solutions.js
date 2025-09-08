// 001**: Create an array of 5 elements using the Array Constructor.
const array1 = new Array(5);

// 002**: Create an array of 3 empty slots.
const array2 = new Array(3);

// 003**: Create an array of 6 elements using the Array literals and access the fourth element in the array using its `length` property.
const array3 = [10, 20, 30, 40, 50, 60];
const fourthElement = array3[array3.length - 3];

// 004**: Use the `for` loop on the above array to print elements in the odd index.
for (let i = 0; i <= array3.length; i++) {
  if (i % 2 !== 0) {
    // console.log(array3[i]);
  }
}

// 005**: Add one element at the front and the end of an array.
const array4 = [1, 3, 4, 5, 6, 67];
array4.unshift(1);
array4.push(8);

// 006**: Remove an element from the front and the end of an array.
const array5 = [1, 3, 4, 5, 6, 67];
array5.shift();
array5.pop();

// 007**: Create an array containing the name of your favourite foods(10 foods). Destructure the 6th food element from the array using destructuring.
const foods = [
  "Pizza",
  "Burger",
  "Pasta",
  "Sushi",
  "Tacos",
  "Ice Cream",
  "Salad",
  "Steak",
  "Chicken",
  "Fish",
];

const [, , , , , sixthFood] = foods;
// console.log(sixthFood); // Ice Cream

// 008**: Take out the last 8 food items from the above array using the Array destructuring. Hint: rest parameter.
const [, ...lastEight] = foods; // Skip first, get remaining 8
// console.log(lastEight);

//009**: Clone an Array(Shallow cloning)
const original = [1, 2, 3, [4, 5]];
const cloned = [...original]; // using spread operator
// OR: const cloned = original.slice();

// 010**: Empty an array using its length property
let array6 = [1, 2, 3, 4, 5];
array6.length = 0;

//011**: Create an array of 10 elements(number 1 to 10). Resize the array to length 6 once you find the number 5 in that array. Hint: Use `for-loop`.
let array7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < array7.length; i++) {
  if (array7[i] === 5) {
    array7.length = i + 1;
    break;
  }
}

//012**: Create an Array of 10 elements. Use the `splice()` method to empty the array.
let myarray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
myarray.splice(0, myarray.length);

//013 Create an Array of 10 elements. You can empty the array in multiple ways: using the `length` property, using the `pop()` method, using the `shift()` method, setting the array with `[]`, or the `splice()` method. Which among these methods are most efficient and why?
let myarray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// The most efficient way to empty an array is to set its length to 0 (e.g., `array8.length = 0;`)
// This method is generally faster because it directly modifies the array's length property without the overhead of method calls.
// The `splice()`  method can also be used, but it involves more steps and can be less efficient for simply emptying an array.

// 14: What happens when you concatenate two empty arrays?
// Output: [] - Concatenating two empty arrays results in another empty array.

// 15 How can you check if a value is partially matching with any of the elements of an Array?
const array = ["apple", "banana", "cherry"];
const valueToCheck = "ban";
const isPartiallyMatching = array.some((item) => item.includes(valueToCheck));

// 16 What is the difference between the slice() and splice() methods?
// splice() mutates an array, but slice() doesn’t

// 17 Create an Array of alphanumeric strings. Sort the elements in both ascending and descending orders. You must be doing this in an immutable way such that the source array never gets modified.
const alphanumericArray = ["apple1", "banana2", "cherry3", "date4"];
const sortedAscending = [...alphanumericArray].sort();
const sortedDescending = [...alphanumericArray].sort().reverse();

//  18 Can you give examples of sparse and dense arrays?
const denseArray = [1, 2, 3, 4, 5]; // All elements are present
const sparseArray = [1, , 3, , 5]; // Some elements are missing

// 19 Give a practical usages of the .fill() method
const filledArray = new Array(5).fill(0); // Creates an array [0, 0, 0, 0, 0]

// 20 How to convert an array to a string?
// toString() method

const arrayToString1 = (arr) => arr.toString();
// join method
const arrayToString2 = (arr) => arr.join(", ");
// string(arr) method
const arrayToString3 = (arr) => String(arr);
// JSON.stringify() method
const arrayToString4 = (arr) => JSON.stringify(arr);

//  21 Can you filter employees who work in the "Engineering" department?
const employees = [
  { id: 1, name: "Alice", departmentId: 1, salary: 5000 },
  { id: 2, name: "Bob", departmentId: 2, salary: 7000 },
  { id: 3, name: "Charlie", departmentId: 3, salary: 4500 },
  { id: 4, name: "Diana", departmentId: 1, salary: 5500 },
  { id: 5, name: "Edward", departmentId: 2, salary: 8000 },
  { id: 6, name: "Fiona", departmentId: 4, salary: 6000 },
  { id: 7, name: "George", departmentId: 3, salary: 5200 },
  { id: 8, name: "Helen", departmentId: 4, salary: 7200 },
  { id: 9, name: "Ian", departmentId: 2, salary: 4800 },
  { id: 10, name: "Jane", departmentId: 1, salary: 5100 },
];

const result = employees.filter((emp) => emp.departmentId === 1);

// 22 Create a new array that combines employee names and department names in the format: "Alice (HR)".
const combined = employees.map((emp) => `${emp.name} (${emp.departmentId})`);

// 23 Find the highest salary among employees.
const highestSalary = Math.max(...employees.map((emp) => emp.salary));

// 24 Check if there is at least one employee in the "HR" department.
const res = employees.map((arr) => arr.departmentId === 4);

// 25 Write a function to filter employees earning more than 6000.
employees.filter((emp) => emp.salary > 6000);

// 26 Create an array of employee names only.
const employeeNames = employees.map((emp) => emp.name);

// 27 Calculate the total salary of all employees
const res1 = employees.map((arr) => arr.salary).reduce((a, b) => a + b, 0);

//  28 Is there any employee earning less than 5000?
const res2 = employees.some((arr) => arr.salary < 5000);

// 29 Find the first employee who earns exactly 5100.
const res3 = employees.find((err) => err.salary === 5100);

// 30 Find the last employee in the "HR" department.
//.reverse()` changes the original array `...employees` creates a shallow copy of the array, ensuring only the copy is reversed
// After reversing, the first match found by `.find()` will be the last occurrence in the original order—this is an efficient way to get the last matching item
//.find()` stops as soon as it finds the first match, returning only that single element. It is efficient when you only want one item (the last “HR” in this case).
const res4 = [...employees].reverse().find((arr) => arr.departmentId === 4);

// 36 Extract all employee names into a single array.
const res5 = employees.map((arr) => arr.name);

// 37 Increment each employee's salary by 10%
const res6 = employees.map((emp) => ({ ...emp, salary: emp.salary * 1.1 }));

// 38 Assume each employee can have multiple skills. Create an array of employee skills and flatten them. Example: [{name: "Alice", skills: ["Excel", "Management"]}, ...].
const employeesWithSkills = [
  { name: "Alice", skills: ["Excel", "Management"] },
  { name: "Bob", skills: ["JavaScript", "React"] },
  { name: "Charlie", skills: ["Python", "Django"] },
];

const allSkills = employeesWithSkills.flatMap((emp) => emp.skills);

// 39 Find the total salary of all employees working in the "Engineering" department.
const totalEngineeringSalary = employees
  .filter((emp) => emp.departmentId === 1)
  .reduce((acc, emp) => acc + emp.salary, 0);

// 40 Check if there is any department where all employees earn more than 5000.
const departmentSalaryCheck = employees.reduce((acc, emp) => {
  if (emp.salary > 5000) {
    acc[emp.departmentId] = (acc[emp.departmentId] || 0) + 1;
  }
  return acc;
}, {});

const hasHighEarningDepartment = Object.values(departmentSalaryCheck).some(
  (count) =>
    count === employees.filter((emp) => emp.departmentId === count).length
);

// - [ ] **T-041**: Assume each employee has a projects array (e.g., { id: 1, name: "Alice", projects: ["Project A", "Project B"] }).
//       Find the total number of unique projects being handled across all employees.
// - [ ] **T-042**: For each employee, find their department name and return an array of employee names with their department names.
// - [ ] **T-043**: Get a list of names of employees earning more than 6000.
// - [ ] **T-044**: Write a for-of loop to print the names of all employees from the employees array.
// - [ ] **T-045**: Using a for-of loop, print the names of employees earning more than 5000.
// - [ ] **T-046**: Modify the for-of loop to destructure each employee object and log their name and salary.
// - [ ] **T-047**: Write a for-of loop to match employees with their departments and print the results.
// - [ ] **T-048**: Use Array.prototype.entries() with a for-of loop to print the index and name of each employee.

// - [ ] **T-049**: Given the array-like object below, access the second element and log it:

//   ```js
//   const arrayLike = { 0: "First", 1: "Second", length: 2 };
//   ```

// - [ ] **T-050**: Write a function that takes a variable number of arguments and converts the arguments object into a real array using Array.from.
// - [ ] **T-051**: Write a snippet to select all div elements on a webpage (using document.querySelectorAll) and convert the resulting NodeList into an array.
// - [ ] **T-052**: Merge these two arrays into a single array:

//   ```js
//   const arr1 = [1, 2];
//   const arr2 = [3, 4];
//   ```

// - [ ] **T-053**: Create an array of n duplicate values using Array.from. Input: Create an array with 5 "A" values. Output: ["A", "A", "A", "A", "A"]
// - [ ] **T-054**: Use Array.from to convert a string like "Hello" into an array of characters.
// - [ ] **T-055**: For the array, ['apple', 'banana', 'apricot', 'mango', 'blueberry'], group words by their first letter using group().
// - [ ] **T-057**: From this array [3, 7, 3, 2, 3, 8, 7, 7], find the most repeated number. Hint: Use array method.
// - [ ] **T-058**: Find the median of [5, 2, 9, 1, 3, 6, 8].
// - [ ] **T-059**: Convert this array [['a', 1], ['b', 2], ['c', 3]], into { a: 1, b: 2, c: 3 } using array method(s).
// - [ ] **T-060**: Flatten and convert all letters to uppercase in one step using flatMap(). Here is input array: [['a', 'b'], ['c', 'd']].
// - [ ] **T-061**: Count the occurrences of each fruit in this array: ['apple', 'banana', 'apple', 'mango', 'banana', 'banana']
// - [ ] **T-062**: Extract extract [‘b’, ‘c’, ‘d’] using slice() from this array: ['a', 'b', 'c', 'd', 'e']
// - [ ] **T-063**: Sort the array [9, 3, 1, 6, 8] in ascending order using toSorted()
// - [ ] **T-064**: Reverse [1, 2, 3, 4, 5] using toReversed() and compare it with reverse()
// - [ ] **T-065**: Group the follwing array elements based on age(Adult vs Non-Adult):

// ```js
// const users = [
//   { name: "Alice", age: 55 },
//   { name: "Bob", age: 3 },
//   { name: "Charlie", age: 25 },
// ];
// ```

// - [ ] **T-066**: Find the longest word in this sentence using Array and Array methods: "40 Days of JavaScript by tapaScript is a powerful initiative".
// - [ ] **T-067**: Find common elements between two arrays, [1, 2, 3, 4], [3, 4, 5, 6]
