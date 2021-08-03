const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function solution(x) {
  let i = 1;
  let sum = 1;
  let diff = 0;

  while (sum < x) {
    i += 1;
    sum = (i * (i + 1)) / 2;
  }

  diff = sum - x;

  return i % 2 === 0 ? `${i - diff}/${1 + diff}` : `${1 + diff}/${i - diff}`;
}

let result;

rl.on('line', line => {
  result = solution(Number(line));
  rl.close();
}).on('close', () => {
  console.log(result);
  process.exit();
});
