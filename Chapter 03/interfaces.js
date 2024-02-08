// Interface definition
class AnimalInterface {
  speak() {
    throw new Error('Method not implemented.');
  }

  run() {
    throw new Error('Method not implemented.');
  }
}

// Class implementing the interface
class Dog extends AnimalInterface {
  speak() {
    console.log('Woof!');
  }

  run() {
    console.log('The dog is running.');
  }
}
