function solution(num) {
  const divisors = [];

  while (num > 1) {
    let isPrime = true;

    for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
      if (num % i === 0) {
        divisors.push(i);
        num /= i;
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      divisors.push(num);
      break;
    }
  }

  console.log(divisors.join('\n'));
}

const fs = require('fs');

const input = Number(fs.readFileSync('/dev/stdin').toString());

if (input > 1) {
  solution(input);
}
