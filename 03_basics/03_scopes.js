//var c = 300
let a = 300;

if (true) {
  let a = 10;
  const b = 20;
  // console.log("inside: ", a);
}

// console.log(a);
// console.log(b); // error
// console.log(c);


function one() {
  const username = "Maddy";

  function two() {
    const language = "English";
    console.log(username);
  }
  // console.log(language); // error 

  two();
}

// one()

if (true) {
  const username = "Maddy";
  if (true) {
    const language = " English";
    console.log(username + language);
  }
  // console.log(language); //error
}

// console.log(username); // error

// Note: 

console.log(addone(5));

function addone(num) {
  return num + 1;
}

// another way of declaring function - storing it into variables

addTwo(5); // throw error - cannot access 'addTwo' before initialization

const addTwo = function (num) {
  return num + 2;
};
