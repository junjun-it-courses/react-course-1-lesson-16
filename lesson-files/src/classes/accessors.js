// Try to change private property
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
        this.age = 20;
    }
    return User;
}());
var user = new User('Vladimir');
// user.age = 30;
// Property 'age' is private and only accessible within class 'User'
// Get access to private property
var User2 = /** @class */ (function () {
    function User2(name) {
        this.name = name;
        this.age = 20;
    }
    User2.prototype.setAge = function (age) {
        this.age = age;
    };
    Object.defineProperty(User2.prototype, "myAge", {
        set: function (age) {
            this.age = age;
        },
        enumerable: false,
        configurable: true
    });
    return User2;
}());
var user2 = new User2('Vladimir');
// user.setAge(20);	// 30
// user.myAge = 21;	// 31
