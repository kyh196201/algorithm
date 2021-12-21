function solution(numbers = []) {
  const temp = [];

  for (let i = 0; i < numbers.length - 1; i += 1) {
    for (let j = i + 1; j < numbers.length; j += 1) {
      temp.push(numbers[i] + numbers[j]);
    }
  }

  // 1. 내 풀이
  //   const answer = [];
  //   temp.forEach(sum => {
  //     if (!answer.includes(sum)) {
  //       answer.push(sum);
  //     }
  //   });

  // 2. Set을 이용한 풀이
  const answer = [...new Set(temp)];

  return answer.sort((a, b) => a - b);
}

const numbers = [2, 1, 3, 4, 1];

console.log(solution(numbers));
