function fetchData(callback) {
  console.log("normal function");
  setTimeout(function () {
    callback("Data fetched successfully from callback");
  }, 2000);
}

fetchData(callBack); // Here it should be callBack instead of callback

function callBack(data) {
  console.log(data);
}
