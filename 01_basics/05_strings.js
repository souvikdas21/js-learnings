const namee = "Souvik Das"
const repoCount = 10

console.log(namee + repoCount +" value")

console.log(`Hello my name is ${namee} and my repo count is ${repoCount}`)


const gameName = new String("Souvik-Das")
const game = "Valorant"

console.log(gameName[0])  //S
console.log(game[0]) //V

console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(5))

console.log(gameName.indexOf('i'))
console.log(gameName.substring(1,4)) //ouv

const anotherString = gameName.slice(-8,4) 
console.log(anotherString) //uv

const newStringOne = "   Souvik"
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://souvik.com/welcome%val"
console.log(url.replace("souvik","diggie"))
console.log(url.includes("%"))

//string => array
console.log(gameName.split(""))
console.log(gameName.split(" "))
console.log(gameName.split("-"))