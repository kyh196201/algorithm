const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function solution(input) {
  const answer = [];
  let suffix = 0;

  input = input.split(' ');
  const A = input[0].split('').reverse();
  const B = input[1].split('').reverse();

  const aLen = A.length;
  const bLen = B.length;

  const len = Math.max(aLen, bLen);

  for (let i = 0; i < len; i += 1) {
    const a = A[i] ? parseInt(A[i], 10) : 0;
    const b = B[i] ? parseInt(B[i], 10) : 0;

    const sum = a + b + suffix;

    answer.push(sum % 10);
    suffix = Math.floor(sum / 10);
  }

  if (suffix > 0) {
    answer.push(suffix);
  }

  return answer.reverse().join('');
}

let result = '';

rl.on('line', line => {
  result = solution(line);

  rl.close();
}).on('close', () => {
  console.log(result);
  process.exit();
});
