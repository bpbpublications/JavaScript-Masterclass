const person = {
  name: 'John Doe',
  age: 25,
  occupation: 'Developer',

  greet: function() {
    console.log(`Hello, my name is ${this.name}. I'm a ${this.occupation}.`);
  },
};

console.log(person.name); // Output: John Doe

person.age = 26;
console.log(person.age); // Output: 26

const propertyName = 'occupation';
console.log(person[propertyName]); // Output: Developer

person['occupation'] = 'Engineer';
console.log(person.occupation); // Output: Engineer

person.greet(); // Output: Hello, my name is John Doe. I'm a Developer.
