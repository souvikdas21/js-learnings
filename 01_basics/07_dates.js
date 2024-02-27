// Dates

let myDate = new Date()
console.log(typeof myDate)
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleDateString())

// let myCreatedDate = new Date(2023,0,23) //In this format month starts from 0
// let myCreatedDate = new Date(2023,0,23,5,3)
// let myCreatedDate = new Date("01-16-2023")

// console.log(myCreatedDate.toDateString())
// console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(Math.floor(Date.now()/1000)) //In seconds

let newDate = new Date()
console.log(newDate.getMonth() + 1)

newDate.toLocaleString('default',{
    weekday : "long",
})