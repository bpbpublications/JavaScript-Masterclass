// Object destructuring
const person = { name: "John", age: 30, city: "New York" };

const { name, age } = person;

console.log(name); // Output: John
console.log(age); // Output: 30

// Array destructuring
const numbers = [1, 2, 3, 4, 5];

const [first, second, ...rest] = numbers;

console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest); // Output: [3, 4, 5]

// Variable assignment and swapping
let a = 1;
let b = 2;

// Variable swapping
[a, b] = [b, a];

console.log(a); // Output: 2
console.log(b); // Output: 1

// Function parameter extraction
function printPersonInfo({ name, age }) {
  console.log(`Name: ${name}`);
  console.log(`Age: ${age}`);
}

const person2 = { name: "John", age: 30 };

printPersonInfo(person2);

// Extracting values from API responses
const response = {
  status: "success",
  data: {
    id: 123,
    fullName: "John Doe",
    email: "john@example.com",
    // ...
  },
};

const { data: { id, fullName, email } } = response;

console.log(id); // Output: 123
console.log(fullName); // Output: John Doe
console.log(email); // Output: john@example.com

// Iterating over arrays and objects
const users = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Alex", age: 35 },
];

for (const { name, age } of users) {
  console.log(`Name: ${name}, Age: ${age}`);
}
