function customPartial(func, ...args) {
  return function (...restArgs) {
    return func(...args, ...restArgs);
  };
}
