# Use async and defer attributes

Using async and defer attributes for script loading in JavaScript
The async and defer attributes are used within the script tag to control how external JavaScript files are loaded and executed, improving webpage performance by preventing render-blocking behavior.

1. async attribute
   Loading: Downloads the script asynchronously (in the background) while the browser continues parsing the HTML.
   Execution: Executes the script as soon as it is downloaded, even if the HTML parsing is not yet complete.
   Order: The order of execution is not guaranteed for multiple scripts with the async attribute.
   Use cases: Ideal for independent scripts that don't rely on other scripts or DOM manipulation, like analytics or ad scripts

2. defer attribute
   Loading: Downloads the script asynchronously while the browser continues parsing the HTML.
   Execution: Executes the script after the HTML document has been fully parsed, but before the DOMContentLoaded event fires.
   Order: Scripts with the defer attribute are guaranteed to execute in the order they appear in the document.
   Use cases: Suitable for scripts that rely on the DOM being fully loaded or have dependencies on other scripts, such as scripts that manipulate elements on the page or initialize a gallery.

3. Key differences summarized
   Feature async defer
   Execution timing Immediately after download After HTML parsing is complete
   Execution order Not guaranteed Guaranteed (in order of appearance)
   DOM access Not allowed until after script execution Allowed after HTML is parsed
   Impact on rendering Can potentially interrupt rendering if script is large Minimal rendering interruptions, smooth loading
   Use case Independent scripts (e.g., analytics) Scripts dependent on DOM or other scripts (e.g., UI manipulation)
<!-- 
<!-- Defer attribute for scripts that depend on the DOM or other scripts -->
    <script src="myScriptWithDependencies.js" defer></script>
    <!-- Async attribute for independent scripts like analytics -->
    <script src="analytics.js" async></script> -->