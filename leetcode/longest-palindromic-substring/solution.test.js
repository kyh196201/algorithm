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
 * @param {string} input
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
function isPalindrome(input, start, end) {
  while (end > start) {
    if (input.charAt(end) !== input.charAt(start)) {
      return false;
    }

    start++;
    end--;
  }

  return true;
}

/**
 * @param {string} s
 * @return {string}
 */
function solution1(s) {
  /**
   * - 모든 부분 문자열을 검사한다.
   * - 회문일 경우
   *  - 현재 가장 긴 회문의 길이와 비교, 더 길 경우 교체
   */

  let maxStart = 0;
  let maxEnd = 0;

  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      if (isPalindrome(s, i, j) && j - i > maxEnd - maxStart) {
        maxStart = i;
        maxEnd = j;
      }
    }
  }

  return s.substring(maxStart, maxEnd + 1);
}

/**
 * @param {string} s
 * @return {string}
 */
function solution2(s) {
  /**
   * - 각 인덱스를 기준으로 가장 긴 회문을 찾는다
   * - 가장 긴 회문을 찾는 방법
   *  - 양 쪽에 한 글자씩 더한다
   *  - 회문일 경우 (양 쪽에 추가되는 글자가 같다)
   *    - 현재 가장 긴 회문과 길이를 비교하고, 더 길 경우 갱신
   *  - 회문이 아닐 경우
   *    - 종료
   */

  let maxLeft = 0;
  let maxRight = 0;

  for (let i = 0; i < s.length; i++) {
    let left = i;
    let right = i;

    while (
      left >= 0 &&
      right < s.length &&
      s.charAt(left) === s.charAt(right)
    ) {
      if (right - left > maxRight - maxLeft) {
        maxRight = right;
        maxLeft = left;
      }

      left -= 1;
      right += 1;
    }

    // 회문의 길이가 짝수인 케이스
    // 중앙에 2개의 문자를 하나로 묶어 놓고 회문을 확장
    left = i;
    right = i + 1;

    while (
      left >= 0 &&
      right < s.length &&
      s.charAt(left) === s.charAt(right)
    ) {
      if (right - left > maxRight - maxLeft) {
        maxRight = right;
        maxLeft = left;
      }

      left -= 1;
      right += 1;
    }
  }

  return s.substring(maxLeft, maxRight + 1);
}

describe('longest-palindromic-substring', () => {
  it('test', () => {
    expect(solution1('babad')).toBe('bab');
  });

  it.only('test2', () => {
    expect(solution2('babad')).toBe('bab');
    expect(solution2('cbbd')).toBe('bb');
  });
});
