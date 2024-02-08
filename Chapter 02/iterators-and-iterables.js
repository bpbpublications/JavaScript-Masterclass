// Iterable objects
const iterableObject = {
  [Symbol.iterator]() {
    // Return iterator object
  },
};

// Iterator objects
const iteratorObject = {
  next() {
    // Return { value, done } object
  },
};
