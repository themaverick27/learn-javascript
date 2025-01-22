// if statement

// compairson operator:  <, >, <=, >=, ==, !=, ===, !==

// example-1
if(2 == "2"){
    console.log("executed")
}

// example-2
if(2 === "2"){
    console.log("strict equal executed")
}

// example-3
const temperature = 41

if(temperature < 50){
    console.log("temperature is less than 50");
}
console.log("temperature is greater than 50");


// if else
// example-4
if(temperature < 50){
    console.log("temperature is less than 50");
}
else{
    console.log("temperature is greater than 50");
}

// example-5
const score = 200
if(score > 100){
    const power = "fly"
    console.log(`user power: ${power}`);
}

// example-6
const balance = 1000
if(balance > 500) console.log("test");

// multiple checks
if (balance < 500) {
  console.log("balance is less than 500");
} else if (balance < 750) {
  console.log("balance is less than 750");
} else if (balance < 900) {
  console.log("balance is less than 900");
} else{
    console.log("balance is greater than 900");
}

// multiple conditions check
const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard){
    console.log("allow to buy course");
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("user logged in");
}


