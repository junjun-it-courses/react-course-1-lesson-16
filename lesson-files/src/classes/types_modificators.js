// Class types modificators
var User = /** @class */ (function () {
    function User(name, age, email, pass) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.pass = pass;
    }
    return User;
}());
var human = new User('Vladimir', 20, 'vlad_sha@gmail.com', 38092713710);
human.name;
// "Vladimir"
// human.email;
// Prop 'email' is private and only accessible within class 'User'
// human.age;
// Prop 'age' is protected and only accessible within class 'User' and its subclasses
// human.pass = 42;
// Cannot assign to 'pass' because it is a read-only property
//# sourceMappingURL=types_modificators.js.map