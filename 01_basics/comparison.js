// comparison
/*
console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 <= 1);
console.log(2 == 1);
console.log(2 != 1);
*/

// Comparison between different datatypes
/*
// Example-1
console.log("2" > 1);
console.log("02" > 1);
*/

/*
// Example-2
console.log(null == 0); // false
console.log(null != 0); // true
console.log(null > 0); // false
console.log(null >= 0); // true
*/

// Note:  The reason is that an equality check == and comparison > < >= <= work differently.
// Comparisons convert null to a number, treating it as 0
// that's why (null >= 0) is true and (null > 0) is false

/*
// Example-3
console.log(undefined == 0); // false
console.log(undefined != 0); // true
console.log(undefined > 0); // false
console.log(undefined >= 0); // false
*/

// Note: In javascript, equality (==, ===) and comparison operators work differently.

// strict check (===) - check datatypes as well along with the values
// Example-4
console.log("2" == 2); // true, conversion happens internally and then compared
console.log("2" === 2); // false, no pre conversion is done
