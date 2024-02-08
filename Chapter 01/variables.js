// var
function exampleVar() {
  var x = 10;
  if (true) {
    var y = 20;
    console.log(x); // Output: 10
  }
  console.log(y); // Output: 20
}

// let
function exampleLet() {
  let x = 10;
  if (true) {
    let y = 20;
    console.log(x); // Output: 10
  }
  console.log(y); // Error: y is not defined
}


// const
function exampleConst() {
  const x = 10;
  if (true) {
    const y = 20;
    console.log(x); // Output: 10
  }
  console.log(y); // Error: y is not defined
}

const x = 10;
x = 20; // Error: Assignment to constant variable

// variable hoisting
console.log(hoisted); // undefined
var hoisted = 5;

// Assigning values to variables
let x3 = 10;

let a = 5;
let b = a + 3;
let c = b * 2;

