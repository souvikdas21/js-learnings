const myArr = [0,1,2,3,4,5]
const newArr = new Array(1,2,4,56,8)

console.log(newArr[3])
 
//Array Methods
// newArr.push(3)
// newArr.push(7)
// newArr.pop()

newArr.unshift(11) //like push from front
newArr.shift() //pop from front

console.log(newArr)
console.log(newArr.includes(9))
console.log(newArr.indexOf(2))

const theArr = newArr.join()
console.log(theArr)
console.log(typeof theArr) //string
console.log(typeof newArr) //object

// slice,splice
console.log("A ",myArr)
const myn1 = myArr.slice(1,3)
console.log(myn1)
console.log("B ",myArr)

const myn2 = myArr.splice(1,3)
console.log("C ",myArr)
console.log(myn2)
