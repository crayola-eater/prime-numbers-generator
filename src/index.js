function isPrime(someNumber) {
  if (1 === someNumber || 0 === (someNumber & 1)) {
    return false;
  }
  if (2 === someNumber) {
    return true;
  }

  const inclusiveUpperLimit = Math.sqrt(someNumber);
  for (let i = 3; i <= inclusiveUpperLimit; i += 2) {
    if (0 === someNumber % i) {
      return false;
    }
  }
  return true;
}
