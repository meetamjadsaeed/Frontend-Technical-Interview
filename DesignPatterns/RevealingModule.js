const RevealingModule = (function () {
  let privateVar = "Private Variable";
  function privateFunction() {
    console.log("Private Function");
  }
  function publicFunction() {
    console.log("Public Function");
  }
  return {
    publicFunction: publicFunction,
  };
})();
// Usage
RevealingModule.publicFunction();
