
function sayMyName(){
    console.log("Vikram");
    console.log("Singh")
}

 // sayMyName()

 function add(number1, number2){
    console.log(number1 + number2)
 }
 add(10,10)  // 20


 /******************************** */
 function add1(number1, number2){
    let result = number1 + number2
    return result
 }
 
 const final = add1(10,30)
 console.log("Final result: ", final)  //  Final result:  40


//********************************* */
 function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a user name");
        return
    }
    return `${username} just logged in`
 }
console.log(loginUserMessage("Vikram Singh")) // Vikram Singh just logged in


/******************************************/
// rest operator/ spreed operator
function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(100, 200, 3000)) // [ 100, 200, 3000 ]


/*************************************/
//object
const user = {
    username: "vikram",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);  // Username is Vikram and price is 399
}

//handleObject(User)
handleObject({
    username: "Vikram",
    price: 399
})


/*******************************************/
// array
const myNewArray = [200, 300, 100, 500]

function returnSecondValue(getArray){
    return getArray[2]
}

console.log(returnSecondValue(myNewArray)) // 100
console.log(returnSecondValue([200, 300, 800, 100])) // 800


/*********************************************/
// arrow function

