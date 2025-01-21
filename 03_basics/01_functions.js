// functions - A function is a block of code designed to perform a particular task.

/*
syntax: function declaration
function <functionName>(<parameters>){
    // body or scope
}

syntax: function calling
functionName(<arguments>)
*/

// example-1
function printName(){
    console.log("Maverick");
}
// printName - reference, printName() - execution
// printName();


// example-2
function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
}

addTwoNumbers(18, 36)
// const result = addTwoNumbers(18, 36); // undefined, as the function is not returning any value, so the result is undefined


// example-3
function addTwoNumbers(number1, number2){
    let add = number1 + number2;
    return add
}

const result = addTwoNumbers(18, 36)
// console.log(result);

// example-4
function loginUserMessage(username){
    if(username === undefined){ // !username
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Pat"));
console.log(loginUserMessage()); // username - undefined

// example-5
function greeting(username = "Sammy"){
    return `${username} just logged in`
}

console.log(greeting("patty"));
console.log(greeting());