function solution(N, stages) {
  let percents = [];

  for (let i = 1; i <= N; i += 1) {
    const fails = stages.filter(stage => stage === i).length;
    const reaches = stages.filter(stage => stage >= i).length;
    const percent = reaches > 0 ? fails / reaches : 0;

    percents.push([i, percent]);
  }

  percents = percents.sort((prev, next) => next[1] - prev[1]);

  return percents.map(p => p[0]);
}

const stages = [2, 1, 2, 6, 2, 4, 3, 3];
const N = 5;

console.log(solution(N, stages)); // [3, 4, 2, 1, 5]
