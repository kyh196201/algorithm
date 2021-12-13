const numberMaps = new Map();
const numberArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  ['*', 0, '#'],
];

for (let i = 0; i < numberArray.length; i += 1) {
  const row = numberArray[i];

  for (let j = 0; j < row.length; j += 1) {
    const num = row[j];
    const coords = [i, j];

    if (typeof num === 'number') {
      numberMaps.set(num, coords);
    }
  }
}

function solution(numbers = [], hand = 'right') {
  function getDistance(start = [0, 0], end = [0, 0]) {
    return Math.abs(start[0] - end[0]) + Math.abs(start[1] - end[1]);
  }

  const coords = {
    left: [3, 0],
    right: [3, 2],
  };

  const answer = numbers
    .map(num => {
      const currentCoord = numberMaps.get(num);

      if (num % 3 === 1) {
        coords.left = currentCoord;
        return 'L';
      }

      if (num % 3 === 0 && !!num) {
        coords.right = currentCoord;
        return 'R';
      }

      const leftDistance = getDistance(coords.left, currentCoord);
      const rightDistance = getDistance(coords.right, currentCoord);

      if (leftDistance > rightDistance) {
        coords.right = currentCoord;
        return 'R';
      }

      if (rightDistance > leftDistance) {
        coords.left = currentCoord;
        return 'L';
      }

      coords[hand] = currentCoord;

      return hand === 'left' ? 'L' : 'R';
    })
    .join('');

  return answer;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const hand = 'right';
const answer = 'LLRLLRLLRL';
const result = solution(numbers, hand);

console.log(result, result === answer);
