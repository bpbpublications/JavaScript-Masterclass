let animal = {
  eats: true
};

let rabbit = Object.create(animal);
console.log(rabbit.eats);  // Outputs: true
