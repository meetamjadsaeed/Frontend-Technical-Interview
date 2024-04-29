function produce(state, producer) {
  const nextState = JSON.parse(JSON.stringify(state));
  producer(nextState);
  return nextState;
}
