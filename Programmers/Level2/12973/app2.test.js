function solution(str = '') {
  if (str.length % 2 === 1) return 0;

  const stack = [];
  let top = -1;

  for (let i = 0; i < str.length; i += 1) {
    const letter = str.charAt(i);

    if (stack[top] === letter) {
      stack.pop();
      top -= 1;
    } else {
      stack.push(letter);
      top += 1;
    }
  }

  return top >= 0 ? 0 : 1;
}

describe('짝지어 제거하기', () => {
  it('test', () => {
    expect(solution('aaa')).toBe(0);

    expect(solution('baabaa')).toBe(1);

    expect(solution('cdcd')).toBe(0);
  });
});
