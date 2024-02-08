// AND(&&) operator
console.log(true && true);   // true
console.log(true && false);  // false
console.log(false && true);  // false
console.log(false && false); // false

// OR(||) operator
console.log(true || true);   // true
console.log(true || false);  // true
console.log(false || true);  // true
console.log(false || false); // false

// NOT(!) operator
console.log(!true);  // false
console.log(!false); // true

// Short-circuit evaluation
console.log(false && doSomething()); // doSomething() is not called


console.log(true || doSomething()); // doSomething() is not called
