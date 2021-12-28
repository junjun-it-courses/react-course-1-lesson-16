// Example 1
class MyClass {
    static x = 0;
    static printX() {
        console.log(MyClass.x);
    }
}
console.log(MyClass.x);
MyClass.printX();



// Example 2
class MyClass2 {
    private static x = 0;
}
// console.log(MyClass2.x);
// Property 'x' is private and only accessible within class 'MyClass'.



// Example 3
class Base {
    static getGreeting() {
        return "Hello world";
    }
}

class Derived extends Base {
    myGreeting = Derived.getGreeting();
}