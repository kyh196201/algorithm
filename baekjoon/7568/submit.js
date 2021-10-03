const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const compare = (p1, p2) => {
  if (p1[0] > p2[0] && p1[1] > p2[1]) {
    return 1;
  }
  if (p2[0] > p1[0] && p2[1] > p1[1]) {
    return -1;
  }

  return 0;
};

const input = [];

rl.on('line', line => {
  input.push(line);
}).on('close', () => {
  const N = Number(input.splice(0, 1));

  const cases = input.map(c => c.split(' ').map(v => +v));

  const ranks = Array.from(Array(N), () => 1);

  for (let i = 0; i < N - 1; i += 1) {
    for (let j = i + 1; j < N; j += 1) {
      const compareResult = compare(cases[i], cases[j]);

      //   자신이 작을 경우 자기 등수 + 1
      if (compareResult < 0) {
        ranks[i] += 1;
      } else if (compareResult > 0) {
        //   자신이 클 경우 다른 사람의 등수 + 1
        ranks[j] += 1;
      }
    }
  }

  console.log(ranks.join(' '));

  process.exit();
});
