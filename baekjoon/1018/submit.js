const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', line => {
  input.push(line);
}).on('close', () => {
  const [N, M] = input
    .shift()
    .split(' ')
    .map(v => Number(v));

  const plates = input.map(v => v.split(''));

  let minCount = 0;

  for (let row = 0; row <= N - 8; row += 1) {
    for (let col = 0; col <= M - 8; col += 1) {
      let count = 0;

      for (let i = row; i < row + 8; i += 1) {
        const currentRow = plates[i];

        const bCount = currentRow.filter(
          (e, idx) => e === 'B' && idx >= col && idx < col + 8,
        ).length;

        count += Math.abs(4 - bCount);
      }

      if (!minCount || count < minCount) {
        minCount = count;
      }
    }
  }

  console.log(minCount);

  process.exit();
});
