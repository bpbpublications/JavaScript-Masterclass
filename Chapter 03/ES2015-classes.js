class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  }
}

const person = new Person('John Doe');
console.log(person.name); // Output: John Doe
person.greet(); // Output: Hello, my name is John Doe.

class Person2 {
  constructor(name) {
    this.name = name;
  }

  static count = 0; // Static class property

  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  }

  static getCount() { // Static class method
    console.log(`Total count: ${Person2.count}`);
  }
}

const person2 = new Person2('John Doe');
person2.greet(); // Output: Hello, my name is John Doe.

Person2.count = 5; // Accessing static class property
Person2.getCount(); // Output: Total count: 5


// Extending classes using the extends keyword
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  // Child class extending the Animal parent class
  constructor(name, breed) {
    super(name); // Invoking the parent class constructor
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} barks!`);
  }
}

// Overriding methods in derived classes
class Animal2 {
  speak() {
    console.log('Animal makes a sound.');
  }
}

class Dog2 extends Animal2 {
  speak() {
    console.log('Dog barks!');
  }
}

const dog2 = new Dog2();
dog2.speak(); // Output: Dog barks!

// Accessing parent class methods using the super keyword
class Animal3 {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog3 extends Animal3 {
  constructor(name, breed) {
    super(name); // Invoking the parent class constructor
    this.breed = breed;
  }

  speak() {
    super.speak(); // Invoking the parent class's speak method
    console.log(`${this.name} barks!`);
  }
}
