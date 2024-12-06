// Datatypes - 1. primitive datatype (call by value) and 2. Non-primitive datatype (call by reference)

// Primitive - 7 types
// String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = true
const outsideTemp = null

const bigNumber = 784651321655487668745n

let userEmail;

const id = Symbol('456')
console.log(id);
const anotherId = Symbol('456')
console.log(anotherId);

console.log(id === anotherId); // false

// Note: JavaScript is a dynamic-typed language, which means that variables can hold values of different types during runtime.


// Non-primitive (reference type) 
// Arrays, Objects, Functions

const arr = ["value1", "value2", "value3"]

let myObject = {
    language: "English",
    accent: "British",
}

const myFucntion = function(){
    console.log("Hello World");
}


// typeof function - to know the type of the variable
console.log(typeof bigNumber); // bigint
console.log(typeof outsideTemp); // object
console.log(typeof myFucntion); // function or (object function)
