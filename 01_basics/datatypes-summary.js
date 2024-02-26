// Primitive 7 types
// String,Number,Boolean,null,undefined,Symbol,BigInt

//JS Dynamically Typed Language(because we don't have to define datatypes)

const a = 12.4
console.log(typeof a)

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id) //Symbol(123)
console.log(anotherId) //Symbol(123)
console.log(id == anotherId) //false


const bigNum = 5785234896529836589589n //atlast n bor bigInt

// Reference / Non Primitive
//Array,Objects,Functions

const hero = ["Spiderman","Ironman"]
let myObj = {
            name: "Souvik Das",
            age: 22,
        }
const myFunction = function(){
    console.log("hello world");
}

console.log(typeof bigNum) //bigint
console.log(typeof hero) //object
console.log(typeof myObj) //object
console.log(typeof myFunction) //function

//.................Memory...................

// Stack(Primitive),Heap(Non-Primitive)

//Primitive

let myYoutubeName = "Diggie"
let anotherName = myYoutubeName
anotherName = "Das"

console.log(anotherName) //Das
console.log(myYoutubeName) //Diggie

//Non primitive

let user = {
    email : "user@gmail.com",
    upi : "user1@ybl"
}

let user1 = user

user1.email = "simon@gmail.com"
console.log(user1.email)
console.log(user.email)