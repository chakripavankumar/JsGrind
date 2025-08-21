// TASK-1 SOLUTION
console.log("hey");
console.log("Welcome to 40 Days of JavaScript!");
document.write("Check the browser console for a message!");


// TASK_2 SOLUTION
// Using async and defer attributes for script loading in JavaScript
//  <!-- Defer attribute for scripts that depend on the DOM or other scripts -->
//     <script src="myScriptWithDependencies.js" defer></script>
//     <!-- Async attribute for independent scripts like analytics -->
//     <script src="analytics.js" async></script>
// The async and defer attributes are used within the <script> tag to control how external JavaScript files are loaded and executed, improving webpage performance by preventing render-blocking behavior. 
// 1. async attribute
// Loading: Downloads the script asynchronously (in the background) while the browser continues parsing the HTML.
// Execution: Executes the script as soon as it is downloaded, even if the HTML parsing is not yet complete.
// Order: The order of execution is not guaranteed for multiple scripts with the async attribute.
// Use cases: Ideal for independent scripts that don't rely on other scripts or DOM manipulation, like analytics or ad scripts. 

