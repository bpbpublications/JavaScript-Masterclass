let student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 20,
  grade: 'A',
  fullName: function() {
    return this.firstName + ' ' + this.lastName;
  }
};

// properties can be accessed using dot notation or bracket notation
console.log(student.firstName); // "John"
console.log(student['lastName']); // "Doe"

// methods can be called using dot notation or bracket notation
console.log(student.fullName()); // "John Doe"


// Object.assign
let obj1 = { a: 1 };
let obj2 = { b: 2 };
let combinedObj = Object.assign(obj1, obj2);
console.log(combinedObj); // { a: 1, b: 2 }

// Object.create
let person = {
  isHuman: false,
  printIntroduction: function() {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  }
};

let me = Object.create(person);
me.name = 'Matthew';
me.isHuman = true;
me.printIntroduction();


// Object.keys
let obj = { a: 1, b: 2, c: 3 };
console.log(Object.keys(obj)); // ['a', 'b', 'c']

// Object.values
let obj = { a: 1, b: 2, c: 3 };
console.log(Object.values(obj)); // [1, 2, 3]

// Object.entries
let obj = { a: 1, b: 2, c: 3 };
console.log(Object.entries(obj)); // [['a', 1], ['b', 2], ['c', 3]]

