const fibs = [0, 1, 2];

function solution(n = 1) {
  if (n <= 2) {
    return fibs[n];
  }

  if (fibs[n]) {
    return fibs[n];
  }

  fibs[n] = solution(n - 1) + solution(n - 2);

  return fibs[n] % 1234567;
}

describe('멀리 뛰기', () => {
  it('test', () => {
    expect(solution(1)).toBe(1);

    expect(solution(2)).toBe(2);

    expect(solution(3)).toBe(3);

    expect(solution(4)).toBe(5);
  });
});
