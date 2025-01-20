const companies = ["Apple", "Microsoft", "Amazon", "Google"]
const products = ["ipad", "windows", "aws", "Gemini"]

// push() - appends new element at the end of the array, modifie the original array
// companies.push(products)

// console.log(companies);
// console.log(companies[0]);
// console.log(companies[4]);
// console.log(companies[4][1]);

// concat() - combines two or more arrays, returns a new array without modifying the original arrays
const newArr = companies.concat(products)
// console.log(newArr);

// spread operation
const myArr = [...companies, ...products]
// console.log(myArr);

// flat() - returns a new array with all sub-array elements concatenated into it (recursively up to a depth)
const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const flatArray = anotherArray.flat(Infinity)
// console.log(flatArray);


// console.log(Array.isArray("Master")); // false
// console.log(Array.from("Master")); // creates an array from an iterable objects 

// console.log(Array.from({name: "Master"})); // []

// Array.of() - returns a new array from the set of elements
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
