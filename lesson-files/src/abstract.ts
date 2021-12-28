abstract class Human {

    constructor(public name: string, public age: number) {}

    greet(): void {
        console.log(this.name);
    }

    abstract getPass(): string;   // Abstract method

}

// const max = new Human('Max', 20);
// Cannot create an instance of an abstract class

// Create class using Abstraction
class Vlad extends Human {
    // Non-abstract class 'Vlad' does not implement inherited abstract member
    //'getPass' from class 'User'

    constructor(age: number) {
        const name: string = 'Vladimir';
        super(name, age);
    }

}

class Helen extends Human {
    constructor(age: number) {
        const name: string = 'Helen';
        super(name, age);
    }


    getPass() {
        return '0000';
    }
}

const helen = new Helen(18);
helen.greet();