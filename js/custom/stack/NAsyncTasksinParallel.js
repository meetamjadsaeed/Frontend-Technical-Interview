function runTasksInParallel(tasks) {
  return Promise.all(tasks.map((task) => task()));
}
// Example usage:
const tasks = [() => task1(), () => task2(), () => task3()];
runTasksInParallel(tasks)
  .then((results) => {
    console.log("Results of tasks in parallel:", results);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
