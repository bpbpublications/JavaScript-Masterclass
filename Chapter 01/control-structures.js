// if statement
let value = 6;

if (value === 6) {
  console.log("The value is 6.");
}


// if...else statement
let value = 6;

if (value === 6) {
  console.log("The value is 6.");
} else {
  console.log("The value is not 6.");
}

// if...else if...else statement
let value = 6;

if (value === 6) {
  console.log("The value is 6.");
} else if (value === 5) {
  console.log("The value is 5.");
} else {
  console.log("The value is neither 6 nor 5.");
}


// switch statement
let value = 6;

switch (value) {
  case 6:
    console.log("The value is 6.");
    break;
  case 5:
    console.log("The value is 5.");
    break;
  default:
    console.log("The value is neither 6 nor 5.");
}


// Loops

// for loop
for (let i = 1; i <= 5; i++) {
  console.log(i);
}


// while loop
let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}

// do...while loop
let i = 1;

do {
  console.log(i);
  i++;
} while (i <= 5);

// for...in loop
const person = {
  name: "John",
  age: 30,
  occupation: "Developer",
};

for (let key in person) {
  console.log(key + ": " + person[key]);
}


// for...of loop
const numbers = [1, 2, 3, 4, 5];

for (let num of numbers) {
  console.log(num);
}

// break statement
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    break;
  }
  console.log(i);
}

// continue statement
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}
