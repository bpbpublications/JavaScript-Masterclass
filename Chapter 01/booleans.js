let isHot = true; // a boolean true
let isCold = false; // a boolean false

let x = 10;
let y = 20;
let isEqual = x === y; // false, because 10 is not equal to 20

let truthyValue = 'Hello';
let falsyValue = 0;

if (truthyValue) {
  console.log('This will be printed.'); // The condition is truthy
}

if (falsyValue) {
  console.log('This will not be printed.'); // The condition is falsy
}
