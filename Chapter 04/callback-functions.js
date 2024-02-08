function fetchData(callback) {
  // Perform asynchronous operation, e.g., making an API request
  // Once the operation completes, invoke the callback function
  const data = { name: 'John Doe' };
  callback(data);
}

fetchData(function(data) {
  // Handle the fetched data
  console.log(data);
});

// Error handling with callbacks
fetchData(function(data, error) {
  if (error) {
    // Handle the error
    console.error(error);
  } else {
    // Handle the data
    console.log(data);
  }
});
