// 베르트랑 공준 소수의 갯수 구하기
function solution(start) {
  const end = start * 2;

  const numbers = Array.from(Array(end + 1), () => true);

  numbers[0] = false;
  numbers[1] = false;

  for (let divisor = 2, s = Math.sqrt(end); divisor <= s; divisor += 1) {
    if (numbers[divisor]) {
      for (let i = divisor * 2; i < numbers.length; i += divisor) {
        numbers[i] = false;
      }
    }
  }

  let count = 0;

  for (let j = start + 1; j <= end; j += 1) {
    if (numbers[j]) count += 1;
  }

  console.log(count);
}

solution(100000);
