// Shorthand property names
const name = "John";
const age = 25;

const person = { name, age };

// Computed property names
const propName = "name";

const person2 = {
  [propName]: "John",
};

// Method shorthand
const person3 = {
  name: "John",
  sayHello() {
    console.log(`Hello, ${this.name}!`);
  },
};

// Object method definition
const calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
};

console.log(calculator.add(5, 3)); // Output: 8
console.log(calculator.subtract(10, 4)); // Output: 6
