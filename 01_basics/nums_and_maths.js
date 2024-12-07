// ************************ Numbers ******************** 
const score = 100
console.log(score);

// explicitly mentioning the type
const balance = new Number(500)
console.log(balance);

// Number properties & methods
console.log(balance.toString());
console.log(balance.toString().length);

console.log(balance.toFixed(2)); // 500.00

const otherNumber = 23.8964
console.log(otherNumber);
console.log(otherNumber.toPrecision(3)); // 23.9, returns string

const zeros = 10000000
console.log(zeros.toLocaleString("en-IN")); // 1,00,00,000

// max and min value in Number
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

// ************************ MATHS ******************** 
console.log(Math);

// Math properties & functions
/*
console.log(Math.abs(-4));
console.log(Math.round(4.3));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.2));

console.log(Math.min(4, 7, 8, 12, 1));
console.log(Math.max(4, 7, 8, 12, 1));
*/

console.log(Math.random()); // number between 0 and 1 [0,1]

console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const minn = 10
const maxx = 20
// random numbers between two variables (minn and maxx)
console.log(Math.floor(Math.random() * (maxx - minn + 1)) + minn); // formula
