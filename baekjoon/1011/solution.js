const input = ['4', '0 3', '1 5', '45 50', '0 1'];

const count = +input[0];

let result = '';

for (let i = 1; i <= count; i += 1) {
  const [x, y] = input[i].split(' ').map(v => +v);

  if (i > 1) {
    result += '\n';
  }

  result += `${solution(x, y)}`;
}

console.log(result);

/**
 *
 * @param {number} x : 출발 위치
 * @param {number} y : 도착 위치
 */
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
