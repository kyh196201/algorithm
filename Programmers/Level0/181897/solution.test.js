function solution(n, slicer, numbers) {
  const [a, b, c] = slicer;

  if (n === 1) return numbers.slice(0, b + 1);
  if (n === 2) return numbers.slice(a);
  if (n === 3) return numbers.slice(a, b + 1);

  return numbers.slice(a, b + 1).filter((_, idx) => idx % c === 0);
}

describe('리스트 자르기', () => {
  it('n == 1', () => {
    expect(solution(1, [1, 5, 2], [1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual([
      1, 2, 3, 4, 5, 6,
    ]);
  });

  it('n == 2', () => {
    expect(solution(2, [1, 5, 2], [1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual([
      2, 3, 4, 5, 6, 7, 8, 9,
    ]);
  });

  it('n == 3', () => {
    expect(solution(3, [1, 5, 2], [1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual([
      2, 3, 4, 5, 6,
    ]);
  });

  it('n == 4', () => {
    expect(solution(4, [1, 5, 2], [1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual([
      2, 4, 6,
    ]);
  });
});
