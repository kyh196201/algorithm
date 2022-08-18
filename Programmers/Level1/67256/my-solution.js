function solution(numbers, hand) {
  const keys = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ['*', 0, '#'],
  ];

  function getPosition(num) {
    let x = -1;
    let y = -1;

    for (let i = 0; i < keys.length; i += 1) {
      for (let j = 0; j < keys[i].length; j += 1) {
        if (keys[i][j] === num) {
          x = i;
          y = j;
        }
      }
    }

    return [x, y];
  }

  function getDistance(pos1, pos2) {
    return Math.abs(pos1[0] - pos2[0]) + Math.abs(pos1[1] - pos2[1]);
  }

  let answer = '';

  const positions = {
    left: [3, 0],
    right: [3, 2],
  };

  answer = numbers
    .map(num => {
      const nextPos = getPosition(num);

      if (num % 3 === 1) {
        positions.left = nextPos;
        return 'L';
      }

      if (num > 0 && num % 3 === 0) {
        positions.right = nextPos;
        return 'R';
      }

      const lDistance = getDistance(positions.left, nextPos);
      const rDistance = getDistance(positions.right, nextPos);

      if (lDistance < rDistance) {
        positions.left = nextPos;
        return 'L';
      }

      if (rDistance < lDistance) {
        positions.right = nextPos;
        return 'R';
      }

      positions[hand] = nextPos;

      return hand === 'right' ? 'R' : 'L';
    })
    .join('');

  return answer;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const hand = 'right';
const answer = 'LLRLLRLLRL';
const result = solution(numbers, hand);

console.log(result, result === answer);
