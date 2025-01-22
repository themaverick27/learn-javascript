// for in loop

const lang = {
    js: "javascript",
    cpp: "c++",
    py: "python",
    rb: "ruby"
}

for (const key in lang) {
    // console.log(key); // print keys of object
    // console.log(lang[key]); // print value of keys
}


const programming = ['cpp', 'ruby', 'dart', 'javascript', 'golang']
for (const key in programming) {
    // console.log(key); // print keys (index) of arr[]
    // console.log(programming[key]);
}



const map = new Map();
map.set("a", 97);
map.set("b", 98);
map.set("c", 99);
map.set("d", 100);
map.set("e", 101);
map.set("a", 97); // not inserted

// console.log(map); // Map(5) { 'a' => 97, 'b' => 98, 'c' => 99, 'd' => 100, 'e' => 101 }

for (const key in map) {
  // console.log(key); // do not print anything, as map is non-iterable object
}

