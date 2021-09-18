const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function solution(r) {
  //   유클리드 원 넓이
  const euclid = Math.PI * r ** 2;

  const taxi = (2 * r) ** 2 / 2;

  return `${euclid.toFixed(6)}\n${taxi.toFixed(6)}`;
}

let result = '';

rl.on('line', line => {
  result = solution(Number(line));
}).on('close', () => {
  console.log(result);
  process.exit();
});
