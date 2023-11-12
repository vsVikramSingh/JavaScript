// singleton


//const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "12ab"
tinderUser.name = "vikram"
tinderUser.isLoggedIn = false

const regularUser = {
    email: "vikram@gmail.com",
    fullname: {
        userfullname: {
        firstname: "vikram",
        lastname: "singh"
        }
    }
}

console.log(regularUser) // { email: 'vikram@gmail.com', fullname: { userfullname: { firstname: 'vikram', lastname: 'singh' } }
console.log(regularUser.fullname.userfullname) // { firstname: 'vikram', lastname: 'singh' }


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "5"}
const obj3 = { obj1, obj2}
const obj4 = Object.assign(obj1, obj2)  // { '1': 'a', '2': 'b', '3': 'c', '4': '5' }
const obj5 = Object.assign({}, obj1, obj2) // { '1': 'a', '2': 'b', '3': 'c', '4': '5' }
console.log(obj5) 


const obj6 = {...obj1, ...obj2} // { '1': 'a', '2': 'b', '3': 'c', '4': '5' } 
console.log(obj6)


// Important 
const users = [
    {
        id: 1,
        email: "vikram1@email.com"
    },
    {
        id: 2,
        email: "vikram2@email.com"
    }
]

users[1].email
console.log(tinderUser); // { id: '12ab', name: 'vikram', isLoggedIn: false }

console.log(Object.keys(tinderUser)) // [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)) // [ '12ab', 'vikram', false ]
console.log(Object.entries(tinderUser)) // [ [ 'id', '12ab' ], [ 'name', 'vikram' ], [ 'isLoggedIn', false ] ]
console.log(tinderUser.hasOwnProperty('isLoggedIn')) // true



// destructuring 
const course = {
    coursename: "JS",
    price: "999",
    courseInstructor: "Vikram"
}

const {courseInstructor: instructor} = course
console.log(instructor)  // Vikram




// see objects function 