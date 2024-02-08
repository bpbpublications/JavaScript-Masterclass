const numbers = [1, 2, 3];
const moreNumbers = [4, 5, 6];

const combined = [...numbers, ...moreNumbers];
console.log(combined); // Output: [1, 2, 3, 4, 5, 6]

const shallowCopy = [...numbers];
console.log(shallowCopy); // Output: [1, 2, 3]

function sum(a, b, c) {
  return a + b + c;
}

const result = sum(...numbers);
console.log(result); // Output: 6

// Spreading object properties
const person = { name: "John", age: 30 };
const additionalInfo = { city: "New York", occupation: "Developer" };

const merged = { ...person, ...additionalInfo };
console.log(merged);
// Output: { name: "John", age: 30, city: "New York", occupation: "Developer" }

// Array manipulation
const numbers2 = [1, 2, 3];
const moreNumbers2 = [4, 5, 6];

const combined2 = [...numbers2, ...moreNumbers2];
console.log(combined2); // Output: [1, 2, 3, 4, 5, 6]

const shallowCopy2 = [...numbers2];
console.log(shallowCopy2); // Output: [1, 2, 3]

const newArray = [...numbers2, 7, 8, 9];
console.log(newArray); // Output: [1, 2, 3, 7, 8, 9]


// Object cloning
const person2 = { name: "John", age: 30 };
const clone = { ...person2 };

console.log(clone); // Output: { name: "John", age: 30 }
console.log(clone === person2); // Output: false

// Function arguments
function sum3(a, b, c) {
  return a + b + c;
}

const numbers3 = [1, 2, 3];
const result3 = sum3(...numbers3);

console.log(result3); // Output: 6
