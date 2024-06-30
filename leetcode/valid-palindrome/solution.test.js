/**
 * 이해
 * - palindrome은 거꾸로 읽어도 똑같은 문장을 의미한다.
 *
 * 주어지는 것
 * - 문자열 s
 *
 * 구해야하는 것
 * - 주어진 문자열을 모두 소문자로 변환하고, 숫자와 알파벳이 아닌 문자를 모두 제거된 새로운 문자열을 얻는다.
 * - 이 문자열이 palindrome인지 구한다.
 *
 * 조건
 *
 * 계획
 * - 소문자로 변환하고, 숫자와 알파벳을 제외한 모든 문자를 제거한다.
 * - 순서를 반대로 뒤집은 새로운 문자열을 구한다
 * - 두 문자열이 같을 경우 true를 반환한다.
 *
 * 반성
 */

/**
 * @param {string} s
 * @return {boolean}
 */
function isPalindrome(s) {
  s = s.replace(/[^0-9a-z]/gi, '');
  s = s.toLowerCase();

  let reversed = '';
  for (let i = 0; i < s.length; i++) {
    reversed += s[s.length - 1 - i];
  }

  return s === reversed;
}

/**
 * @param {string} s
 * @return {boolean}
 */
function isPalindrome2(s) {
  const isLetterOrDigit = char => /[0-9a-z]/gi.test(char);

  let left = 0;
  let right = s.length - 1;

  while (right > left) {
    const curLeft = s.charAt(left);
    const curRight = s.charAt(right);

    if (!isLetterOrDigit(curLeft)) {
      left += 1;
    } else if (!isLetterOrDigit(curRight)) {
      right -= 1;
    } else {
      if (curLeft.toLowerCase() !== curRight.toLowerCase()) {
        return false;
      }

      left += 1;
      right -= 1;
    }
  }

  return true;
}

describe('valid-palindrome', () => {
  it('solution1', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
    expect(isPalindrome('race a car')).toBe(false);
    expect(isPalindrome(' ')).toBe(true);
  });

  it('solution2 - two pointer', () => {
    expect(isPalindrome2('A man, a plan, a canal: Panama')).toBe(true);
    expect(isPalindrome2('race a car')).toBe(false);
    expect(isPalindrome2(' ')).toBe(true);
  });
});
