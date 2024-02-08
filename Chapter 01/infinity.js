console.log(1 / 0); // Infinity

console.log(-1 / 0); // -Infinity

let infiniteNumber = Infinity;
console.log(infiniteNumber + 1); // Still Infinity

console.log(isFinite(1 / 0));       // false
console.log(isFinite(-1 / 0));      // false
console.log(Number.isFinite(1 / 0)); // false
console.log(Number.isFinite(-1 / 0)); // false
