CustomPromise.any = function (promises) {
  return new CustomPromise((resolve, reject) => {
    let errors = [];
    let resolved = false;

    promises.forEach((promise) => {
      promise.then(
        (value) => {
          if (!resolved) {
            resolve(value);
            resolved = true;
          }
        },
        (reason) => {
          errors.push(reason);
          if (errors.length === promises.length) {
            reject(new AggregateError("All promises were rejected", errors));
          }
        }
      );
    });

    if (promises.length === 0) {
      reject(new AggregateError("No promises were provided", errors));
    }
  });
};
