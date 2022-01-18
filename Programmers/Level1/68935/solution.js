function solution(n) {
  let answer = 0;

  const numbers = [];

  // 3진법으로 변환
  while (n > 0) {
    numbers.push(n % 3);
    n = Math.floor(n / 3);
  }

  const len = numbers.length;

  // 10진법으로 변환
  answer = numbers.reduce(
    (sum, cur, index) => sum + cur * 3 ** (len - index - 1),
    0,
  );

  return answer;
}

console.log(solution(125)); // 229
