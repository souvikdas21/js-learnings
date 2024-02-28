// singleton
// Don't Blame The Flower, Blame The Environment 🤞
//object literals
const myName = Symbol("abd")
const jsUser = {
    name: "Souvik",
    age: 22,
    [myName]:"hoho",
    location: "Kolkata",
    email: "abc@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Tuesday"]
}

console.log(jsUser.email)
console.log(jsUser["email"])
// Object.freeze(jsUser)
jsUser.email = "def@gmail.com"
console.log(jsUser)

jsUser.greeting = function(){
    console.log("Hello JS User")
}
jsUser.greetingTwo = function(){
    console.log(`hello JS user,${this.name}`)
}

console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())