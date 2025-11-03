function solution(s) {
  const stack = [];

  s.split(' ').forEach(char => {
    if (char === 'Z') stack.pop();
    else stack.push(+char);
  });

  return stack.length ? stack.reduce((acc, cur) => acc + cur, 0) : 0;
}

describe('', () => {
  it('test', () => {
    expect(solution('1 2 Z 3')).toBe(4);
  });
});
