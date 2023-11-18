class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}vikram`
    }

    set password(value){
        this._password = value
    }
}

const vikram = new User("vikram@singh.ai", "abc")
console.log(vikram.email);