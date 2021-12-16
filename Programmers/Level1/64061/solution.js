function solution(board, moves) {
  const getItem = move => {
    const len = board.length;
    let item = null;

    for (let i = 0; i < len; i += 1) {
      if (board[i][move] > 0) {
        item = board[i][move];
        board[i][move] = 0;
        break;
      }
    }

    return item;
  };

  const bags = [];
  let count = 0;

  moves.forEach(move => {
    // 1. 숫자 하나 뽑기
    const item = getItem(move - 1);
    const bagLength = bags.length;

    // 2. 바구니의 값과 비교
    if (item) {
      if (bags[bagLength - 1] === item) {
        count += 2;
        bags.pop();
      } else {
        bags.push(item);
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
// 4, 3, 1, 1, 3,
const moves = [1, 5, 3, 5, 1, 2, 1, 4];

console.log(solution(board, moves));
