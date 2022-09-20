function solution(a = [], b = []) {
  a = a.sort((prev, next) => prev - next);
  b = b.sort((prev, next) => next - prev);

  let sum = 0;

  for (let i = 0; i < a.length; i += 1) {
    sum += a[i] * b[i];
  }

  return sum;
}

describe('최솟값 만들기', () => {
  it('test', () => {
    expect(solution([1, 4, 2], [5, 4, 4])).toEqual(29);

    expect(solution([1, 2], [3, 4])).toEqual(10);
  });
});
