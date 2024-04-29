function customObjectIs(x, y) {
  if (x === y) {
    // Handle +0 === -0
    return x !== 0 || 1 / x === 1 / y;
  } else {
    // Handle NaN === NaN
    return x !== x && y !== y;
  }
}
