function solution(array, commands) {
  let answer = [];

  answer = commands.map(c => {
    const [from, to, position] = c;

    const convertedArr = array.slice(from - 1, to).sort((a, b) => a - b);

    return convertedArr[position - 1];
  });

  return answer;
}

const array = [1, 5, 2, 6, 3, 7, 4];
const commands = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
];

// [5, 6, 3]
const result = solution(array, commands);
console.log(result);
