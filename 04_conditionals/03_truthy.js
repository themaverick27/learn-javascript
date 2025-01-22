// truthy and falsy values

const userEmail = ""
const userPassword = [] // truthy 

if(userEmail){
    console.log("Got useer email");
}
else{
    console.log("Don't have user email");
}

if (userPassword) {
  console.log("Got useer email");
} else {
  console.log("Don't have user email");
}

// a truthy value is a value that is considered true when encountered in a Boolean context. 
// All values are truthy unless they are defined as falsy. 
// That is, all values are truthy except false, 0, -0, 0n, "", null, undefined, NaN

// falsy values ->  false, 0, -0, BigInt 0n, "", null, undefined, NaN
// some interesting truthy values -> "0", "false", " ", [], {}, function(){}

const userList = []

if(userList.length === 0){
    console.log("Array is empty");
}

const emptyObj = {} // truthy value

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

// false == 0 -> true
// false == '' -> true
// 0 == '' -> true


// Nullish Coalescing Operator (??) -> null, undefined

let val1;
val1 = 5 ?? 10

console.log(val1); // 5

val1 = null ?? 10
console.log(val1); // 10

val1 = undefined ?? 15
console.log(val1); // 15

val1 = null ?? undefined
console.log(val1); // undefined

val1 = undefined ?? null;
console.log(val1); // null

val1 = null ?? 10 ?? 20
console.log(val1); // 10


// ternary operator

// syntax: condition ? true : false

const price = 120
price <= 100 ? console.log("price is less than 100") : console.log("price is greater than 100");


