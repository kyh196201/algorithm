// 소수 판별하는 함수
function isPrime(num) {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false;
  }

  return num > 1;
}

const numbers = [64, 65];
const primes = [];
const M = numbers[0];
const N = numbers[1];

for (let i = M; i <= N; i++) {
  if (isPrime(i)) primes.push(i);
}

if (primes.length) {
  const sum = primes.reduce((acc, cur) => acc + cur, 0);
  const min = Math.min(...primes);

  console.log(`${sum}\n${min}`);
} else {
  console.log(-1);
}
