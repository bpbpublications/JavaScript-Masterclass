const weakMap = new WeakMap();
const key = {};

weakMap.set(key, "value");

console.log(weakMap.get(key)); // Output: "value"

weakMap.delete(key);
console.log(weakMap.get(key)); // Output: undefined
