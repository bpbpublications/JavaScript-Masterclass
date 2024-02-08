// Global scope
function greet() {
  console.log("Hello, " + this.name);
}

var name = "John";
greet(); // Output: Hello, John

// Standalone functions
var person = {
  name: "Alice",
  greet: function() {
    console.log("Hello, " + this.name);
  }
};

var greetFunc = person.greet;
greetFunc(); // Output: Hello, undefined

//Callback functions
function process(data, callback) {
  console.log("Processing: " + data);
  callback();
}

var obj = {
  name: "Jane",
  greet: function() {
    process("Some data", function() {
      console.log("Hello, " + this.name);
    });
  }
};

obj.greet(); // Output: Hello, undefined

// Implicit binding
var person2 = {
  name: "John",
  age: 30,
  greet: function() {
    console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
  }
};

person2.greet(); // Output: Hello, my name is John and I am 30 years old.

var person3 = {
  name: "Alice",
  age: 25
};

person3.greet = person2.greet;
person3.greet(); // Output: Hello, my name is Alice and I am 25 years old.

// Explicit binding
function greet4() {
  console.log("Hello, " + this.name);
}

var person4 = {
  name: "John"
};

greet4.call(person4); // Output: Hello, John

// The `apply()` method
function greet5(message) {
  console.log(message + ", " + this.name);
}

var person5 = {
  name: "John"
};

greet5.apply(person5, ["Hello"]); // Output: Hello, John

// The `bind()` method
function greet6() {
  console.log("Hello, " + this.name);
}

var person6 = {
  name: "John"
};

var greetPerson6 = greet6.bind(person6);
greetPerson6(); // Output: Hello, John

// Arrow functions and lexical binding
var person7 = {
  name: "John",
  sayHello: function() {
    setTimeout(() => {
      console.log("Hello, " + this.name);
    }, 1000);
  }
};

person7.sayHello(); // Output: Hello, John

var person8 = {
  name: "John",
  sayHello: function() {
    setTimeout(function() {
      console.log("Hello, " + this.name);
    }, 1000);
  }
};

person8.sayHello(); // Output: Hello, undefined

/// Using arrow functions
var button = document.getElementById("myButton");

button.addEventListener("click", () => {
  // 'this' refers to the surrounding scope, not the DOM element
  console.log("Button clicked!");
});

// Using Function.prototype.bind()
var button2 = document.getElementById("myButton");

button2.addEventListener("click", function() {
  // 'this' is explicitly bound to the 'person' object
  console.log("Button clicked by " + this.name);
}.bind(person));

// Storing 'this' in a variable
var button3 = document.getElementById("myButton");
var self = this;

button3.addEventListener("click", function() {
  // 'self' holds the desired 'this' reference
  console.log("Button clicked by " + self.name);
});

///'this' in constructors
function Person(name, age) {
  this.name = name;
  this.age = age;
}

var john = new Person("John", 30);
console.log(john.name); // Output: John
console.log(john.age); // Output: 30


function Person2(name, age) {
  var obj = {}; // Object creation without 'new' keyword
  obj.name = name;
  obj.age = age;
  return obj;
}

var john2 = Person2("John", 30);
console.log(john2.name); // Output: John
console.log(john2.age); // Output: 30

// 'this' in prototypes and inheritance

function Person3(name) {
  this.name = name;
}

Person3.prototype.greet = function() {
  console.log("Hello, my name is " + this.name);
};

function Student3(name, grade) {
  Person3.call(this, name);
  this.grade = grade;
}

Student3.prototype = Object.create(Person3.prototype);
Student3.prototype.constructor = Student3;

Student3.prototype.showGrade = function() {
  console.log("I am in grade " + this.grade);
};

var john3 = new Student3("John", 10);
john3.greet(); // Output: Hello, my name is John
john3.showGrade(); // Output: I am in grade 10
