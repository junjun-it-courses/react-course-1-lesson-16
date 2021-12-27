// Try to change private property
class User {

    private age: number = 20;

    constructor(public name: string) {}
}

const user = new User('Vladimir');

// user.age = 30;
// Property 'age' is private and only accessible within class 'User'

// Get access to private property
class User2 {

    private age: number = 20;

    constructor(public name: string) {}

    setAge(age: number) {
        this.age = age;
    }

    set myAge(age: number) {
        this.age = age;
    }
}

const user2 = new User2('Vladimir');

// user.setAge(20);	// 30
// user.myAge = 21;	// 31