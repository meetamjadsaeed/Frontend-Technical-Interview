// Example of encapsulation using closures
function Counter() {
  let count = 0; // Private variable
  this.increment = function () {
    count++;
    console.log("Count:", count);
  };
  this.getCount = function () {
    return count;
  };
}
let counter = new Counter();
counter.increment(); // Output: Count: 1
console.log(counter.count); // Undefined (count is private)
console.log(counter.getCount()); // Output: 1
