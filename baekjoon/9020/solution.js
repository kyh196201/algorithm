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

  // 에라토스테네스의 체를 이용해서 소수의 집합을 구한다.
  for (let i = 2; i <= num + 1; i += 1) {
    if (numbers[i]) {
      primes.push(i);
    }
  }

  // 입력받은 num의 절반
  const half = num / 2;

  // 입력받은 num의 절반이 소수인 경우
  if (primes.includes(half)) {
    answer = `${half} ${half}`;
  } else {
    // primes 배열의 중간 인덱스를 구한다.
    const mid = Math.floor(primes.length / 2);

    for (let j = mid; j < primes.length; j += 1) {
      // 중간 인덱스 바로 이전의 인덱스부터 시작한다.
      let start = j - 1;
      const current = primes[j];

      while (start >= 0) {
        if (current + primes[start] === num) {
          answer = `${primes[start]} ${current}`;
          break;
        }

        start -= 1;
      }

      if (answer.length) {
        break;
      }
    }
  }

  console.log(answer);
  return answer;
}

solution(10000);
