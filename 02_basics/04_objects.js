// const tinderUser = new Object() //singleton

const tinderUser = {} //non singleton

tinderUser.id = "123abc"
tinderUser.name = "Souvik"
tinderUser.isLoggedIn = false

console.log(tinderUser)

const regularUser = {
    email:"soem@gmail.com",
    fullname:{
        userfullname:{
            firstName:"Souvik",
            lastName:"Das"
        }
    }
}
console.log(regularUser.fullname.userfullname.lastName)

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"b",4:"c"}
// const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1,...obj2}
console.log(obj3)
console.log(Object.keys(obj3))
console.log(Object.values(obj3))
console.log(Object.entries(obj3))
console.log(obj3.hasOwnProperty('2'))

const course = {
    coursename: "Js so easy",
    price: "999",
    courseInstructor: "Shiva"
}

console.log(course.courseInstructor)

const{courseInstructor : instructor} = course //destructure of object

console.log(instructor)

// const navbar = ({company}) => {

// }

// navbar(company = "Souvik")

//API format

// {
//     "name": "Souvik",
//     "courseName": "JS too easy",
//     "price": "free"
// }

// [
//     {},
//     {},
//     {},
// ]