// 소수 판별하는 함수
function isPrime(num) {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false;
  }

  return num > 1;
}

const numbers = [60, 100];
const M = numbers[0];
const N = numbers[1];
let sum = 0;
let min = null;

for (let i = M; i <= N; i++) {
  if (isPrime(i)) {
    if (min === null) min = i;

    sum += i;

    if (i < min) min = i;
  }
}

if (sum > 0) {
  console.log(`${sum}\n${min}`);
} else {
  console.log(-1);
}
