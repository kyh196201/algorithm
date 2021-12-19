// 다른 사람의 풀이를 참고한 풀이
function solution(board, moves) {
  const bags = [];
  let count = 0;

  moves.forEach(move => {
    for (let i = 0; i < board.length; i += 1) {
      const item = board[i][move - 1];

      if (item > 0) {
        if (item === bags[bags.length - 1]) {
          bags.pop();
          count += 2;
        } else {
          bags.push(item);
        }

        board[i][move - 1] = 0;
        break;
      }
    }
  });

  return count;
}

const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
const moves = [1, 5, 3, 5, 1, 2, 1, 4];

console.log(solution(board, moves));
