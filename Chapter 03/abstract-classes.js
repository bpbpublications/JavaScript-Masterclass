// Abstract Class Animal
class Animal {
  constructor() {
    if (this.constructor == Animal) {
      throw new Error("Abstract classes can't be instantiated.");
    }
  }

  say() {
    throw new Error("Method 'say()' must be implemented.");
  }

  eat() {
    console.log("eating");
  }
}

// Concrete Class Dog
class Dog extends Animal {
  say() {
    console.log("bark");
  }
}

// Concrete Class Cat
class Cat extends Animal {
  say() {
    console.log("meow");
  }
}

// Concrete Class Horse
class Horse extends Animal {}

// Usage
new Dog().eat(); // eating
new Cat().eat(); // eating
new Horse().eat(); // eating

new Dog().say(); // bark
new Cat().say(); // meow
new Horse().say(); // Error: Method say() must be implemented.

new Animal(); // Error: Abstract classes can't be instantiated.
