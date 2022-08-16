function solution(num = 1) {
  let count = 0;

  while (num !== 1 && count < 500) {
    num = num % 2 === 0 ? num / 2 : 3 * num + 1;
    count += 1;
  }

  return num === 1 ? count : -1;
}

console.log(solution(16)); // 4
