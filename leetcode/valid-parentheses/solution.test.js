/**
 * 이해
 *
 * 주어지는 것
 *
 * 구해야하는 것
 * - 올바른 문자열 여부
 *
 * 조건
 *
 * 계획
 * - 여는 괄호를 담을 스택을 선언
 * - 여는 괄호일 경우 스택에 추가
 * - 닫는 괄호일 경우 스택의 top에 짝이 맞는 여는 괄호가 있는지 확인
 * 	- 있을 경우
 * 		- 스택에서 여는 괄호를 꺼냄
 * 	- 없을 경우
 * 		- 올바른 문자열이 아니므로 false 리턴
 *
 * - 마지막 문자까지 탐색했는데, 스택이 비어있지 않을 경우
 * 	- 짝을 못찾은 괄호가 있으므로 false 리턴
 *
 * 반성
 */

/**
 * @param {string} s
 * @return {boolean}
 */
function solution(s) {
  const stack = [];
  let top = -1;

  const pairs = {
    ')': '(',
    ']': '[',
    '}': '{',
  };

  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);
    if (char === '(' || char === '[' || char === '{') {
      stack.push(char);
      top += 1;
    } else {
      if (!stack[top]) {
        return false;
      }

      if (
        stack[top] !== pairs[char]
        // (stack[top] === '(' && char !== ')') ||
        // (stack[top] === '[' && char !== ']') ||
        // (stack[top] === '{' && char !== '}')
      ) {
        return false;
      }

      stack.pop();
      top -= 1;
    }
  }

  return top === -1;
}

describe('valid-parentheses', () => {
  it('test', () => {
    expect(solution('(')).toBe(false);
    expect(solution('()')).toBe(true);
    expect(solution('()[]{}')).toBe(true);
  });
});
