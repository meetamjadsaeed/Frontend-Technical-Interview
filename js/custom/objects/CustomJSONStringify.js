function customJSONStringify(obj) {
  const replacer = (key, value) => {
    if (typeof value === "function") {
      return value.toString();
    }
    return value;
  };
  return JSON.stringify(obj, replacer);
}
