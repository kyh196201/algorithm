/**
 * 이해
 * - 소,중,대 괄호로 이루어진 문자열이 주어진다.
 * - 문자열 s가 주어진다.
 *
 * 구해야할 것
 * - 문자열을 왼쪽으로 x만큼 이동시켰을 때 올바른 괄호가 되는 x의 개수
 *
 * 조건
 * - x (0 ≤ x < (s의 길이))
 *
 * 계획
 * -
 */
function isValid(s = '') {
  const stack = [];
  const brakets = {
    ']': '[',
    '}': '{',
    ')': '(',
  };

  for (let i = 0; i < s.length; i += 1) {
    const char = s[i];

    if (!stack.length) {
      stack.push(char);
    } else {
      const top = stack[stack.length - 1];

      if (
        (top === brakets[char] && char === ']') ||
        (top === brakets[char] && char === '}') ||
        (top === brakets[char] && char === ')')
      ) {
        stack.pop();
      } else {
        stack.push(char);
      }
    }
  }

  return stack.length === 0;
}

function solution(s = '') {
  // 문자열의 길이가 홀수일 경우 절대 만족할 수 없으므로 return
  // 한 번 거르면 좋다
  if (s.length % 2 === 1) {
    return 0;
  }

  let count = 0;

  for (let i = 0; i < s.length; i += 1) {
    // i칸 씩 회전
    const rotated = s.slice(i) + s.slice(0, i);

    if (isValid(rotated)) {
      count += 1;
    }
  }

  return count;
}

describe('괄호 회전하기', () => {
  it('test', () => {
    expect(solution('[](){}')).toBe(3);
    expect(solution('}]()[{')).toBe(2);
    expect(solution('[)(]')).toBe(0);
    expect(solution('}}}')).toBe(0);
  });
});
