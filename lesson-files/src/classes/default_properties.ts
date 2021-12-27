// Class default properties
class User {

    name: string;
    age: number = 20;
    email: string = 'vlad_sha@gmail.com';

    constructor(name: string) {
        this.name = name;
    }

}

const user = new User('Vladimir');

user;   // { name: "Vladimir", age: 20, email: "vlad_sha@gmail.com" }

// Class default properties (example)
class User2 {

    name: string;
    age: number = 20;
    email: string = 'vlad_sha@gmail.com';

    constructor(name: string) {
        this.name = name;
    }

    getPass(): string {
        return `${this.email}${this.age}`;
    }

}

const user2 = new User2('Vladimir');

// user2.getPass(); // "vlad_sha@gmail.com20"