function runTasksInSeries(tasks) {
  return tasks.reduce((promiseChain, currentTask) => {
    return promiseChain.then((chainResults) =>
      currentTask().then((currentResult) => [...chainResults, currentResult])
    );
  }, Promise.resolve([]));
}
// Example usage:
const tasks = [() => task1(), () => task2(), () => task3()];
runTasksInSeries(tasks)
  .then((results) => {
    console.log("Results of tasks in series:", results);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
