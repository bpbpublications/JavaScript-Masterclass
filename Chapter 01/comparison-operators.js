// Equality and inequality operators
console.log(5 == 5); // true
console.log(5 != 3); // true
console.log('5' == 5); // true (string '5' is coerced to a number)
console.log(true == 1); // true (boolean true is coerced to a number)
console.log(null == undefined); // true

// Strict equality and strict inequality operators
console.log(5 === 5); // true
console.log(5 !== 3); // true
console.log('5' === 5); // false (string '5' and number 5 have different types)
console.log(true === 1); // false (boolean true and number 1 have different types)
console.log(null === undefined); // false

console.log(5 > 3); // true
console.log(5 < 10); // true
console.log(5 >= 3); // true
console.log(5 <= 10); // true

console.log('apple' > 'banana'); // false
console.log('apple' < 'banana'); // true
console.log('apple' >= 'apple'); // true
console.log('apple' <= 'banana'); // true
