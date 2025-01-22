const sports = [
  "badminton",
  "cricket",
  "football",
  "basketball",
  "table tennis",
];

sports.forEach((item) => {
  // console.log(item);
  // return // it (for each) do not return values
});

// filter - returns the elements of an array that meet specified condition in a callback fn

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const newNums = myNums.filter((num) => num > 5);
// console.log(newNums); // [6, 7, 8, 9]

const anotherNums = myNums.filter((num) => {
  num > 5;
});
// console.log(anotherNums); // []

const otherNums = myNums.filter((num) => {
  return num > 5;
});
// console.log(otherNums); // [6, 7, 8, 9]

// same thing with for each loop (as for each do not return values, while filter returns)

const extraNums = [];

myNums.forEach((num) => {
  if (num > 5) {
    extraNums.push(num);
  }
});

// console.log(extraNums);

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

let userBooks = books.filter((obj) => obj.genre === "Fiction");
console.log(userBooks);

userBooks = books.filter((obj) => {
  return obj.publish > 2000;
});
console.log(userBooks);

userBooks = books.filter((obj) => {
  return obj.publish > 1995 && obj.genre === "Science";
});
console.log(userBooks);
