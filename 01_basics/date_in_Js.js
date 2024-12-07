// Dates

let myDate = new Date()
console.log(myDate);

// methods of dates
console.log(myDate.toString()); // converted to string type, Sun Dec 08 2024 01:55:44 GMT+0530 (India Standard Time)
console.log(myDate.toISOString()); // 2024-12-07T20:25:44.269Z
console.log(myDate.toJSON()); // 2024-12-07T20:25:44.269Z

console.log(myDate.toLocaleString()); // 8/12/2024, 1:55:44 am
console.log(myDate.toLocaleDateString()); // 8/12/2024
console.log(myDate.toLocaleTimeString()); // 1:55:44 am
console.log(myDate.toDateString()); // Sun Dec 08 2024


// console.log(typeof myDate); // object

let myCreatedDate = new Date(2024, 11, 27) 
// Note: 0 - January, 12 - December, Month starts from 0 in js 
console.log(myCreatedDate.toDateString()); // Fri Dec 27 2024

let anotherDate = new Date(2024, 11, 27, 5, 3) 
console.log(anotherDate.toLocaleString()); // 27/12/2024, 5:03:00 am

let otherDate = new Date("2023-12-27") // 1 - January and 12 - December (in this format)
console.log(otherDate.toLocaleString());


// Time Stamps
/*
let myTimeStamp = Date.now()
console.log(myTimeStamp); // in miliseconds

console.log(myCreatedDate.getTime()); // in miliseconds 

console.log(Date.now()/1000); // in seconds
console.log(Math.floor(Date.now()/1000));
*/


let newDate = new Date() // current date 
console.log(newDate);

console.log(newDate.getTime()); // in miliseconds
console.log(newDate.getDate());
console.log(newDate.getMonth()); // 0 - January
console.log(newDate.getDay()); // 0 - Sunday

// `${newDate.getDay()} and the time`

// customization
newDate.toLocaleString("default", {
    weekday: "long",
})
