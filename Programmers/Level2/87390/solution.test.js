/**
 * 이해
 *
 * 주어지는 것
 *
 * 구해야하는 것
 *
 * 조건
 *
 * 계획
 *
 * 반성
 */

/**
 * [1, 2, 3, 4]
 * [2, 2, 3, (4)]
 * [3, 3, 3, 4]
 * [4, 4, (4), 4]
 *
 * left = 7, right = 14
 *
 * left, right의 좌표(row, col)를 구하는 공식
 * row = Math.floor(left / n)
 * col = left % n
 *
 * start(row, col) = Math.floor(7 / 4), 7 % 4 -> [1, 3]
 * end(row, col) = Math.floor(14 / 4), 14 % 4 -> [3, 2]
 *
 * 각 좌표에 있는 숫자 = Math.max(row, col) + 1
 *
 * start ~ end까지 출력하면 [3, 2, 2, 3]
 *
 * i행 i열의 숫자 = 행/열 둘 중에 큰 값 + 1
 *
 * 1. if (row === start) col ~ n-1까지 출력
 * 2. if (row !== end) 0 ~ n-1까지 출력
 * 3. if (row === end) 0 ~ col까지 출력
 */

/**
 * [1, 2, 3]
 * [(2), (2), 3]
 * [3, 3, 3]
 *
 * left = 3, right = 4
 *
 * start = [1, 0]
 * end = [1, 1]
 *
 */

function getCoord(n = 1, index = 0) {
  const row = Math.floor(index / n);
  const col = index % n;

  return [row, col];
}

function getCoordNumber(row, col) {
  return Math.max(row, col) + 1;
}

function solution(n = 1, left = 0, right = 0) {
  if (left === 0 && right === 0) {
    return 1;
  }

  const start = getCoord(n, left);
  const end = getCoord(n, right);

  const result = [];

  for (let row = start[0]; row <= end[0]; row++) {
    const startCol = row === start[0] ? start[1] : 0;
    const endCol = row === end[0] ? end[1] : n - 1;

    for (let col = startCol; col <= endCol; col++) {
      result.push(getCoordNumber(row, col));
    }
  }

  return result;
}

describe('n^2 배열 자르기', () => {
  it('test', () => {
    expect(solution(3, 2, 5)).toEqual([3, 2, 2, 3]);
    expect(solution(4, 7, 14)).toEqual([4, 3, 3, 3, 4, 4, 4, 4]);
    // start[0], end[0]이 같은 케이스
    expect(solution(3, 3, 4)).toEqual([2, 2]);
  });
});
