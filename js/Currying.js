// Non-curried function
function add(x, y) {
  return x + y;
}
// Curried function
function curriedAdd(x) {
  return function (y) {
    return x + y;
  };
}
// Usage
const add5 = curriedAdd(5); // Partial application
console.log(add5(3)); // Output: 8

// This function 'curry' takes a function 'fn' as its argument and returns a curried version of that function.
const curry = (fn) => {
  // 'curried' is the curried version of the function 'fn'
  const curried = (...args) =>
    // If the number of arguments passed is greater than or equal to the arity of 'fn' (number of parameters it expects),
    // invoke 'fn' with the arguments. Otherwise, return a new function that will accumulate more arguments until it can be invoked.
    args.length >= fn.length
      ? fn(...args)
      : (...rest) => curried(...args, ...rest);

  return curried; // Return the curried function
};

const add = (x, y) => x + y;

const curriedAdd = curry(add);

curriedAdd(1)(2); // 3
