let obj = {
  valueOf() {
    return 42;
  },
  toString() {
    return "Object value";
  }
};

let num = obj + 10; // 52 (coercion to number using valueOf())
let str = obj + " is a string"; // "Object value is a string" (coercion to string using toString())

// Customizing object coercion behavior
let obj = {
  value: 42,
  [Symbol.toPrimitive](hint) {
    if (hint === "number") {
      return this.value;
    }
    if (hint === "string") {
      return `Object value: ${this.value}`;
    }
    return null; // If hint is "default"
  }
};

let num = obj + 10; // 52 (coercion to number using Symbol.toPrimitive)
let str = obj + " is a string"; // "Object value: 42 is a string" (coercion to string using Symbol.toPrimitive)
