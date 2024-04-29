const api1Promise = fetch("https://api.example.com/data1").then((response) =>
  response.json()
);
const api2Promise = fetch("https://api.example.com/data2").then((response) =>
  response.json()
);
Promise.all([api1Promise, api2Promise])
  .then((results) => {
    const [data1, data2] = results;
    console.log("Data from API 1:", data1);
    console.log("Data from API 2:", data2);
  })
  .catch((error) => {
    console.error("Error fetching data from APIs:", error);
  });
