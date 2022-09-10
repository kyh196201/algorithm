/**
 * 이해
 *
 * 주어지는 것
 * - 각 명함의 [가로, 세로]가 담긴 배열
 *
 * 구해야하는 것
 * - 모든 명함을 담을 수 있는 가장 작은 지갑의 너비
 *
 * 조건
 *
 * 계획(순서)
 * - 가로, 세로 한 방향으로 큰 값을 다 몰아 넣는다.
 * - 가로, 세로 중에서 가장 큰 값을 구하고 두 값을 곱한 값이 가장 작은 지갑의 너비이다.
 *
 * - max width를 구한다
 * - max height을 구한다
 *
 * 반성
 * - maxWidth와 maxHeight을 구하기 위해서 반복문을 너무 많이 사용했는데, 효율이 떨어지는 것 같다.
 * - 반복문 한 번으로 maxWidth, maxHeight을 구하는 방법을 참고해서 풀이를 수정했다.
 */
function solution(sizes = []) {
  const sorted = sizes.map(size => size.sort((a, b) => b - a));

  // 첫 번째 풀이
  // const widths = sorted.map(([w]) => w);
  // const maxWidth = Math.max(...widths);

  // const heights = sorted.map(([, h]) => h);
  // const maxHeight = Math.max(...heights);

  // return maxWidth * maxHeight;
  const maxSize = [0, 0];

  sorted.forEach(([w, h]) => {
    if (w > maxSize[0]) maxSize[0] = w;
    if (h > maxSize[1]) maxSize[1] = h;
  });

  return maxSize[0] * maxSize[1];
}

describe('최소직사각형', () => {
  it('test', () => {
    expect(
      solution([
        [60, 50],
        [30, 70],
        [60, 30],
        [80, 40],
      ]),
    ).toBe(4000);

    expect(
      solution([
        [10, 7],
        [12, 3],
        [8, 15],
        [14, 7],
        [5, 15],
      ]),
    ).toBe(120);

    expect(
      solution([
        [14, 4],
        [19, 6],
        [6, 16],
        [18, 7],
        [7, 11],
      ]),
    ).toBe(133);
  });
});
