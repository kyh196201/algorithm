function solution(arr, queries) {
  return queries.map(query => {
    const [s, e, k] = query;

    const candidates = arr
      .slice(s, e + 1)
      .filter(v => v > k)
      .sort((a, b) => a - b);

    return candidates[0] ?? -1;
  });
}

describe('', () => {
  it('test', () => {
    expect(
      solution(
        [0, 1, 2, 4, 3],
        [
          [0, 4, 2],
          [0, 3, 2],
          [0, 2, 2],
        ],
      ),
    ).toEqual([3, 4, -1]);
  });
});
