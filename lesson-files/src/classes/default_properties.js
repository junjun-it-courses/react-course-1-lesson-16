// Class default properties
var User = /** @class */ (function () {
    function User(name) {
        this.age = 20;
        this.email = 'vlad_sha@gmail.com';
        this.name = name;
    }
    return User;
}());
var user = new User('Vladimir');
user; // { name: "Vladimir", age: 20, email: "vlad_sha@gmail.com" }
// Class default properties (example)
var User2 = /** @class */ (function () {
    function User2(name) {
        this.age = 20;
        this.email = 'vlad_sha@gmail.com';
        this.name = name;
    }
    User2.prototype.getPass = function () {
        return "".concat(this.email).concat(this.age);
    };
    return User2;
}());
var user2 = new User2('Vladimir');
// user2.getPass(); // "vlad_sha@gmail.com20"
//# sourceMappingURL=default_properties.js.map