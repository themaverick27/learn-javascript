// memory (two types) - Stack and Heap Memory

// Stack memory (Primitive) and Heap memory (Non-primitve)

// Example-1 (Primitive - value copy is passed) - Stack memory
let myValue = "JavaScript"
console.log(myValue);

let anotherValue = myValue
console.log(anotherValue); 
anotherValue = "TypeScript" 
console.log(anotherValue);

// Example-2 (Non-primitive - reference is passed) - Heap memory
let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}
console.log(userOne.email);

let userTwo = userOne
userTwo.email = "userTwo@google.com"

console.log(userOne.email);
console.log(userTwo.email);
