function solution(n) {
  if (n === 1) return 1;
  if (n === 2) return 2;

  let a = 1; // n - 2
  let b = 2; // n - 1
  for (let i = 3; i <= n; i++) {
    const temp = (a + b) % 1000000007;
    a = b;
    b = temp;
    // [a, b] = [b, (a + b) % 1000000007]
  }

  return b;
}

describe('2*n 타일', () => {
  it('test', () => {
    expect(solution(1)).toBe(1);
    expect(solution(2)).toBe(2);
    expect(solution(3)).toBe(3);
    expect(solution(4)).toBe(5);
  });
});
