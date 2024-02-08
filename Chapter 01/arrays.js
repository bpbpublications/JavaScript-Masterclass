let fruits = ['apple', 'banana', 'cherry']; // an array of strings
let numbers = [1, 2, 3, 4, 5]; // an array of numbers
let mixed = [1, 'two', true, [4, 5]]; // an array with mixed data types

console.log(fruits[0]); // "apple"
console.log(numbers[1]); // 2
console.log(mixed[3]); // [4, 5]

// Methods and properties
console.log(fruits.length); // 3

fruits.push('date');
console.log(fruits); // ['apple', 'banana', 'cherry', 'date']

let lastFruit = fruits.pop();
console.log(lastFruit); // 'date'
console.log(fruits); // ['apple', 'banana', 'cherry']

let firstFruit = fruits.shift();
console.log(firstFruit); // 'apple'
console.log(fruits); // ['banana', 'cherry']

fruits.unshift('elderberry');
console.log(fruits); // ['elderberry', 'banana', 'cherry']

console.log(fruits.indexOf('banana')); // 1

let slicedFruits = fruits.slice(1, 3);
console.log(slicedFruits); // ['banana', 'cherry']

fruits.splice(1, 1, 'blackberry');
console.log(fruits); // ['elderberry', 'blackberry', 'cherry']

let fruitsString = fruits.join(', ');
console.log(fruitsString); // 'elderberry, blackberry, cherry'
