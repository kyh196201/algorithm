/**
 * 이해
 *
 * 주어지는 것
 *
 * 구해야하는 것
 *
 * 조건
 * - 1 <= s.length <= 10^5
 * - 0 <= k <= s.length
 *
 * 계획
 *
 * 반성
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
function solution(s, k) {
  const charMap = {};
  let maxLength = 0;
  let maxCharCount = 0;
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    const char = s.charAt(right);
    // if (!charMap[char]) {
    //   charMap[char] = 0;
    // }
    charMap[char] = (charMap[char] || 0) + 1;

    maxCharCount = Math.max(maxCharCount, charMap[char]);

    if (right - left + 1 - maxCharCount > k) {
      while (right - left + 1 - maxCharCount > k) {
        charMap[s.charAt(left)] -= 1;
        left += 1;

        maxCharCount = Math.max(
          maxCharCount,
          Math.max(...Object.values(charMap)),
        );
      }
    }

    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

describe('longest-repeating-character-replacement', () => {
  it('test', () => {
    expect(solution('ABAB', 2)).toBe(4);
    expect(solution('AABABBA', 1)).toBe(4);
  });
});
