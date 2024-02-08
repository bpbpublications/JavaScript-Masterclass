// Object.assign()
const source = { name: 'John', age: 30 };
const clone = Object.assign({}, source);

console.log(clone); // Output: { name: 'John', age: 30 }

// Spread operator
const source2 = { name: 'John', age: 30 };
const clone2 = { ...source2 };

console.log(clone2); // Output: { name: 'John', age: 30 }

/// Deep copying
function deepCopy(object) {
  return JSON.parse(JSON.stringify(object));
}

const original3 = { name: 'John', age: 30, address: { city: 'New York', country: 'USA' } };
const clone3 = deepCopy(original3);

console.log(clone3);
// Output: { name: 'John', age: 30, address: { city: 'New York', country: 'USA' } }

//
function deepCopy2(object) {
  if (typeof object !== 'object' || object === null) {
    return object;
  }

  const copy = Array.isArray(object) ? [] : {};

  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      copy[key] = deepCopy(object[key]);
    }
  }

  return copy;
}

const original4 = { name: 'John', age: 30, address: { city: 'New York', country: 'USA' } };
const clone4 = deepCopy2(original4);

console.log(clone4);
// Output: { name: 'John', age: 30, address: { city: 'New York', country: 'USA' } }

// Example 1: Sealing an object with Object.seal()
const person = {
  name: 'John',
  age: 30,
};

Object.seal(person);

person.name = 'Jane'; // Valid: Property value can be modified
person.city = 'New York'; // Ignored: New property cannot be added
delete person.age; // Ignored: Existing property cannot be deleted

console.log(person); // Output: { name: 'Jane', age: 30 }


// Example 2: Non-configurable attributes after sealing
const book = {
  title: 'JavaScript: The Good Parts',
  author: 'Douglas Crockford',
};

Object.seal(book);

Object.defineProperty(book, 'title', {
  enumerable: false,
});

console.log(Object.getOwnPropertyDescriptor(book, 'title'));
// Output: { value: 'JavaScript: The Good Parts', writable: true, enumerable: false, configurable: false }

// Example 1: Freezing an object with Object.freeze()
const personFreeze = {
  name: 'John',
  age: 30,
};

Object.freeze(personFreeze);

personFreeze.name = 'Jane'; // Ignored: Property value cannot be modified
personFreeze.city = 'New York'; // Ignored: New property cannot be added
delete personFreeze.age; // Ignored: Existing property cannot be deleted

console.log(personFreeze); // Output: { name: 'John', age: 30 }

// Example 2: Non-configurable and non-writable attributes after freezing
const bookFreeze = {
  title: 'JavaScript: The Good Parts',
  author: 'Douglas Crockford',
};

Object.freeze(bookFreeze);

Object.defineProperty(bookFreeze, 'title', {
  enumerable: false,
});

console.log(Object.getOwnPropertyDescriptor(bookFreeze, 'title'));
// Output: { value: 'JavaScript: The Good Parts', writable: false, enumerable: false, configurable: false }


