function debounceRateLimiting(apiRequestFunction, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      apiRequestFunction(...args);
    }, delay);
  };
}
// Example usage:
const debouncedAPICall = debounceRateLimiting(apiRequestFunction, 1000);
debouncedAPICall();
