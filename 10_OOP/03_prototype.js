// let myName = "Tom     "
// let mychannel = "CN     "

// console.log(myName.trueLength);


let marvels = ["thor", "spiderman"];

let marvelsPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

Object.prototype.Tom = function () {
  console.log(`Tom is present in all objects`);
};

Array.prototype.heyTom = function () {
  console.log(`Tom says hello`);
};


// marvelsPower.Tom()
// marvels.Tom()
// marvels.heyTom()
// marvelsPower.heyTom()


// Inheritance

const User = {
  name: "Tom",
  email: "tom@google.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};


Teacher.__proto__ = User;

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUsername = "John wick     ";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True length is: ${this.trim().length}`);
};

anotherUsername.trueLength();
"tom".trueLength();
"johnWick".trueLength();
