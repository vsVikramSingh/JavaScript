const User = {
    _email: 'vikram@gmail.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const test = Object.create(User)
console.log(test.email);