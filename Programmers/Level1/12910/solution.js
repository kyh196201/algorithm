function solution(arr, divisor) {
  const answer = divisor > 1 ? arr.filter(item => item % divisor === 0) : arr;

  return answer.length > 0 ? answer.sort((a, b) => a - b) : [-1];
}

const arr = [5, 9, 7, 10];
const divisor = 5;

console.log(solution(arr, divisor));
