function solution(arr, queries) {
  queries.forEach(query => {
    const [i, j] = query;

    [arr[i], arr[j]] = [arr[j], arr[i]];
  });

  return arr;
}

describe('', () => {
  it('test', () => {
    expect(
      solution(
        [0, 1, 2, 3, 4],
        [
          [0, 3],
          [1, 2],
          [1, 4],
        ],
      ),
    ).toEqual([3, 4, 1, 0, 2]);
  });
});
