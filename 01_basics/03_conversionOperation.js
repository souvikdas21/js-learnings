let score = true

console.log(typeof score)

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)

// "22" => 22
// "22abc" =>NaN
// true => 1 ; false => 0


let isLoggedIn = ""
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1 => true ; 0 => false
// "" => false
// "abc" => true


let someNumber = 44;
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)


// ................Operations...................

let value = 3
let negvalue = -value
console.log(negvalue)

let str1 = "Hello"
let str2 = " Souvik"

console.log(str1 + str2)

console.log("1" + 2) //12
console.log(1 + "2") //12
console.log("1" + 2 + 2) //122
console.log(1 + 2 + "2") //32


console.log(+true) //1
console.log(+"") //0

let num1,num2,num3

num1 = num2 = num3 = 2+1

console.log(num1)

let gameCounter = 100
const a = gameCounter++
console.log(a) //100
console.log(gameCounter) //101

const b = ++gameCounter
console.log(b) //102
console.log(gameCounter) //102




