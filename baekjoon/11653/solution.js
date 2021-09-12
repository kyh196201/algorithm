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

function solution2(num) {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    while (num % i === 0) {
      num /= i;
      console.log(i);
    }
  }

  if (num !== 1) {
    console.log(num);
  }
}

const N = 9991;

// if (N > 1) {
//   solution(N);
// }

solution2(N);
