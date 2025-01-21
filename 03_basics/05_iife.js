// IIFE - Immediately Invoked Function Expressions

// js functions that are executed immediately after they are defined.
// They are typically used to create a local scope for variables to prevent them from polluting the global scope.

/*
syntax: semi-colon ; is must

(function (){ 
// Function Logic Here. 
})();

*/

// named iife
(function greet(){
    console.log("welcome!");
}());


(function connect() {
  console.log("DB connected");
})();


// un named iife
( () => {
  console.log("DB connected");
} )();


((name) => {
  console.log(`DB connected ${name}`);
})("maddy");

// use cases of IIFE

// Avoid polluting the global namespace.
// To create closures in JavaScript.
// IIFE is used to create private and  public variables and methods.
// It is used to execute the async and await function.
// It is used to work with require function.