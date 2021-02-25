const primesWorker = new Worker("./webWorkers/primesWorker.js", {
  type: "module",
});

primesWorker.onmessage = ({ data }) => console.log(data);

primesWorker.postMessage({
  type: "FIRST_N_PRIMES",
  n: 1_000_000,
  batchSize: 1000,
});
