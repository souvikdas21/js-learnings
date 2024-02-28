const user = {
    username: "souvik",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username} ,Welcome to website`)
        console.log(this)
    }
}
user.welcomeMessage()
user.username = "Sam"
user.welcomeMessage()

console.log(this)

function one(){
    let username = "souvik"
    console.log(this.username)
}
one()

const two = () =>{
    const username = "souvikkk"
    console.log(this)
}
two()

// const addTwo = (num1,num2) =>{
//     return num1 + num2
// } 
// console.log(addTwo(2,7))

// const addTwo = (num1,num2) => num1 + num2 //implicit return
const addTwo = (num1,num2) => ({username:"souvikkkk"})//object return
console.log(addTwo(2,7))


