const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function solution(x) {
  let sum = 1;
  let n = 1;

  while (x > sum) {
    sum += 6 * n;
    n += 1;
  }

  return n;
}

let result;

rl.on('line', line => {
  result = solution(parseInt(line, 10));
  rl.close();
}).on('close', () => {
  console.log(result);
  process.exit();
});
