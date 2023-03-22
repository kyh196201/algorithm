/**
 * 이해
 *
 * 구해야할 것
 * - 최소한의 거리로 바탕화면의 파일을 모두 선택할 수 있는 S, E의 좌표 값
 *
 * 조건
 * - .은 공백
 * - #은 파일이 있는 위치
 * - wallpaper[i][j]는 바탕화면에서 i + 1, j + 1에 해당하는 칸의 상태를 나타냄
 *
 * 계획
 * - 파일이 있는 위치를 탐색하면서 x, y의 최솟값 x, y의 최댓값을 구한다.
 * - S의 좌표는 x, y의 최솟값
 * - E의 좌표는 x, y의 최댓값에 각각 1을 더한 값
 */
/**
 *
 * @param {Array<string>} wallpaper
 * @returns
 */
function solution(wallpaper = []) {
  const x = [];
  const y = [];

  const regex = /#/g;

  wallpaper.forEach((line, index) => {
    [...line.matchAll(regex)].forEach(result => {
      y.push(result.index);
      x.push(index);
    });
  });

  const S = [Math.min(...x), Math.min(...y)];
  const E = [Math.max(...x) + 1, Math.max(...y) + 1];

  return [...S, ...E];
}

describe('바탕화면 정리', () => {
  it('test', () => {
    expect(solution(['.#...', '..#..', '...#.'])).toEqual([0, 1, 3, 4]);
    expect(
      solution([
        '..........',
        '.....#....',
        '......##..',
        '...##.....',
        '....#.....',
      ]),
    ).toEqual([1, 3, 5, 8]);
    expect(
      solution([
        '.##...##.',
        '#..#.#..#',
        '#...#...#',
        '.#.....#.',
        '..#...#..',
        '...#.#...',
        '....#....',
      ]),
    ).toEqual([0, 0, 7, 9]);
    expect(solution(['..', '#.'])).toEqual([1, 0, 2, 1]);
  });
});
