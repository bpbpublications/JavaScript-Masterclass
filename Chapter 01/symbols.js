let symbol1 = Symbol();
let symbol2 = Symbol();
console.log(symbol1 === symbol2); // false

let symbol3 = Symbol('mySymbol');
console.log(symbol3.toString()); // "Symbol(mySymbol)"

const firstName = Symbol('firstName');
const person = {
  [firstName]: 'John',
  age: 30
};

console.log(person[firstName]); // "John"
console.log(person.age); // 30
console.log(Object.keys(person)); // ["age"]
console.log(Object.getOwnPropertySymbols(person)); // [Symbol(firstName)]

class MyArray extends Array {
  static get [Symbol.species]() {
    return Array;
  }
}

const myArray = new MyArray(1, 2, 3);
const mappedArray = myArray.map(x => x * 2);

console.log(mappedArray instanceof MyArray); // false
console.log(mappedArray instanceof Array); // true
