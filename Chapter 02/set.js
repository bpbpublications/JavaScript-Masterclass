const uniqueNumbers = new Set();

uniqueNumbers.add(1);
uniqueNumbers.add(2);
uniqueNumbers.add(3);
uniqueNumbers.add(2); // Duplicate value, not added

console.log(uniqueNumbers.size); // Output: 3
console.log(uniqueNumbers.has(2)); // Output: true

uniqueNumbers.delete(1);
console.log(uniqueNumbers.size); // Output: 2
