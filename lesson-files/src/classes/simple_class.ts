// Simple class example
class User {

}

// Class types
class User2 {

    name: string;
    age: number;
    nickName: string;

}

// Class types, including constructor
class User3 {

    name: string;
    age: number;
    email: string;

    constructor(name: string, age: number, email: string) {
        this.name = name;
        this.age = age;
        this.email = email;
    }

}

const person = new User3('Vladimir', 20, 'vlad_sha@gmail.com');

console.log(person);	// { name: "Vladimir", age: 20, nickName: "vlad_sha@gmail.com" }