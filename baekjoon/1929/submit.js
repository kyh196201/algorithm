const fs = require('fs');

const [M, N] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .split(' ')
  .map(value => +value);

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

solution(M, N);
