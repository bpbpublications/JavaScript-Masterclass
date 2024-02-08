// Syntax for function declaration
function greet(name) {
  console.log("Hello, " + name + "!");
}


// Anonymous functions and function expressions
const greetAnon = function(name) {
  console.log("Hello, " + name + "!");
};


// Function hoisting
greetHoisted("John");

function greetHoisted(name) {
  console.log("Hello, " + name + "!");
}


// Invoking functions with parentheses
function greetInvoke() {
  console.log("Hello!");
}

greetInvoke(); // Output: Hello!


// Arguments and parameters
greet("John"); // Output: Hello, John!


// Default parameters
function greetWithDefaultParams(name = "Guest") {
  console.log("Hello, " + name + "!");
}

greetWithDefaultParams(); // Output: Hello, Guest!
greetWithDefaultParams("John"); // Output: Hello, John!


// Rest parameters
function sum(...numbers) {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;
}

console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(4, 5, 6, 7, 8)); // Output: 30


// The return statement
function multiply(a, b) {
  return a * b;
}

let result = multiply(3, 4);
console.log(result); // Output: 12


// Returning multiple values
function getPerson() {
  return {
    name: "John",
    age: 30,
    profession: "Developer"
  };
}

let person = getPerson();
console.log(person.name); // Output: John
console.log(person.age); // Output: 30


// Using return values
function calculateSum(a, b) {
  return a + b;
}

let x = 5;
let y = 3;
let sum2 = calculateSum(x, y);
console.log(sum2); // Output: 8

if (sum2 > 10) {
  console.log("The sum is greater than 10.");
} else {
  console.log("The sum is less than or equal to 10.");
}


// Passing functions as arguments
function processUserInput(callback) {
  const name = prompt("Please enter your name:");
  callback(name);
}

processUserInput(greet);


// Returning functions from functions
function createMultiplier(multiplier) {
  return function(number) {
    return number * multiplier;
  };
}

const double = createMultiplier(2);
console.log(double(5)); // Output: 10

// Combining functions to create new functions
function addOne(number) {
  return number + 1;
}

function multiplyByTwo(number) {
  return number * 2;
}

function subtractThree(number) {
  return number - 3;
}

const composedFunction = subtractThree(multiplyByTwo(addOne(5)));
console.log(composedFunction); // Output: 9

// Pipelines and data transformations
const data = [1, 2, 3, 4, 5];

const pipeline = [
  addOne,
  multiplyByTwo,
  subtractThree
];

const transformedData = data.map(function(value) {
  return pipeline.reduce(function(result, fn) {
    return fn(result);
  }, value);
});

console.log(transformedData); // Output: [1, 3, 5, 7, 9]

// Function composition libraries
const composedFunction2 = _.flow(
  addOne,
  multiplyByTwo,
  subtractThree
);

const result2 = composedFunction(5);
console.log(result2); // Output: 9
