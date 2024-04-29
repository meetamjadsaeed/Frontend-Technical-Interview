function promisify(callbackBasedFunction) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      callbackBasedFunction(...args, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  };
}
// Example usage:
const readFileAsync = promisify(fs.readFile);
readFileAsync("example.txt", "utf8")
  .then((data) => {
    console.log("File content:", data);
  })
  .catch((error) => {
    console.error("Error reading file:", error);
  });
