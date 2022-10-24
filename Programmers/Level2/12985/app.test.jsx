/**
 * 이해
 * - 구해야하는 것: A, B 참가자가 몇번째 라운드에서 만나는지
 * - 주어지는 것: 총 참가자수 N, A의 번호, B의 번호
 *
 * 조건
 */

// eslint-disable-next-line no-unused-vars
function solution(n = 2, a = 1, b = 1) {
  let round = 0;

  while (a !== b) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);

    round += 1;
  }

  return round;
}

describe('예상 대진표', () => {
  it('test', () => {
    expect(solution(8, 4, 7)).toBe(3);
  });
});
