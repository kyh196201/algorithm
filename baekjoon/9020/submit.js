const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');

function solution(num) {
  let answer = '';

  const numbers = Array.from(Array(num + 1), () => true);

  for (let d = 2, s = Math.sqrt(num); d <= s; d += 1) {
    if (numbers[d]) {
      for (let index = d * 2; index <= num + 1; index += d) {
        numbers[index] = false;
      }
    }
  }

  const primes = [];

  //   get primes
  for (let i = 2; i <= num + 1; i += 1) {
    if (numbers[i]) {
      primes.push(i);
    }
  }

  const half = num / 2;

  if (primes.includes(half)) {
    answer = `${half} ${half}`;
  } else {
    const mid = Math.floor(primes.length / 2);

    for (let j = mid; j < primes.length; j += 1) {
      let start = j - 1;
      const current = primes[j];

      while (start >= 0) {
        if (current + primes[start] === num) {
          answer = `${primes[start]} ${current}`;
          break;
        }

        start -= 1;
      }

      if (answer !== '') {
        break;
      }
    }
  }

  return answer;
}

let answer = '';

for (let i = 1; i < input.length; i += 1) {
  if (i > 1) {
    answer += '\n';
  }

  answer += solution(+input[i]);
}

console.log(answer);
