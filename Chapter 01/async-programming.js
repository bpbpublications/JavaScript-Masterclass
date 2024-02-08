// Callback
setTimeout(function() {
  console.log("Hello, world!");
}, 1000);

// Promise
let promise = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve("Hello, world!");
  }, 1000);
});
