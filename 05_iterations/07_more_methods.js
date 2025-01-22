// map method - iterates on every element (be default), return values

const myNumbersList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbersList.map( (num) => num + 10)
// console.log(newNums);


// chaining - using one or method with other methods

const myNums = myNumbersList.map((num) => num * 10).map((num) => num + 1);
// console.log(myNums);

const otherNums = myNumbersList
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num > 45);
// console.log(otherNums);




// reduce method 

const myNumbers = [1, 2, 3, 4, 5]

const finalValue = myNumbers.reduce(function (accumulator, currentValue) {
    // console.log(`acc: ${accumulator} and current value: ${currentValue}`)
    return accumulator + currentValue
}, 0)

// console.log(finalValue);


// arrow fn - reduce method
const myTotal = myNumbers.reduce( (accumulator, currentValue) => accumulator + currentValue, 0)
// console.log(myTotal);



const shoppingCart = [
    {
        itemName: 'js course',
        price: 1999
    },
    {
        itemName: 'python course',
        price: 999
    },
    {
        itemName: 'web course',
        price: 2999
    },
    {
        itemName: 'tools course',
        price: 5999
    }
]


const totalPrice = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
// console.log(totalPrice);
