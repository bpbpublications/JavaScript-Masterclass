function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person1 = new Person('John Doe', 25);
const person2 = new Person('Jane Smith', 30);

const person = new Person('John Doe', 25);

class Person2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}. I'm ${this.age} years old.`);
  }
}

const person3 = new Person2('John Doe', 25);
person3.greet(); // Output: Hello, my name is John Doe. I'm 25 years old.
