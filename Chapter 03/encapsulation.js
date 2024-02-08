class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Calling the parent class's constructor
    this.breed = breed;
  }

  fetch() {
    console.log(`${this.name} fetches the ball.`);
  }
}

// Using the super keyword to call methods in parent classes
class Animal2 {
  speak() {
    console.log('Animal makes a sound.');
  }
}

class Dog2 extends Animal2 {
  speak() {
    super.speak(); // Calling the parent class's speak method
    console.log('Dog barks!');
  }
}

const dog2 = new Dog2();
dog2.speak();

// Overriding inherited methods in derived classes
class Animal3 {
  speak() {
    console.log('Animal makes a sound.');
  }
}

class Dog3 extends Animal3 {
  speak() {
    console.log('Dog barks!');
  }
}

const animal3 = new Animal3();
const dog3 = new Dog3();

animal3.speak(); // Output: Animal makes a sound.
dog3.speak(); // Output: Dog barks!
