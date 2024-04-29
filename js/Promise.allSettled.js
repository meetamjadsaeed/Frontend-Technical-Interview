// Example: Fetching data from multiple APIs and handling all responses, regardless of success or failure
const apiPromises = [
  fetch("https://api.example.com/data1"),
  fetch("https://api.example.com/data2"),
];
Promise.allSettled(apiPromises).then((results) => {
  results.forEach((result) => {
    if (result.status === "fulfilled") {
      console.log("Data fetched successfully:", result.value);
    } else {
      console.error("Error fetching data:", result.reason);
    }
  });
});
