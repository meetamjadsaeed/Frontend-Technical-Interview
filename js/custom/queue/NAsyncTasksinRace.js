function runTasksInRace(tasks) {
  return new Promise((resolve, reject) => {
    tasks.forEach((task) => {
      task().then(resolve, reject);
    });
  });
}
// Example usage:
const tasks = [() => task1(), () => task2(), () => task3()];
runTasksInRace(tasks)
  .then((winner) => {
    console.log("Winner of the race:", winner);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
