// 참고: https://st-lab.tistory.com/152
function solution(num) {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    // 1. num이 i로 나누어 떨어지지 않을 떄까지 반복한다.
    while (num % i === 0) {
      // 2. num이 i로 나누어 떨어질 경우 num에 num / i를 대입한다.
      num /= i;
      console.log(i);
    }
  }

  // 3. num이 1이 아닐경우(소수인 경우) num을 출력한다.
  if (num !== 1) {
    console.log(num);
  }
}

const fs = require('fs');

const input = Number(fs.readFileSync('/dev/stdin').toString());

solution(input);
