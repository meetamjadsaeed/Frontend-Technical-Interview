CustomPromise.race = function (promises) {
  return new CustomPromise((resolve, reject) => {
    promises.forEach((promise) => {
      promise.then(
        (value) => {
          resolve(value);
        },
        (reason) => {
          reject(reason);
        }
      );
    });
  });
};
