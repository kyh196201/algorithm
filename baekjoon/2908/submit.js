const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const reverseNumber = num =>
  parseInt(num.toString().split('').reverse().join('') * Math.sign(num), 10);

function solution(num1, num2) {
  return Math.max(0, reverseNumber(num1), reverseNumber(num2));
}

let result;

rl.on('line', line => {
  result = solution(...line.split(' '));

  rl.close();
}).on('close', () => {
  console.log(result);
  process.exit();
});
