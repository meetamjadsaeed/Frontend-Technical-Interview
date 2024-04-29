function debounce(callback, delay) {
  let timerId;
  return function () {
    clearTimeout(timerId);
    timerId = setTimeout(callback, delay);
  };
}
// Example usage:
const debouncedFunction = debounce(callBack, 500);

function callBack() {
  console.log("Function executed after 500ms of inactivity.");
}
// Attach event listener
window.addEventListener("scroll", debouncedFunction);
