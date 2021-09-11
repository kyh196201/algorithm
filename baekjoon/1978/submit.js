const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const loopCount = +input[0];
let count = 0;

// 소수인지 판별하는 함수
function isPrime(num) {
  if (num <= 1) return false;

  const squareRoot = Math.floor(Math.sqrt(num));

  for (let i = 2; i <= squareRoot; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

const numbers = input[1].split(' ').map(value => Number(value));

for (let i = 0; i < loopCount; i++) {
  if (isPrime(numbers[i])) {
    count += 1;
  }
}

console.log(count);
