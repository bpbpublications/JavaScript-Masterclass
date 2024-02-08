const weakSet = new WeakSet();
const obj1 = {};
const obj2 = {};

weakSet.add(obj1);
weakSet.add(obj2);
weakSet.add(obj2); // Duplicate object, not added

console.log(weakSet.has(obj1)); // Output: true

weakSet.delete(obj1);
console.log(weakSet.has(obj1)); // Output: false
