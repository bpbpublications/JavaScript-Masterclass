// Property access with optional chaining
const person = {
  name: "John",
  address: {
    city: "New York",
  },
};

const cityName = person.address?.city;
console.log(cityName); // Output: New York

const streetName = person.address?.street?.name;
console.log(streetName); // Output: undefined


// Method call with optional chaining
const person2 = {
  name: "John",
  sayHello() {
    console.log(`Hello, ${this.name}!`);
  },
};

person2.sayHello?.(); // Output: Hello, John!

const sayBye = person2.sayBye?.();
console.log(sayBye); // Output: undefined

// Handling optional properties
const user = {
  name: "John",
  address: null,
};

const cityName2 = user.address?.city;
console.log(cityName2); // Output: undefined
