// syntax
function greet(name = "Anonymous") {
  console.log(`Hello, ${name}!`);
}

greet(); // Output: Hello, Anonymous!
greet("John"); // Output: Hello, John!


// Usage examples
function createPerson({ name = "Anonymous", age = 30 } = {}) {
  console.log(`Name: ${name}, Age: ${age}`);
}

createPerson(); // Output: Name: Anonymous, Age: 30
createPerson({ name: "John", age: 25 }); // Output: Name: John, Age: 25
