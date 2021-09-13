function isPrime(num) {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false;
  }

  return num > 1;
}

function solution(M, N) {
  let i = M;

  for (i; i <= N; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
}

const M = 3;
const N = 16;

solution(M, N);
