function solution(n) {
  let count = 0;

  //   배열 초기화
  const numbers = Array.from(Array(n + 1), () => true);

  //   0, 1은 소수가 아니므로 false로 설정
  numbers[1] = false;
  numbers[0] = false;

  for (let i = 2, s = Math.sqrt(n); i <= s; i += 1) {
    if (numbers[i]) {
      // i의 배수에 해당하는 인덱스에 해당하는 값 false로 변경
      for (let j = i + i; j < numbers.length; j += i) {
        if (numbers[j]) {
          numbers[j] = false;
        }
      }
    }
  }

  count = numbers.filter(value => !!value).length;

  return count;
}

solution(10);
