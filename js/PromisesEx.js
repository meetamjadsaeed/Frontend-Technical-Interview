// promise any
// 	any one promise resolved

// promise all
// 	when all promise resolved

// promise race
// 	all will be resolved but willl get the result which is faster

// promise allsetled
// 	give all result regardless of whether they are success or failures

function fetchData() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("Data fetched successfully");
    }, 2000);
  });
}
fetchData()
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.error(error);
  });
