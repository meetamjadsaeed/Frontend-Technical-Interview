function customGet(object, path, defaultValue) {
  const keys = path.split(".");
  let result = object;
  for (let key of keys) {
    if (!result || typeof result !== "object") return defaultValue;
    result = result[key];
  }
  return result !== undefined ? result : defaultValue;
}
