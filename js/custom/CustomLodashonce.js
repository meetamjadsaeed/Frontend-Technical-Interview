function customOnce(func) {
  let result;
  let called = false;
  return function (...args) {
    if (!called) {
      result = func(...args);
      called = true;
    }
    return result;
  };
}
