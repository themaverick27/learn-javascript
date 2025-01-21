// rest operator
function calculateCartPrice(...num){
    return num
}
// console.log(calculateCartPrice(200, 400, 600)); // [200, 400, 600]


function calculateListPrice(val1, val2, ...num){
    return num
}
// console.log(calculateListPrice(200, 400, 600, 8000)); // [600, 8000]


// passing object as arguments
const user = {
    course: "web",
    price: 399
}

function handleObject(anyobject){
    console.log(
      `user course is ${anyobject.course} and the price is ${anyobject.price}`
    );
}
handleObject(user)

handleObject({
    course: "android", 
    price: 999
})

// passing array as arguments
const myArray = [200, 400, 600, 800]

function returnSecondValue(arr){
    return arr[1]
}

console.log(returnSecondValue(myArray));
console.log(returnSecondValue([200, 400, 600, 800]));

