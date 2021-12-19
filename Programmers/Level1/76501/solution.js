function solution(absolutes, signs) {
  const answer = absolutes.reduce(
    (acc, cur, index) => (acc += signs[index] ? cur : -cur),
    0,
  );
  return answer;
}

const absolutes = [4, 7, 12];
const signs = [true, false, true];

// result 9
console.log(solution(absolutes, signs));
