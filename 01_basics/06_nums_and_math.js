const score = 400
console.log(score) // 400

const balance = new Number(200)
console.log(balance) // [Number: 200]
console.log(balance.toString()) // 200
console.log(balance.toString().length) // 3
console.log(balance.toFixed(2)) // 200.00


const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3)) // 23.9

const hundreds = 1000000
console.log(hundreds.toLocaleString()) // 1,000,000
console.log(hundreds.toLocaleString('en-IN')) // 10,00,000




// ************************** Math *********************************

Math => Object

console.log(Math.abs(-5)) // 5
console.log(Math.round(4.6)) // 5
console.log(Math.ceil(4.2)) // 5
console.log(Math.floor(4.9)) // 4
console.log(Math.min(4,2,9,3,6)) // 2
console.log(Math.max(4,2,9,3,6)) // 9

console.log(Math.random()) // value btwn 0 to 1 like 0.7748804633043882
console.log((Math.random()*10) +1) //  value btwn 1 to 9 in decimal
console.log((Math.floor(Math.random()*10) +1)) // value btwn 1 to 9



const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min +1)) + min)  // value btwn 10 to 20