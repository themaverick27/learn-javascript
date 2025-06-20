class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse() {
        console.log(`A new course was added by ${this.username}`);
    }
}


const userOne = new Teacher("tom", "tom@teacher.com", "123");
userOne.logMe();


const userTwo = new User("john");
userTwo.logMe();

console.log(userOne instanceof User);
