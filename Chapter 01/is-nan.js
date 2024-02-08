console.log(isNaN("Hello")); // true - "Hello" is not a number
console.log(isNaN("123"));   // false - "123" can be converted to a number

console.log(Number.isNaN("Hello")); // false
console.log(Number.isNaN("123"));   // false
console.log(Number.isNaN(NaN));     // true
