// Event Emitter
class EventEmitter {
  constructor() {
    this.listeners = {};
  }

  on(event, callback) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(callback);
  }

  emit(event, ...args) {
    if (this.listeners[event]) {
      this.listeners[event].forEach(callback => callback(...args));
    }
  }
}

// Event Listener
const myEmitter = new EventEmitter();

myEmitter.on('myEvent', (data) => {
  // Handle the event
  console.log(data);
});

myEmitter.emit('myEvent', 'Hello, world!');

// Custom events and EventTarget API
// Event Emitter
const myEmitterCustom = document.createElement('div');

// Event Listener
myEmitterCustom.addEventListener('myEventCustom', (event) => {
  // Handle the event
  console.log(event.detail);
});

// Emitting the event
const myEventCustom = new CustomEvent('myEventCustom', { detail: 'Hello, world!' });
myEmitterCustom.dispatchEvent(myEventCustom);
