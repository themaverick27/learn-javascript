const descripter = Object.getOwnPropertyDescriptor(Math, "PI");

// console.log(descripter);
// console.log(Math.PI);

// Math.PI = 5
// console.log(Math.PI);


const course = {
  name: "Machine Learning",
  price: 999,
  isAvailable: true,

  buyCourse: function () {
    console.log("buy course");
  },
};

console.log(Object.getOwnPropertyDescriptor(course, "name"));

Object.defineProperty(course, "name", {
  //writable: false,
  enumerable: true,
});

console.log(Object.getOwnPropertyDescriptor(course, "name"));


for (let [key, value] of Object.entries(course)) {
  if (typeof value !== "function") {
    console.log(`${key} : ${value}`);
  }
}
