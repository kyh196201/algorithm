/**
 *
 * @param {string} s
 */
function lengthOfLongestSubstring(s) {
  let max = 0;
  let left = 0;
  let right = 0;
  const set = new Set();

  while (right < s.length) {
    const ch = s[right];

    // 문자가 중복될 경우
    if (set.has(ch)) {
      set.delete(s[left]);
      left += 1;
    } else {
      max = Math.max(max, right - left + 1);
      set.add(ch);
      right += 1;
    }
  }

  return max;
}

describe('투 포인터로 중복 없는 최장 부분 문자열 길이 구하기', () => {
  it('test', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toBe(3);
    expect(lengthOfLongestSubstring('bbbbb')).toBe(1);
    expect(lengthOfLongestSubstring('pwwkew')).toBe(3);
    expect(lengthOfLongestSubstring('')).toBe(0);
  });
});
