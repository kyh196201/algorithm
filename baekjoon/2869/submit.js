const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function solution(a, b, v) {
  // 하루 동안 갈 수 있는 거리
  const heightPerDay = a - b;

  // 전날까지 도달해야할 최소 높이
  const destination = v - a;

  const result = Math.ceil(destination / heightPerDay);

  return result + 1;
}

let result;

rl.on('line', line => {
  const [a, b, v] = line.split(' ').map(char => Number(char));
  result = solution(a, b, v);
  rl.close();
}).on('close', () => {
  console.log(result);
  process.exit();
});
