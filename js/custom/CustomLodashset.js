function customSet(object, path, value) {
  const keys = path.split(".");
  let current = object;
  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i];
    if (!(key in current)) {
      current[key] = {};
    }
    current = current[key];
  }
  current[keys[keys.length - 1]] = value;
  return object;
}
