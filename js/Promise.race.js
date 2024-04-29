// Example: Setting a timeout for fetching data
const fetchData = fetch("https://api.example.com/data");
const timeoutPromise = new Promise((resolve, reject) => {
  setTimeout(() => reject("Timeout"), 5000); // Reject after 5 seconds
});
Promise.race([fetchData, timeoutPromise])
  .then((response) => {
    console.log("Data fetched successfully:", response);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
