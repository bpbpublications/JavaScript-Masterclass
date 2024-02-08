class Person {
  #name;
  constructor(name) {
    this.#name = name;
  }

  get name() {
    return this.#name;
  }

  set name(newName) {
    this.#name = newName;
  }
}

const person = new Person('John Doe');
console.log(person.name); // Output: John Doe

person.name = 'Jane Smith';
console.log(person.name); // Output: Jane Smith
