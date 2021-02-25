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

function* generatePrimesUpToN(inclusiveUpperLimit = Number.MAX_SAFE_INTEGER) {
  yield 2;
  for (let i = 3; i <= inclusiveUpperLimit; i += 2) {
    if (isPrime(i)) {
      yield i;
    }
  }
}

function* generateFirstNPrimes(n = 1000) {
  const primes = generatePrimesUpToN();
  for (let i = 0; i < n; ++i) {
    yield primes.next().value;
  }
}
