function throttle(callback, delay) {
  let isThrottled = false;
  return function () {
    if (!isThrottled) {
      callback();
      isThrottled = true;
      setTimeout(() => {
        isThrottled = false;
      }, delay);
    }
  };
}
// Example usage:
const throttledFunction = throttle(callBack, 500);

function callBack() {
  console.log("Function executed once per 500ms interval.");
}
// Attach event listener
window.addEventListener("scroll", throttledFunction);
