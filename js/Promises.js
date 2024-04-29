// Example: Fetching data from an API using fetch API
fetch("https://api.example.com/data")
  .then((response) => response.json())
  .then((data) => {
    console.log("Fetched data:", data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
