const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
const counts = Array.from(Array(10001), () => 0);
const sorted = [];

rl.on('line', line => {
  input.push(+line);
}).on('close', () => {
  for (let i = 1; i < input.length; i += 1) {
    const value = input[i];
    counts[value] += 1;
  }

  counts.forEach((value, index) => {
    for (let k = 0; k < value; k += 1) {
      sorted.push(index);
    }
  });

  console.log(sorted.join('\n'));

  process.exit();
});
