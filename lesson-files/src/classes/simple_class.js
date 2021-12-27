// Simple class example
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
// Class types
var User2 = /** @class */ (function () {
    function User2() {
    }
    return User2;
}());
// Class types, including constructor
var User3 = /** @class */ (function () {
    function User3(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    return User3;
}());
var person = new User3('Vladimir', 20, 'vlad_sha@gmail.com');
console.log(person); // { name: "Vladimir", age: 20, nickName: "vlad_sha@gmail.com" }
//# sourceMappingURL=simple_class.js.map