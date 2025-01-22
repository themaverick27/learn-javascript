// for each loop

const sports = ["badminton", "cricket", "football", "basketball", "table tennis"]

sports.forEach(function (val){
    // console.log(val);
})

sports.forEach( (item) => {
    // console.log(item);
})

sports.forEach( (value, index, arr) => {
    // console.log(value, index, arr);
})


function printItem(item){
    console.log(item);
}
// sports.forEach(printItem)


// [{} {} {}] - object inside arrray

const myList = [
    {
        id: 123,
        name: "xyz"
    },
    {
        id: 121,
        name: "abc"
    },
    {
        id: 172,
        name: "pqr"
    }
]

myList.forEach( (item) => {
    console.log(item);
    // console.log(item.id);
    // console.log(item.name);
})