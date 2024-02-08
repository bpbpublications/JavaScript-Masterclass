let testVar;
console.log(testVar); // undefined

function testFunc() {
}
console.log(testFunc()); // undefined

let testVar2 = null;
console.log(testVar2); // null

console.log(null == undefined); // true
console.log(null === undefined); // false
