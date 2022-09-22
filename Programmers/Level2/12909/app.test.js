/**
 * 이해
 *
 * 주어지는 것
 * - `()`로만 이루어진 문자열
 *
 * 구해야하는 것
 * - 올바른 괄호인지 여부
 *
 * 조건
 *
 * 계획
 * - ')'가 나올때까지 계속 '('를 배열에 push
 * - ')'가 나왔을 경우 배열이 비어있으면 올바른 괄호가 아님
 * - ')'가 나왔을 경우 배열에 '('가 있을 경우 배열에서 가장 마지막 항목을 제거함
 * - 마지막 항목까지 검사했는데, 배열이 비어있을 경우 올바른 괄호임
 *
 * 반성
 */
function isPair(s = '') {
  if (!s) return false;

  const stack = [];

  for (let i = 0; i < s.length; i += 1) {
    const char = s.charAt(i);

    if (char === '(') {
      stack.push(char);
    } else if (!stack.length) {
      return false;
    } else {
      stack.pop();
    }
  }

  return stack.length === 0;
}

describe('올바른 괄호', () => {
  it('test', () => {
    expect(isPair('')).toBe(false);

    expect(isPair('(')).toBe(false);

    expect(isPair(')')).toBe(false);

    expect(isPair('()()')).toBe(true);

    expect(isPair('(())()')).toBe(true);

    expect(isPair('(()(')).toBe(false);
  });
});
