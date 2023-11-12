// scope

// global object of browser => window

// types  => local/block and global 

// example:

let a = 100;  // global
var b = 200   // global  but there are some problem with var
const c = 300 // global


if(true){
    let a =10 // local
    console.log("Inner a: ", a) // Inner a:  10
    var b = 30 // local
    console.log("Inner b: ", b) // Inner b:  30
    const c = 20 // local
    console.log("Inner c: ", c) // Inner c:  20
}

console.log("Outer a: ", a) // Outer a:  100
console.log("Outer b: ", b) // Outer b:  30        
console.log("Outer c: ", c) // Outer c:  300

// you can see the outer value of b is 200 but in the output value  is 30 so that is the with 'var'.




// nested functon scope

function one(){
    const username = "vikram"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);  // error

    two() // vikram
}
one() 



/******************** Interesting ******************************/
function addone(num){
    return num +1;
}
addone(5)


//// expression
const addtwo = function(num){
    return num + 2;
}
addtwo(5)