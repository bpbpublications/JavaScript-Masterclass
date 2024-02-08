// Assigning a function to a variable
let greet = function() {
  console.log("Hello, world!");
};

// Passing a function as an argument (callback)
function callThreeTimes(func) {
  func();
  func();
  func();
}

callThreeTimes(greet);

// Returning a function from another function (closure)
function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

let add5 = makeAdder(5);
console.log(add5(3));  // Outputs: 8
