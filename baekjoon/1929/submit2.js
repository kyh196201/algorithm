// 에라토스테네스의 체 알고리즘을 이용한 풀이 제출
const fs = require('fs');

const [M, N] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .split(' ')
  .map(value => +value);

function solution(start, end) {
  const numbers = [];

  //   배열 초기화
  for (let i = start; i <= end; i += 1) {
    numbers.push(i);
  }

  const lastIndex = numbers.length - 1;

  //   소수 찾기
  for (let divisor = 2, s = Math.sqrt(end); divisor <= s; divisor += 1) {
    let index = 0;
    while (index <= lastIndex) {
      const currentNum = numbers[index];

      if (currentNum !== divisor && currentNum > 0) {
        if (currentNum % divisor === 0) {
          numbers[index] = 0;
        }
      }

      index += 1;
    }
  }

  //   numbers 배열 내 소수의 출력
  numbers.forEach(num => {
    if (num > 1) {
      console.log(num);
    }
  });
}

solution(M, N);
