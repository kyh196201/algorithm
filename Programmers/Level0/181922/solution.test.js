function solution(arr, queries) {
  queries.forEach(([s, e, k]) => {
    for (let i = s; i <= e; i++) {
      if (i % k === 0) {
        arr[i] += 1;
      }
    }
  });

  return arr;
}

describe('', () => {
  it('test', () => {
    expect(
      solution(
        [0, 1, 2, 4, 3],
        [
          [0, 4, 1],
          [0, 3, 2],
          [0, 3, 3],
        ],
      ),
    ).toEqual([3, 2, 4, 6, 4]);
  });
});
