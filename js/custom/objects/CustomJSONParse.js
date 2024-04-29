function customJSONParse(json) {
  return JSON.parse(json, (key, value) => {
    if (typeof value === "string" && /^function/.test(value)) {
      return eval(`(${value})`);
    }
    return value;
  });
}
