function solution(n) {
  let answer = 0;
  const num = n - 1;

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      answer = i;
      break;
    }
  }

  return answer > 0 ? answer : num;
}

console.log(solution(10)); // 3
