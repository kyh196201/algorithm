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
 * - 행렬의 곱 an * nb = ab
 * - 완성되는 행렬은 arr1.length * arr2[0].length
 * - 완성되는 행렬이 a행 b열이므로 길이가 a인 2차원 배열, 배열의 각 원소는 길이가 b인 배열
 * - i행 j열의 원소의 값을 구하는 방법
 *  - k = 0에서 arr2.length까지
 *  - result[i][j]을 0으로 초기화
 *  - result[i][j] += arr1[i][k] * arr2[k][j]
 *
 * 반성
 */

function solution(arr1, arr2) {
  const result = [];
  const row = arr1.length;
  const col = arr2[0].length;

  for (let i = 0; i < row; i++) {
    result.push(Array.from({length: col}, () => 0));

    for (let j = 0; j < col; j++) {
      let sum = 0;

      for (let k = 0; k < arr2.length; k++) {
        sum += arr1[i][k] * arr2[k][j];
      }

      result[i][j] = sum;
    }
  }

  return result;
}

describe('행렬의 곱셈', () => {
  it('test', () => {
    expect(
      solution(
        [
          [1, 4],
          [3, 2],
          [4, 1],
        ],
        [
          [3, 3],
          [3, 3],
        ],
      ),
    ).toEqual([
      [15, 15],
      [15, 15],
      [15, 15],
    ]);

    expect(
      solution(
        [
          [1, 2],
          [3, 4],
        ],
        [
          [5, 6, 7],
          [8, 9, 10],
        ],
      ),
    ).toEqual([
      [21, 24, 27],
      [47, 54, 61],
    ]);
  });
});
