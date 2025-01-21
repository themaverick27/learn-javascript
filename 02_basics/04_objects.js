// objects as contructor

const tinderUser = new Object() // singleton object
// console.log(tinderUser); // {}

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = true

// console.log(tinderUser); // { id: '123abc', name: 'Sam', isLoggedIn: true }

// combining objects
const obj1 = {1: "a", 2: "b", 3: "c"}
const obj2 = {4: "d", 5: "e", 6: "f" };

const obj3 = {obj1, obj2}
// console.log(obj3);

const objFinal = Object.assign({}, obj1, obj2)
// console.log(objFinal);

const objFinal2 = {...obj1, ...obj2} // spread
// console.log(objFinal);


const users = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "a@gmail.com"
    },
]

users[1].email

console.log(tinderUser);

console.log(Object.keys(tinderUser)); // returns an array consisting of all keys
console.log(Object.values(tinderUser)); // returns an array consisting of all values

console.log(Object.entries(tinderUser)); // returns an array of key/value
