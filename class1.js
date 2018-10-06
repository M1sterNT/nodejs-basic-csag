function Person(name) {
    this.name = name;
}

Person.prototype.sayHi = function () {
    console.log('Hi, my name is ' + this.name);
}
new Person("wandee").sayHi();
