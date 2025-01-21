// objects (key-value pair) - two ways to declare (as literal or as constructor)
// when objects declared as literal - do not form singleton object
// when objects declared as constructor - form singleton object

// object constructor - Object.create

const mySym = Symbol("key1");

// objects literal - non-singleton object
const userOne = {
    name: "john-cena",
    "language": "english", 
    [mySym]: "mykey1", // syntax (when symbol is used in the objects), it refers to the symbol []
    age: 42,
    location: "US",
    email: "cena@googleus.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Friday"]
}

// console.log(userOne.email); 
console.log(userOne["email"]); // key is treated as string internally 
console.log(userOne["language"]);

console.log(userOne[mySym]); // [mySym] is a Symbol, no "" while accessing

// updating value of the objects
userOne.email = "john-cena@googleus.com"
console.log(userOne["email"]);

// freeze or lock the object - no changes allowed
Object.freeze(userOne)

userOne.email = "john-cena@rediffmail.com"; // will not be updated as we freeze the object before
console.log(userOne["email"]); 

console.log(userOne); // notice: [Symbol(key1)]: 'mykey1'

// example-2
const userTwo = {
  name: "Bob",
  language: "english",
  age: 22,
  location: "Argentina",
  email: "bob@gs.com",
  isLoggedIn: true,
  lastLoginDays: ["Monday", "Friday"],
};

userTwo.gretting = function(){
    console.log("Hello user two");
}

// console.log(userTwo.gretting); // [Function (anonymous)]
console.log(userTwo.gretting());

userTwo.grettingTwo = function () {
  console.log(`Hello user two, ${this.name}!`);
};

console.log(userTwo.grettingTwo());


// example-3
const regularUser = {
    email: "userregular@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Sam",
            lastnmae: "curr"
        }
    }
}

console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname);
console.log(regularUser.fullname.userfullname.firstname);