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
 * @param {string} s
 * @return {number}
 */
function solution(s) {
  let count = 0;

  const dp = {};

  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = i; j < s.length; j++) {
      if (!dp[i]) dp[i] = {};

      if (i === j) {
        dp[i][j] = true;
      } else if (j - i === 1) {
        dp[i][j] = s[i] === s[j];
      } else {
        dp[i][j] = dp[i + 1][j - 1] && s[i] === s[j];
      }

      if (dp[i][j]) {
        count += 1;
      }
    }
  }

  return count;
}

describe('palindromic-substring', () => {
  it('test', () => {
    expect(solution('abc')).toBe(3);
  });
});
