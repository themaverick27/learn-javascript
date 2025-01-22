// for loop 

for(let i = 0; i < 10; i++){
    const element  = i;
    if(element == 5){
        // console.log("5 number")
    }
    // console.log(element);
}

for (let i = 1; i <= 10; i++) {
    // console.log(`i (OUTER LOOP): ${i}`);
   for (let j = 1; j <= 5; j++) {
        // console.log(`j (inner loop): ${j}`);
   }
}

let myArr = ["alien", "copilot", "ms store", "git"]

for(let index = 0; index < myArr.length; index++){
    // console.log(myArr[index]);
}



// break and continue keyword

// break - jumps out of the loop
for (let index = 1; index <= 10; index++) {

    if(index == 5){
        console.log("Detected value 5");
        break;
    }
    console.log(`value of i is ${index}`);
}

// continue - terminates the current iteration of the loop
for (let index = 1; index <= 10; index++) {
  if (index == 5) {
    console.log("Detected value 5");
    continue;
  }
  console.log(`value of i is ${index}`);
}
