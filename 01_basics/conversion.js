/*
// conversion to number
// Example-1
let identity = "33"
console.log(typeof identity)

let identityInNumber = Number(identity)
console.log(typeof identityInNumber);
console.log(identityInNumber); // prints 33 (Number)

// Example-2
let score = "33abc"
console.log(typeof score); 

let scoreInNumber = Number(score)
console.log(typeof scoreInNumber);
console.log(scoreInNumber); // prints NaN (Not a Number)

// Example-3
let temp = null
console.log(typeof temp)

let tempInNumber = Number(temp)
console.log(typeof tempInNumber);
console.log(tempInNumber); // prints 0, null is converted to 0

// Example-4
let value = undefined
console.log(typeof value)

let valueInNumber = Number(value)
console.log(typeof valueInNumber);
console.log(valueInNumber); // prints NaN (Not a Number)

// Example-5
let check = true
console.log(typeof check)

let checkInNumber = Number(check)
console.log(typeof checkInNumber);
console.log(checkInNumber); // prints 1 (true)/ 0 for false


// "33" => 33
// "33abc" => NaN
// null => 0
// undefined => NaN
// true => 1 and false => 0


// conversion to boolean
// Example-6
let isLoggedIn = 1;
console.log(typeof isLoggedIn)

let boobleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof boobleanIsLoggedIn)
console.log(boobleanIsLoggedIn); // prints true

// Example-7
let empty = ""
console.log(typeof empty)

let booleanEmpty = Boolean(empty)
console.log(typeof booleanEmpty)
console.log(booleanEmpty); // prints false

// Example-8
let value = "marks"
console.log(typeof value)

let booleanValue = Boolean(value)
console.log(typeof booleanValue)
console.log(booleanValue); // prints true


// 1 => true and 0 => false
// "" => false and "marks" => true


// conversion to string
// Example-9
let someNumber = 33
console.log(typeof someNumber)

let stringNumber = String(someNumber)
console.log(typeof stringNumber)
console.log(stringNumber)
*/
