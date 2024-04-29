function customSetInterval(callback, interval) {
  const intervalID = setInterval(() => {
    callback();
  }, interval);
  return {
    clear: () => clearInterval(intervalID),
  };
}
// Example usage:
const customInterval = customSetInterval(() => {
  console.log("Custom setInterval executed");
}, 1000);
// To clear the interval after a certain time
setTimeout(() => {
  customInterval.clear();
}, 5000);
