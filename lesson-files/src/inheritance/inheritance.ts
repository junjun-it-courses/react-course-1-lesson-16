class Animal {
    protected type: string = 'Animal';

    constructor(
        public name: string,
        public gender: string,
        public age: number
    ) {
        // some logic here...
    }

    getAnimalNickName(): string {
        return this.type + this.age;
    }

}

class Dog extends Animal {
    name: string = 'Shaitan Vladimir Sergeevich';
}


// const animal = new Animal('Vova', 'male', 69);
// OK!

// const animalDog = new Dog(17)
// Dog class expects 3 params got 1


class Cat extends Animal {
    constructor(age: number) {
        const catName: string = 'Shaitan Vladimir Sergeevich';

        super(catName, 'female', age);
    }

    getAnimalNickName(): string {
        return this.type + this.age;
    }
}


const animal = new Animal('Vova', 'male', 69);
const animalCat = new Cat( 69);