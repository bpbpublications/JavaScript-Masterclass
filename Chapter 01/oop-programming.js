// Object literal
let dog = {
    name: "Fido",
    breed: "Labrador",
    bark: function() {
        console.log("Woof!");
    }
};

// Constructor function
function Dog(name, breed) {
    this.name = name;
    this.breed = breed;
    this.bark = function() {
        console.log("Woof!");
    };
}

let myDog = new Dog("Fido", "Labrador");
