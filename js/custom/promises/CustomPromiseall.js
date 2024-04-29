CustomPromise.all = function (promises) {
  return new CustomPromise((resolve, reject) => {
    const results = [];
    let completedPromises = 0;
    promises.forEach((promise, index) => {
      promise.then(
        (value) => {
          results[index] = value;
          completedPromises++;
          if (completedPromises === promises.length) {
            resolve(results);
          }
        },
        (reason) => {
          reject(reason);
        }
      );
    });
  });
};
