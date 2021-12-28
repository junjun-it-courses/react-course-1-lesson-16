var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Human = /** @class */ (function () {
    function Human(name, age) {
        this.name = name;
        this.age = age;
    }
    Human.prototype.greet = function () {
        console.log(this.name);
    };
    return Human;
}());
// const max = new Human('Max', 20);
// Cannot create an instance of an abstract class
// Create class using Abstraction
// class Vlad extends Human {
//     // Non-abstract class 'Vlad' does not implement inherited abstract member
//     //'getPass' from class 'User'
//
//     constructor(age: number) {
//         const name: string = 'Vladimir';
//         super(name, age);
//     }
//
// }
var Helen = /** @class */ (function (_super) {
    __extends(Helen, _super);
    // Non-abstract class 'Vlad' does not implement inherited abstract member
    //'getPass' from class 'User'
    function Helen(age) {
        var _this = this;
        var name = 'Helen';
        _this = _super.call(this, name, age) || this;
        return _this;
    }
    Helen.prototype.getPass = function () {
        return '0000';
    };
    return Helen;
}(Human));
