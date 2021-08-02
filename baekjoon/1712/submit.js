const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const isInteger = num => num === parseInt(num, 10);

function solution(a, b, c) {
  let result = -1;

  if (c - b <= 0) {
    return -1;
  }

  const x = a / (c - b);

  if (isInteger(x)) {
    result = x + 1;
  } else {
    result = Math.ceil(x, 10);
  }

  return result;
}

function solution2(a, b, c) {
  if (c - b <= 0) return -1;

  const x = a / (c - b);

  return Math.floor(x) + 1;
}

let result;

rl.on('line', line => {
  const input = line.split(' ').map(l => Number(l));
  result = solution2(...input);
  rl.close();
}).on('close', () => {
  console.log(result);
  process.exit();
});
