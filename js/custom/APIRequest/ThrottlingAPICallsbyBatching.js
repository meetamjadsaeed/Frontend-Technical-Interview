async function throttleAPICallsByBatch(
  apiRequestFunction,
  batchSize,
  interval
) {
  const responses = [];
  let index = 0;
  while (index < apiData.length) {
    const batch = apiData.slice(index, index + batchSize);
    const batchResponses = await Promise.all(batch.map(apiRequestFunction));
    responses.push(...batchResponses);
    index += batchSize;
    await new Promise((resolve) => setTimeout(resolve, interval));
  }
  return responses;
}
// Example usage:
throttleAPICallsByBatch(apiRequestFunction, 5, 1000);
