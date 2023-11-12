// arrow function

// this => reffer current context

const user = {
    username: "Vikram",
    price: 199,
    
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
    }

}
user.welcomeMessage() // Vikram, welcome to website

user.username = " Singh"
user.welcomeMessage()  // Singh, welcome to website

console.log(this); // {} 



/*****************************************/
// this under function

function demo(){
    console.log(this) // <ref *1> Object [global] {.........
}
demo()

function demo2(){
    const name = "vikram"
    console.log(this.name) // undefined
}
demo2()



/*******************************************/
// arrow function

const arrowFunc = () => {
    let name = "vikram singh"
    console.log(this.name) // undefined
    console.log(this) // {}
}
arrowFunc() 


// explicite return
const add1 = (num1, num2) => {
    return num1 + num2;
}
console.log(add1(2, 2)) // 4

//  emplicite return
const add2 = (num1, num2) =>  num1 + num2
console.log(add2(2, 2)) // 4

const add3 = (num1, num2) =>  (num1 + num2) 
console.log(add3(2, 2)) // 4

// return object
const name = () => ({username: "Vikram singh"})
console.log(name()) // { username: 'Vikram singh' }


