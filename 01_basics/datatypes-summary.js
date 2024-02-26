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

