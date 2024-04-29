// Custom implementation of the call method
Function.prototype.customCall = function (context, ...args) {
  context = context || window; // Default to global object if context is not provided
  const uniqueID = Symbol(); // Create a unique symbol as a property name
  context[uniqueID] = this; // Set the function to the context object
  const result = context[uniqueID](...args); // Call the function with arguments;
  delete context[uniqueID]; // Remove the function property from the context object
  return result; // Return the result of the function call
};
// Example usage:
const person = {
  name: "John",
};
function greet(greeting) {
  return `${greeting}, ${this.name}!`;
}
console.log(greet.customCall(person, "Hello")); // Output: "Hello, John!"
