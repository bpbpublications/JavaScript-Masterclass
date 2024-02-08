// Syntax
function sum(...numbers) {
  let total = 0;
  for (const number of numbers) {
    total += number;
  }
  return total;
}

console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(4, 5, 6, 7, 8)); // Output: 30

// Usage examples
function concatenate(separator, ...strings) {
  return strings.join(separator);
}

console.log(concatenate("-", "Hello", "world")); // Output: Hello-world
console.log(concatenate(" ", "JavaScript", "is", "awesome")); // Output: JavaScript is awesome
