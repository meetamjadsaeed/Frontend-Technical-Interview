function deepFlatten(arr) {
  let flattened = [];
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      flattened.push(...deepFlatten(item));
    } else {
      flattened.push(item);
    }
  });
  return flattened;
}
