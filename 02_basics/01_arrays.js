// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["Vikram", "Harshal", "Mitya", "Shubham"]

console.log(myArr[0]) // 0
console.log(myHeros[0]) // Vikram


/********** Methods *********/

myArr.push(6) // add new element at last position
myArr.pop() // remove last element

myArr.unshift(9) // shift all element after 9
myArr.shift() // get all elements without first element 
console.log(myArr)


console.log(myArr.includes(3)) // true
console.log(myArr.indexOf(3)) // 3


// join
const newArr = myArr.join()
console.log(myArr) // [ 0, 1, 2, 3, 4, 5 ]
console.log(newArr) // 0,1,2,3,4,5 type is string


// slice
console.log("A ", myArr) // A  [ 0, 1, 2, 3, 4, 5 ]
const myn1 = myArr.slice(1, 3) 
console.log(myn1)  // [ 1, 2 ]
console.log("B ", myArr) // A  [ 0, 1, 2, 3, 4, 5 ]

// splice
console.log("C ", myArr) // A  [ 0, 1, 2, 3, 4, 5 ]
const myn2 = myArr.splice(1, 3) 
console.log(myn2)  // [ 1, 2, 3 ]
console.log("D ", myArr) // A  [ 0, 4, 5 ]