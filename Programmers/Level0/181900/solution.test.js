/**
 *
 * @param {string} string
 * @param {number[]} indices
 */
function solution(string, indices) {
  return [...string].filter((_, index) => !indices.includes(index)).join('');
}

describe('글자 지우기', () => {
  it('test', () => {
    expect(solution('apporoograpemmemprs', [1, 16, 6, 15, 0, 10, 11, 3])).toBe(
      'programmers',
    );
  });
});
