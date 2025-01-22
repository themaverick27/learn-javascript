//  for of loop 

// ["", "", ""]
// [{}, {}, {}]

const myArr = [1, 2, 3, 4, 5]
for (const num of myArr) {
    // console.log(num);
}

const greeting = "Hello world!"
for (const ch of greeting) {
    // console.log(`Each character: ${ch}`);
}


// maps -> is a object, key-value pair, stores the original insertion order of the keys
// no duplicates keys, map is non-iterable

const map = new Map();
map.set('a', 97)
map.set('b', 98)
map.set('c', 99)
map.set('d', 100)
map.set('e', 101)
map.set('a', 97); // not inserted

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ': ', value);
}


const myObj = {
    speed: "NFS",
    action: "Spiderman"
}

for (const [key, value] of myObj) {
    // console.log(key, ": ", value); // error - object is not iterated (through for of loop)
}