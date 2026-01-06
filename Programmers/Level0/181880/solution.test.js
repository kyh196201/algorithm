/**
 *
 * @param {number[]} numList
 * @returns
 */
function solution(numList) {
  return numList.reduce((sum, num) => sum + (num.toString(2).length - 1), 0);
}

describe('1로 만들기', () => {
  it('test', () => {
    expect(solution([1])).toBe(0);
    expect(solution([2])).toBe(1);
    expect(solution([1, 2])).toBe(1);
    expect(solution([30])).toBe(4);
    expect(solution([12, 4, 15, 1, 14])).toBe(11);
  });
});
