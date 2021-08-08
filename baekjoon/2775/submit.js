const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const maxLen = 15;
const apartment = Array.from(new Array(maxLen), () => new Array(maxLen));
const T = +input.shift();
let result = '';

for (let i = 0; i < maxLen; i += 1) {
  apartment[0][i] = i;
}

function solution(k, n) {
  if (n === 0) return 0;

  if (apartment[k][n] >= 0) return apartment[k][n];

  apartment[k][n] = solution(k, n - 1) + solution(k - 1, n);
  return apartment[k][n];
}

for (let j = 0; j < T; j += 1) {
  if (j !== 0) {
    result += '\n';
  }

  const k = +input.shift();
  const n = +input.shift();

  result += `${solution(k, n)}`;
}

console.log(result);
