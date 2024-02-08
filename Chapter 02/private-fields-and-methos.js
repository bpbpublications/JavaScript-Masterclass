class Person {
  #name; // Private class field

  constructor(name) {
    this.#name = name;
  }

  #codeName() { // private method
    return `Agent ${this.#name}`;
  }

  getName() {
    return this.#name;
  }

  getCodeName() {
    return this.#codeName();
  }
}

const person = new Person("John");
console.log(person.#name); // Error: Private field '#name' must be declared in an enclosing class
console.log(person.#codeName); // Error: Private field '#codeName ' must be declared in an enclosing class
console.log(person.getName()); // Output: "John"
console.log(person.getCodeName()); // Output: "Agent John"
