// Strings

// string interpolation `${}`
const name = "john"
const marks = 85

// console.log(name + marks + " obtained");
console.log(`My name is ${name} and marks obtained ${marks}.`);

// another way of declaring String
const gameName = new String("John-Cena")

/*
console.log(gameName[0]);
console.log(gameName.__proto__);// {} object

// some string methods
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('h'));
*/

// more string methods
const newString = gameName.substring(0, 3) // [start, end)
console.log(newString);

const anotherString = gameName.slice(-8, 4) // [start, end)
console.log(anotherString);

// Note: slice() method can take -ve values but not substring cannot

const newStringValue = "    john  "
console.log(newStringValue);
console.log(newStringValue.trim()); // trim() removes the extra space from the start and end

const url = "https://xyz.com/xyzsearch%10watch"
console.log(url.replace("%10", '-'));

console.log(url.includes('xyz'));

// conversion of string to array based on some separator or limit
const valueOne = "hey-this-is-a-javascript-file"
console.log(valueOne.split('-'));
