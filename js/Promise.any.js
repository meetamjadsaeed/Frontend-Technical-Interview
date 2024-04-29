// Example: Attempting to fetch data from multiple sources and using the
// first successful response
const sources = [
  "https://source1.example.com",
  "https://source2.example.com",
  "https://source3.example.com",
];
const promises = sources.map((source) =>
  fetch(source).then((response) => response.json())
);
Promise.any(promises)
  .then((data) => {
    console.log("Data fetched successfully:", data);
  })
  .catch((errors) => {
    console.error("All sources failed:", errors);
  });
