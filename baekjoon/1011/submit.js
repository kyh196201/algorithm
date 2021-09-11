const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const count = +input[0];
let result = '';

for (let i = 1; i <= count; i++) {
  const [x, y] = input[i].split(' ').map(value => Number(value));

  if (i > 1) {
    result += '\n';
  }

  result += `${solution(x, y)}`;
}

console.log(result);

function solution(x, y) {
  let answer = 0;
  const distance = y - x;

  const maxDistance = Math.floor(Math.sqrt(distance));

  if (maxDistance ** maxDistance === distance) {
    answer = maxDistance * 2 - 1;
  } else if (
    distance > maxDistance ** maxDistance &&
    distance <= maxDistance ** maxDistance + maxDistance
  ) {
    answer = maxDistance * 2;
  } else {
    answer = maxDistance * 2 + 1;
  }

  return answer;
}
