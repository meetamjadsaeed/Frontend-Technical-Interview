function customMemoize(func) {
  const cache = new Map();
  return function (...args) {
    const key = args.join("-");
    if (!cache.has(key)) {
      cache.set(key, func(...args));
    }
    return cache.get(key);
  };
}
