// Creating property descriptors
const personPrototype = {
  greet() {
    console.log(`Hello, ${this.name}!`);
  },
};

const john = Object.create(personPrototype, {
  name: {
    value: 'John',
    writable: true,
    enumerable: true,
    configurable: true,
  },
});

john.greet(); // Output: Hello, John!

// Object.defineProperty()
const person = {};

Object.defineProperty(person, 'name', {
  value: 'John',
  writable: true,
});

console.log(person.name); // Output: John

// Object.defineProperties()
const person2 = {};

Object.defineProperties(person2, {
  name: {
    value: 'John',
    writable: true,
  },
  age: {
    value: 30,
    writable: false,
  },
});

console.log(person2.name); // Output: John
console.log(person2.age); // Output: 30

// Modifying property descriptors
const person3 = {
  name: 'John',
  age: 30,
};

Object.defineProperty(person3, 'name', {
  writable: false,
});

person3.name = 'Jane';
console.log(person3.name); // Output: John (value remains unchanged)

// Making a property non-enumerable:
const car = {
  brand: 'Tesla',
  model: 'Model 3',
};

Object.defineProperty(car, 'model', {
  enumerable: false,
});

for (const key in car) {
  console.log(key); // Output: brand (model is not enumerable)
}

// Making a property non-configurable:
const car = {
  brand: 'Toyota',
  year: 2022,
};

// Change the 'brand' property to non-configurable
Object.defineProperty(car, 'brand', {
  configurable: false,
});

// Attempt to redefine the 'brand' property
Object.defineProperty(car, 'brand', {
  configurable: true,
});

console.log(car.brand);
// Output: Toyota

// Preventing property deletion:
const person = {
  name: 'John',
  age: 30,
};

// Prevent the 'age' property from being deleted
Object.defineProperty(person, 'age', {
  configurable: false,
});

// Attempt to delete the 'age' property
delete person.age;

console.log(person.age);
// Output: 30
