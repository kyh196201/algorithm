function solution(n) {
  let answer = 0;
  let i = 1;

  for (i; i <= Math.sqrt(n); i += 1) {
    if (n % i === 0) {
      answer += n / i + i;
    }
  }

  i -= 1;

  return i === n / i ? answer - i : answer;
}

console.log(solution(12)); // 28
