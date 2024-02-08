function Person(name) {
  this.name = name;
}

const person = new Person('John Doe');
console.log(Object.getPrototypeOf(person)); // Output: Person {}

Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}.`);
};

const person1 = new Person('John Doe');
const person2 = new Person('Jane Smith');

person1.greet(); // Output: Hello, my name is John Doe.
person2.greet(); // Output: Hello, my name is Jane Smith.

// Parent object
const personPrototype = {
  greet() {
    console.log('Hello, I am a person.');
  },
};

// Child object
const john = Object.create(personPrototype);
john.name = 'John Doe';

john.greet(); // Output: Hello, I am a person.
console.log(john.name); // Output: John Doe

john.greet = function() {
  console.log(`Hello, my name is ${this.name}.`);
};

john.greet(); // Output: Hello, my name is John Doe.

const john2 = {
  name: 'John Doe',
  greet() {
    super.greet(); // Calling the parent's greet method
    console.log(`Hello, my name is ${this.name}.`);
  },
};

Object.setPrototypeOf(john2, personPrototype);
john2.greet();
