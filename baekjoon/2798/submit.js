const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', line => {
  input.push(line);
}).on('close', () => {
  const [cardLength, max] = input[0].split(' ').map(v => +v);
  const cards = input[1].split(' ').map(v => +v);
  let maxSum = 0;

  for (let i = 0; i < cardLength - 2; i += 1) {
    for (let j = i + 1; j < cardLength - 1; j += 1) {
      for (let k = j + 1; k < cardLength; k += 1) {
        const sum = cards[i] + cards[j] + cards[k];
        if (sum <= max && sum > maxSum) {
          maxSum = sum;
        }
      }
    }
  }

  console.log(maxSum);

  process.exit();
});
