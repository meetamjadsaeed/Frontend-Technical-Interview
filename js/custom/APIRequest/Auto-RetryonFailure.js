async function autoRetryOnFailure(
  requestFunction,
  maxRetries = 3,
  delay = 1000
) {
  let retries = 0;
  while (retries < maxRetries) {
    try {
      const response = await requestFunction();
      return response;
    } catch (error) {
      console.error(`Attempt ${retries + 1} failed:`, error);
      await new Promise((resolve) => setTimeout(resolve, delay));
      retries++;
    }
  }
  throw new Error(`Request failed after ${maxRetries} attempts`);
}
// Example usage:
autoRetryOnFailure(apiRequestFunction);
