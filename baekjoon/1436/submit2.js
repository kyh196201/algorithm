const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 숫자가 666을 가지고 있는지 확인하는 함수
const hasPattern = num => {
  while (num >= 666) {
    if (num % 1000 === 666) {
      return true;
    }

    num = Math.floor(num / 10);
  }

  return false;
};

let count = 0;
let start = 666;

rl.on('line', line => {
  const N = Number(line);

  while (count < N) {
    if (hasPattern(start)) {
      count += 1;
    }

    start += 1;
  }

  //   마지막 while문을 빠져나올 때 start + 1을 해주므로 정답은 start - 1
  console.log(start - 1);
}).on('close', () => {
  process.exit();
});
