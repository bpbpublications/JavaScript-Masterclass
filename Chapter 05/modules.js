// Syntax for importing and exporting modules
// ModuleA.js
export const name = 'John';
export function greet() {
  console.log('Hello!');
}

// ModuleB.js
import { name, greet } from './ModuleA.js';

console.log(name); // Output: John
greet(); // Output: Hello!

// Working with default and named exports
// ModuleA.js
export default function greet() {
  console.log('Hello!');
}

// ModuleB.js
import myGreet from './ModuleA.js';

myGreet(); // Output: Hello!

// Dynamic imports
// ModuleA.js
export function greet() {
  console.log('Hello!');
}

// ModuleB.js
const condition = true;

if (condition) {
  import('./ModuleA.js').then((moduleA) => {
    moduleA.greet(); // Output: Hello!
  });
}

// Creating modules with the revealing module pattern
var myModule = (function() {
  var privateVariable = 'I am private';

  function privateFunction() {
    console.log('This is a private function');
  }

  function publicFunction() {
    console.log('This is a public function');
    privateFunction();
  }

  return {
    publicFunction: publicFunction
  };
})();

myModule.publicFunction(); // Output: This is a public function, This is a private function

// Caching results with closures
function expensiveOperation(n) {
  // Define a cache object within the closure
  var cache = {};

  return function(n) {
    if (n in cache) {
      console.log('Retrieving result from cache');
      return cache[n];
    } else {
      console.log('Performing expensive computation');
      var result = /* perform the expensive computation */;
      cache[n] = result;
      return result;
    }
  };
}

var memoizedOperation = expensiveOperation();

memoizedOperation(5); // Output: Performing expensive computation
memoizedOperation(5); // Output: Retrieving result from cache

// Memoization libraries
const memoize = require('memoizee');

function expensiveOperation(n) {
  // Perform the expensive computation
}

var memoizedOperation = memoize(expensiveOperation);

memoizedOperation(5); // Output: Performing expensive computation
memoizedOperation(5); // Output: Retrieving result from cache
