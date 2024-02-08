const promise = new Promise((resolve, reject) => {
  // Perform asynchronous operation
  if (/* operation is successful */) {
    resolve(result); // Resolves the promise with the result
  } else {
    reject(error); // Rejects the promise with an error
  }
});

// Chaining promises with .then() and .catch()
promise
  .then((result) => {
    // Handle the fulfilled promise (resolved)
    return anotherAsyncOperation(result);
  })
  .then((anotherResult) => {
    // Handle the result of the second async operation
  })
  .catch((error) => {
    // Handle any errors in the promise chain
  });

// Improve your code with .finally()

promise
  .then((result) => {
    // Handle the fulfilled promise
  })
  .catch((error) => {
    // Handle any errors in the promise chain
  })
  .finally(() => {
    // Perform cleanup or finalization tasks
  });


// Promise.all and Promise.race
const promise1 = someAsyncOperation();
const promise2 = anotherAsyncOperation();
const promise3 = additionalAsyncOperation();

Promise.all([promise1, promise2, promise3])
  .then((results) => {
    // Handle the results of all promises
  })
  .catch((error) => {
    // Handle any errors in any of the promises
  });

Promise.race([promise1, promise2])
  .then((result) => {
    // Handle the result of the first settling promise
  })
  .catch((error) => {
    // Handle the error of the first settling promise
  });


//Combining promises with async functions
async function myAsyncFunction() {
  try {
    const result1 = await someAsyncOperation();
    const result2 = await anotherAsyncOperation();
    // Handle the results
  } catch (error) {
    // Handle any errors
  } finally {
    // Perform cleanup or finalization tasks
  }
}

// Error handling with promises
someAsyncOperation()
  .then((result) => {
    // Handle the fulfilled promise
  })
  .catch((error) => {
    // Handle any errors in the promise chain
  });

async function myAsyncFunction2() {
  try {
    const result = await someAsyncOperation();
    // Handle the result
  } catch (error) {
    // Handle any errors
  }
}

// Async/Await

async function myAsyncFunction3() {
  const result = await someAsyncOperation();
  // Code here is executed after the promise is resolved
}

// Error handling with try/catch
async function myAsyncFunction4() {
  try {
    const result = await someAsyncOperation();
    // Code here is executed after the promise is resolved
  } catch (error) {
    // Handle errors here
  }
}

// Sequential and parallel execution with async/await
async function sequentialExecution() {
  const result1 = await someAsyncOperation();
  const result2 = await anotherAsyncOperation();
  // Code here is executed sequentially
}

async function parallelExecution() {
  const [result1, result2] = await Promise.all([someAsyncOperation(), anotherAsyncOperation()]);
  // Code here is executed when all promises have resolved
}
