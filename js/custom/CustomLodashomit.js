function customOmit(object, keysToOmit) {
  const result = {};
  for (let key in object) {
    if (!keysToOmit.includes(key)) {
      result[key] = object[key];
    }
  }
  return result;
}
