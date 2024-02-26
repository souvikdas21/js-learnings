const accountId = 1234
let accountEmail = "abc@gmail.com"
var accountpassword = "12345"
accountCity = "Kolkata"
let accountState

// accountId = 2  //not allowed

accountEmail = "def@gmai.com"
accountpassword = "2001"
accountCity = "Mumbai"

console.log(accountId)
/*
Prefer not to use var 
because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountpassword,accountCity,accountState])