// create promise
const promiseOne = new Promise(function(resolve, reject){
    // do an async task
    // db calls, network calls
    
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    }, 1000)
})

// consumption
promiseOne.then(function(){
    console.log("Promise consumed");
})


// another way create and consume
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task 2')
        resolve()
    }, 1000)
}).then(function(){
    console.log('Async 2 resolved');
})


// 
const promiseThird = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Vikram", email: "singh@gmail.com"})
    }, 1000)
}).then(function(user){
    console.log(user);
})

//
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username: "Vikram", pasword: "123"})
        }else{
            reject('ERROR: Somthing went wrong')
        }
    }, 1000)
})

promiseFour
 .then((user) => {
    console.log(user);
    return user.username
})
 .then((username) => {
    console.log(username);
})
 .catch(function(error){
    console.log(error);
}).finally(function(){
    console.log("The promise is either resolved or rejected")
})




//
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "Vikram", pasword: "123"})
        }else{
            reject('ERROR: JS went wrong')
        }
    }, 1000)
})

async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response);
    }catch(error){
        console.log(error);
    }
}

consumePromiseFive();


//

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://dummy.restapiexample.com/api/v1/employees')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }
// getAllUsers();


//
fetch('https://dummy.restapiexample.com/api/v1/employees')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))