function solution(n) {
  let answer = '';

  if (n % 2 === 1) {
    // 홀수일 경우
    answer = `${'수박'.repeat(Math.floor(n / 2))}수`;
  } else {
    // 짝수일 경우
    answer = '수박'.repeat(Math.floor(n / 2));
  }

  return answer;
}

console.log(solution(3));
console.log(solution(4));
