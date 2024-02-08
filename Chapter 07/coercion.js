let str = "42";
let num1 = Number(str);
let num2 = +str;

let num = 42;
let str1 = String(num);
let str2 = num.toString();

let num = 42;
let bool1 = Boolean(num); // true

let str = "hello";
let bool2 = Boolean(str); // true

let emptyStr = "";
let bool3 = Boolean(emptyStr); // false

/// Using built-in functions for type conversion
let str = "42";
let num = Number(str); // 42

let nonNumericStr = "hello";
let nonNumericNum = Number(nonNumericStr); // NaN

let num = 42;
let str = String(num); // "42"

let bool = true;
let boolStr = String(bool); // "true"

let num = 42;
let bool1 = Boolean(num); // true

let emptyStr = "";
let bool2 = Boolean(emptyStr); // false

// Unary plus and minus operators
let str = "42";
let num1 = +str; // 42 (coercion to number using unary plus)

let bool = true;
let num2 = +bool; // 1 (coercion to number using unary plus)

let negNum = -num1; // -42 (coercion to number and negation using unary minus)

/// Coercion in arithmetic operations
let num1 = 42;
let str = "5";
let result1 = num1 + str; // "425" (coercion of num1 to a string and string concatenation)

let num2 = "7";
let result2 = num2 - num1; // -35 (coercion of num2 to a number and subtraction)

// String concatenation and coercion
let num = 42;
let str1 = "The answer is: " + num; // "The answer is: 42" (coercion of num to a string)

let bool = true;
let str2 = "The value is " + bool; // "The value is true" (coercion of bool to a string)

// Comparison operators and coercion
let num1 = 42;
let str = "42";
let isEqual = num1 == str; // true (coercion of num1 to a string for comparison)

let num2 = "7";
let isGreater = num2 > num1; // false (coercion of num2 and num1 to numbers for comparison)

// Coercion with logical operators
let num1 = 42;
let num2 = 0;
let result1 = num1 && num2; // 0 (coercion of num1 and num2 to booleans, returns num2)

let str = "hello";
let bool = true;
let result2 = str || bool; // "hello" (coercion of str and bool to booleans, returns str)

// Coercion rules in conditional statements
let num = 42;

if (num) {
  // This code block will execute because num is truthy (coercion to boolean)
}

let str = "";

while (str) {
  // This loop will not execute because str is falsy (coercion to boolean)
}




