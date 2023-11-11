"use strict"  // treat all JS code as newer version



// Primitive  7 types
//            String , Number , Boolean , null , undefined , Symbol

// Reference (Non primitive)
//            Array , Objects , Functions



let name = "vikram"
let age = 27
let isLoggedIn = false


// number
// string
// boolean
// bigint
// null => standalone value
// undefined => unsigned value
// sumbol => unique
// 

console.log(typeof undefined) // undefined
console.log(typeof null)  // object


const id = Symbol('1')
const otherId = Symbol('1') 
console.log(id) // Symbol(1)
console.log(otherId) // Symbol(1)
console.log(id === otherId) // false


const heros = ["Vikram", "Harsha" , "Mitya", "Shubha"];


let myObj = {
    name: "Vikram",
    age: 27
}


const myFunction = function(){
    console.log("Hello vikram")
}

 
