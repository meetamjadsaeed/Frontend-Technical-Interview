CustomPromise.allSettled = function (promises) {
  return new CustomPromise((resolve, reject) => {
    const results = [];
    let completedPromises = 0;
    promises.forEach((promise, index) => {
      promise
        .then(
          (value) => {
            results[index] = { status: "fulfilled", value: value };
          },
          (reason) => {
            results[index] = { status: "rejected", reason: reason };
          }
        )
        .finally(() => {
          completedPromises++;
          if (completedPromises === promises.length) {
            resolve(results);
          }
        });
    });
  });
};
