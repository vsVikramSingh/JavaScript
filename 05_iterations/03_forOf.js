// for of loop basicaly use for array

// ["", "", ""]
// [{}, {}, {}]

// array
const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    console.log(num);
}


// string
const greetings = "Hello world!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}



// Maps
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

console.log(map);   // print with key value pair

// for loop for map
for (const [key, value] of map) {
    console.log(key, ':-', value);
}


// for use for Object
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [key, value] of myObject) {
    console.log(key, ':-', value);
    
}