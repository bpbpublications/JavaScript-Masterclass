// typeof operator
let name = "John";
let age = 30;

console.log(typeof name); // "string"
console.log(typeof age); // "number"

// instanceof operator
class Person {
  constructor(name) {
    this.name = name;
  }
}

let john = new Person("John");

console.log(john instanceof Person); // true
console.log(john instanceof Object); // true (all objects are instances of Object)
console.log(john instanceof Array); // false (john is not an instance of Array)
