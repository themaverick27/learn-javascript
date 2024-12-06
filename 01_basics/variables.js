// const and variables in javascript

const accountId = 254566
let accountEmail = "johncena@gmail.com"
var accountPassword = "147147147"
accountCity = "Delhi"
let accountState; // prints undefined

// accountId = 909090 // not allowed as the variable accountID is constant

accountEmail = "yupee01@gmail.com"
accountPassword = "741741741"
accountCity = "Pune"

console.log(accountId)

/*
Note: var keyword - Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
