function solution(n) {
  let answer = -1;

  if (n % 5 === 0) {
    return n / 5;
  }

  const count = Math.floor(n / 5);

  for (let i = count; i >= 0; i--) {
    const num = n - 5 * i;

    if (num % 3 === 0) {
      answer = i + Math.floor(num / 3);
      break;
    }
  }

  return answer;
}

console.log(solution(11));
