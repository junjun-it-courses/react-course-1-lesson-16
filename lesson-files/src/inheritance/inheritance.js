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
var Animal = /** @class */ (function () {
    function Animal(name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.type = 'Animal';
        // some logic here...
    }
    Animal.prototype.getAnimalNickName = function () {
        return this.type + this.age;
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'Shaitan Vladimir Sergeevich';
        return _this;
    }
    return Dog;
}(Animal));
// const animal = new Animal('Vova', 'male', 69);
// OK!
// const animalDog = new Dog(17)
// Dog class expects 3 params got 1
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(age) {
        var _this = this;
        var catName = 'Shaitan Vladimir Sergeevich';
        _this = _super.call(this, catName, 'female', age) || this;
        return _this;
    }
    return Cat;
}(Animal));
var animal = new Animal('Vova', 'male', 69);
var animalCat = new Cat(69);
