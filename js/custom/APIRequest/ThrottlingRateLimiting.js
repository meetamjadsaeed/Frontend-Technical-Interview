function throttleRateLimiting(apiRequestFunction, interval) {
  let lastCallTime = 0;
  return async function (...args) {
    const currentTime = Date.now();
    const elapsedTime = currentTime - lastCallTime;
    if (elapsedTime >= interval) {
      lastCallTime = currentTime;
      return await apiRequestFunction(...args);
    } else {
      return Promise.reject("Too many requests");
    }
  };
}
// Example usage:
const throttledAPICall = throttleRateLimiting(apiRequestFunction, 1000);
throttledAPICall();
