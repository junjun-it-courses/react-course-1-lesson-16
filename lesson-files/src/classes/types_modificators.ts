// Class types modificators
class User {

    public name: string;
    private email: string;
    protected age: number;
    readonly pass: number;

    constructor(name: string, age: number, email: string, pass: number) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.pass = pass;
    }

}

const human = new User(
    'Vladimir',
    20,
    'vlad_sha@gmail.com',
    38092713710
);

human.name;
// "Vladimir"
// human.email;
// Prop 'email' is private and only accessible within class 'User'
// human.age;
// Prop 'age' is protected and only accessible within class 'User' and its subclasses
// human.pass = 42;
// Cannot assign to 'pass' because it is a read-only property
