const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', line => {
  input.push(line);
}).on('close', () => {
  const answer = [];

  const inputLength = input.length;

  for (let i = 0; i < inputLength; i += 1) {
    const [x, y] = input[i].split(' ');
    let xCount = 1;
    let yCount = 1;

    for (let j = 0; j < inputLength; j += 1) {
      if (i !== j) {
        const [dx, dy] = input[j].split(' ');

        if (dx === x) {
          xCount += 1;
        }

        if (dy === y) {
          yCount += 1;
        }
      }
    }

    if (xCount === 1) answer[0] = +x;
    if (yCount === 1) answer[1] = +y;
  }

  console.log(answer.join(' '));
  process.exit();
});
