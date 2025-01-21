// this keyword - refers to current context

const myObj = {
    username: "Pat",
    course: "web",
    prcie: 399,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the ${this.course} course`);
        console.log(this); // refers to the current context
    }
}

// myObj.welcomeMessage()

// myObj.username = "Maddy"
// myObj.welcomeMessage();

// console.log(this); // {} object - in node environment (as the current context - global has no context) and Window object - in browser environment



function something(){
    let username = "Maddy"
    console.log(this);
    // console.log(this.username); // undefined - this keyword works different inside or for the function, not similar to as object
}

// something()



const value = function printValue(){
    let username = "Maddy"
    console.log(this);
    // console.log(this.username); // undefined - this keyword works different inside or for the function, not similar to as object
}

// printValue()


// arrow function 
const val = () => {
    let username = "Maddy"
    console.log(this); // {}
    // console.log(this.username); // undefined - this keyword works different inside or for the function, not similar to as object
}

// val()


// arrow function

// example-1
const addTwo = (num1, num2) => {
    return num1 + num2
}

console.log(addTwo(5, 7));

// example-2 (implicit return - way to return value from fn without explicitly using the return keyword)
const summ = (num1, num2) => (num1 + num2)
console.log(summ(5, 7));

// example-3 - returning object 
const text = () => ({username: "Maddy"});
console.log(text());

