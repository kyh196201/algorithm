function solution(x) {
  let sum = 1;
  let n = 1;

  while (x > sum) {
    sum += 6 * n;
    n += 1;
  }

  return n;
}

console.log(solution(58));
