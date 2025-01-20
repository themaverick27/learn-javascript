const myArr = [1, 2, 3, 4, 5]
// console.log(myArr);

console.log(myArr[1]); // elements are accessed through indexing

// Note: JavaScript arrays are resizable and can contain a mix of different data types.
// JavaScript array-copy operations create shallow copies. (changes in the original array)

// shallow copies (reference type/ heap) -  A shallow copy of an object is a copy whose properties share the same references
// deep copies (value type/ stack) - A deep copy of an object is a copy whose properties do not share the same references

// another way of declaring arrays
const arr = new Array("banana", "apple", "peach");
console.log(arr);
console.log(arr.length);


// methods of array - push(), pop(), unshift(), shift(), join(), slice(), splice()

myArr.push(6)
// console.log(myArr);

myArr.pop()
// console.log(myArr);

myArr.unshift(9) // inserts element at the start of the array
// console.log(myArr);

myArr.shift() // removes the first element of the array
// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));
// console.log(myArr.indexOf(3));

const newArr = myArr.join() // adds all the elements of myArr into a string
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr); // string type


// slice and splice method
console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) // slice() do not modifies the original array

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3) // splice() modifies the original array

console.log("C ", myArr);
console.log(myn2);

// Note: The slice() method in JavaScript extracts a section of an array and returns a new array containing the selected elements, without modifying the original array.
// The splice() method in JavaScript is used to change the contents of an array by removing or replacing existing elements and/or adding new elements in place, modifying the original array.
