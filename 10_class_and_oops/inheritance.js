class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const test = new Teacher("vikram", "vikram@teacher.com", "123")

test.logMe()
const masalaChai = new User("singhvikram")

masalaChai.logMe()

console.log(test instanceof User);