function createCache() {
  const cache = {};

  return {
    set: function (key, value) {
      cache[key] = value;
    },
    get: function (key) {
      return cache[key];
    },
    has: function (key) {
      return key in cache;
    },
    delete: function (key) {
      if (this.has(key)) {
        delete cache[key];
        return true;
      }
      return false;
    },
  };
}

// Example usage:
const myCache = createCache();

// Add data to the cache
myCache.set("user1", { name: "John", age: 30 });
myCache.set("user2", { name: "Jane", age: 25 });

// Retrieve data from the cache
console.log(myCache.get("user1")); // Output: { name: 'John', age: 30 }

// Check if a key exists in the cache
console.log(myCache.has("user2")); // Output: true

// Remove data from the cache
myCache.delete("user1");
console.log(myCache.get("user1")); // Output: undefined
