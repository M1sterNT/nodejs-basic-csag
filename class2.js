class Person {
    constructor(name) {
        this.name = name;
    }

    sayHi() {
        console.log('Hi, my name is ' + this.name);
    }
}
new Person("WANDEE").sayHi();