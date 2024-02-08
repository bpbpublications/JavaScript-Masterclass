const userMap = new Map();

userMap.set("John", { age: 30 });
userMap.set("Jane", { age: 25 });

console.log(userMap.get("John")); // Output: { age: 30 }
console.log(userMap.size); // Output: 2
console.log(userMap.has("Jane")); // Output: true

userMap.delete("John");
console.log(userMap.size); // Output: 1
