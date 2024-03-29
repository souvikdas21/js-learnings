const score = new Number(23)

console.log(score)
console.log(score.toString().length)
console.log(score.toFixed(2))

const otherNumber = 23.469645
console.log(otherNumber.toPrecision(3))

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-in'))



//.....................Maths......................

console.log(Math)
console.log(Math.abs(-2))
console.log(Math.round(4.6))
console.log(Math.ceil(4.1))
console.log(Math.floor(4.9))

console.log((Math.random()*10) + 1)


// Important
const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max - min + 1)) + min)