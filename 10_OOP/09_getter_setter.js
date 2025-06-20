class User {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return this._email.toUpperCase();
    }
    set email(value){
        this._email = value;
    }

    get password(){
        return `${this._password}xoxo`;
    }

    set password(value){
        this._password = value;
    }
}

const userOne = new User("tom@google.com", "abc");
console.log(userOne.email);
