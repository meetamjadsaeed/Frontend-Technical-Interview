// Custom implementation of the bind method
Function.prototype.customBind = function (context, ...args) {
  const fn = this; // Reference to the function
  return function (...innerArgs) {
    return fn.apply(context, args.concat(innerArgs)); // Call the function with combined arguments
  };
};
// Example usage:
const person = {
  name: "John",
};
function greet(greeting) {
  return `${greeting}, ${this.name}!`;
}
const boundGreet = greet.customBind(person, "Hello");
console.log(boundGreet()); // Output: "Hello, John!"
