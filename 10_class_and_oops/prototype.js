// let myName = "vikram     "
// let mychannel = "vsSingh     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.vikram = function(){
    console.log(`vikram is present in all objects`);
}

Array.prototype.heyVikram = function(){
    console.log(`Vikram says hello`);
}

// heroPower.vikram()
// myHeros.cikram()
// myHeros.heyVikram()
// heroPower.heyVikram()

// inheritance

const User = {
    name: "vikram",
    email: "vikram@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "VikramSIngh     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"vikram".trueLength()
"coolvikram".trueLength()
