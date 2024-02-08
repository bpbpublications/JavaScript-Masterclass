let string1 = 'Hello, world!'; // A string literal using single quotes
let string2 = "Hello, world!"; // A string literal using double quotes

let name = 'John';
let greeting = `Hello, ${name}!`; // "Hello, John!"

let string3 = 'Isn\'t it a beautiful day?\nYes, it sure is.';

let string4 = 'Hello, world!';

console.log(string4.length); // 13
console.log(string4.charAt(0)); // "H"
console.log(string4.indexOf('world')); // 7
console.log(string4.slice(7, 12)); // "world"
console.log(string4.split(',')); // ["Hello", " world!"]
console.log(string4.replace('world', 'John')); // "Hello, John!"
console.log(string4.toUpperCase()); // "HELLO, WORLD!"
console.log(string4.toLowerCase()); // "hello, world!"
