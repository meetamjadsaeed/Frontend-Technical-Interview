function customSetTimeout(callback, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(callback());
    }, delay);
  });
}
// Example usage:
customSetTimeout(() => {
  console.log("Custom setTimeout executed");
}, 1000);
