



// object literals


const mySym = Symbol("key1")


const JsUser = {
    name: "Vikram",
    "full name": "Vikram SIngh",
    age: 23,
    location: "Pune",
    email: "vikram@gmail.com",
    isLoggedIn: false,
    lastLoginInDays: ["Monday", "Saturday"],
    [mySym]: "myKey1"  // use as key
}

console.log(JsUser.email) // vikram@gmail.com
console.log(JsUser["full name"]) // Vikram SIngh
console.log(JsUser["location"]) // Pune


JsUser.email = "vikram@chatgpt.com"
//Object.freeze(JsUser) // no change after freeze
JsUser.email = "vikram@microsoft.com"
console.log(JsUser)


// object with function
JsUser.greeting = function(){
    console.log(`Hello JS user, ${this.name}`);
}

JsUser.greetingTwo = function(){
    console.log("Hello JS user"); 
}

console.log(JsUser.greeting()) // Hello JS user, Vikram
console.log(JsUser.greetingTwo()) // // Hello JS user