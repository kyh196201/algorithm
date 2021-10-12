function solution(arr) {
  if (!arr.length) return [];

  const answer = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    const top = answer[answer.length - 1];

    if (top !== arr[i]) {
      answer.push(arr[i]);
    }
  }

  return answer;
}

const arr = [1, 1, 3, 3, 0, 1, 1];

console.log(solution(arr));
