function myName() {
    console.log("S")
    console.log("O")
    console.log("U")
    console.log("V")
    console.log("I")
    console.log("K")
}

myName()
myName //reference

function addTwoNum(num1, num2) {
    return num1 + num2
}
const res = addTwoNum(3,5)
console.log(res)
console.log(addTwoNum(3, 5))


function loginUserMessage(username = "John Doe"){
    return `${username} just logged in`
}

console.log(loginUserMessage())
console.log(loginUserMessage("Souvik"))

function calculateCartPrice(...num1){ // ... => rest operator
    return num1
}
console.log(calculateCartPrice(2,3,5))


const user = {
    userName:"Souvik",
    price:199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.userName} and price is ${anyobject.price}`)
}
// handleObject(user)
handleObject({
    userName:"Souvik",
    price:199
})

const myNewArray = [200,400,100,600]

function returnSecondvalue(getArr){
    return getArr[1]
}
console.log(returnSecondvalue(myNewArray))