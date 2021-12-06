// 내가 작성한 풀이
function mySolution(lottos, winNums) {
  function getRank(count = 0) {
    return count > 1 ? 7 - count : 6;
  }

  let count = 0;
  let countOfZero = 0;

  lottos.forEach(num => {
    if (num === 0) countOfZero += 1;
    else if (winNums.includes(num)) {
      count += 1;
    }
  });

  const maxRank = getRank(count + countOfZero);
  const minRank = getRank(count);

  return [maxRank, minRank];
}

// 다른 사람의 풀이를 참고해서 다시 작성한 풀이
function solution(lottos = [], winNums = []) {
  function getRank(count = 0) {
    return count > 1 ? 7 - count : 6;
  }

  const ranks = [6, 6, 5, 4, 3, 2, 1];

  const minCount = lottos.filter(num => winNums.includes(num)).length;
  const zeroCount = lottos.filter(num => !num).length;
  const maxCount = minCount + zeroCount;

  //   return [getRank(maxCount), getRank(minCount)];
  return [ranks[maxCount], ranks[minCount]];
}

const lottos = [44, 1, 0, 0, 31, 25];
const winNums = [31, 10, 45, 1, 6, 19];

// [3, 5]
console.log(mySolution(lottos, winNums));
console.log(solution(lottos, winNums));
