function memoizeCaching(apiRequestFunction) {
  const cache = new Map();
  return async function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    } else {
      const response = await apiRequestFunction(...args);
      cache.set(key, response);
      return response;
    }
  };
}
// Example usage:
const cachedAPICall = memoizeCaching(apiRequestFunction);
cachedAPICall();
