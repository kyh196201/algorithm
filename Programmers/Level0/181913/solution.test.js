/**
 *
 * @param {string} string
 * @returns
 */
function reverseString(string) {
  return string.split('').reverse().join('');
}

/**
 *
 * @param {string} string
 * @param {number[][]} queries
 */
function solution(string, queries) {
  const result = string.split('');

  queries.forEach(([s, e]) => {
    while (s < e) {
      // s에서 e사이의 원소 자리 바꾸기
      [result[s], result[e]] = [result[e], result[s]];
      s++;
      e--;
    }
  });

  return result.join('');
}

describe('reverseString', () => {
  it('should return reversed string', () => {
    expect(reverseString('tap')).toBe('pat');
  });
});

describe('', () => {
  it('test', () => {
    expect(
      solution('rermgorpsam', [
        [2, 3],
        [0, 7],
        [5, 9],
        [6, 10],
      ]),
    ).toBe('programmers');
  });
});
