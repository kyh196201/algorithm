/* eslint-disable camelcase */
function solution(lottos, win_nums) {
  function getGrade(num) {
    if (num <= 1) return 6;

    return 7 - num;
  }

  const zeroCount = lottos.filter(num => num === 0).length;

  const minCount = lottos.filter(num => win_nums.includes(num)).length;

  const max = getGrade(zeroCount + minCount);
  const min = getGrade(minCount);

  return [max, min];
}

const lottos = [44, 1, 0, 0, 31, 25];
const winNums = [31, 10, 45, 1, 6, 19];

console.log(solution(lottos, winNums)); // [3, 5]
