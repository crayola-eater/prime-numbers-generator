import { generateFirstNPrimes } from "../primes.js";

self.onmessage = ({ data }) => {
  switch (data.type) {
    case "FIRST_N_PRIMES":
      self.postMessage({
        type: "FIRST_N_PRIMES",
        payload: [...generateFirstNPrimes(Number(data.n))],
      });
      break;
    default:
      self.postMessage({
        type: "ERROR",
        error: `Unexpected type ${data.type}`,
      });
  }
};
