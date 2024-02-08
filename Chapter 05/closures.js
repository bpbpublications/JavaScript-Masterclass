// Using inner functions to create closures
function outerFunction() {
  var outerVariable = 'I am from the outer scope';

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

var closure = outerFunction();
closure(); // Output: I am from the outer scope

// Accessing variables from the outer scope
function outerFunction2() {
  var outerVariable = 'Hello';

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

var closure2 = outerFunction2();
closure2(); // Output: Hello

/// Preserving the outer scope with closures
function outerFunction3() {
  var outerVariable = 'I am from the outer scope';

  setTimeout(function innerFunction() {
    console.log(outerVariable);
  }, 1000);
}

outerFunction3(); // Output (after 1 second): I am from the outer scope


// Creating private variables
function counter() {
  var count = 0;

  function increment() {
    count++;
    console.log(count);
  }

  return increment;
}

var counter1 = counter();
counter1(); // Output: 1
counter1(); // Output: 2


// Defining private methods
function car(make, model) {
  function getMake() {
    return make;
  }

  function getModel() {
    return model;
  }

  return {
    getMake,
    getModel
  };
}

var myCar = car('Toyota', 'Camry');
console.log(myCar.getMake()); // Output: Toyota
console.log(myCar.getModel()); // Output: Camry


// Using closures to implement modules
var myModule = (function() {
  var privateVariable = 'I am private';

  function privateMethod() {
    console.log('This is a private method');
  }

  function publicMethod() {
    console.log('This is a public method');
    console.log(privateVariable);
    privateMethod();
  }

  return {
    publicMethod
  };
})();

myModule.publicMethod(); // Output: This is a public method, I am private, This is a private method
